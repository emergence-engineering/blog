# react-prosemirror vs vanilla ProseMirror vs Tiptap 3 — perf harness

Supporting code for the blog post **[react-prosemirror.tsx](../../pages/blog/react-prosemirror.tsx)**
(`/blog/react-prosemirror`). It benchmarks the same minimal rich-text editor
built three ways and measures what each abstraction layer costs at scale
(memory, script time, layout/recalc, keystroke latency).

The editors render into the **main blog Next app** as ordinary Pages-Router
routes, and a set of [Playwright](https://playwright.dev/) specs drive them via
the Chrome DevTools Protocol to collect metrics, then render comparison graphs.

## The three implementations

| impl | library | route | notes |
| ---- | ------- | ----- | ----- |
| `v3` | [`@handlewithcare/react-prosemirror`](https://github.com/handlewithcarecollective/react-prosemirror) | [`/perf-react-prosemirror`](../../pages/perf-react-prosemirror.tsx) | barebone, no custom nodeviews |
| `v4` | vanilla `prosemirror-view` | [`/perf-vanilla-prosemirror`](../../pages/perf-vanilla-prosemirror.tsx) | no React reconciliation — the floor |
| `v5` | [Tiptap 3](https://tiptap.dev/) | [`/perf-tiptap`](../../pages/perf-tiptap.tsx) | `Document + Paragraph + Text + History` only |

Each has a **`-snv` ("static nodeview")** sibling that adds a realistic custom
per-paragraph nodeview (authorship gutter: avatar + chip), to measure custom
nodeview cost without context-driven re-render pathology:

| impl | route |
| ---- | ----- |
| `v3-snv` | [`/perf-react-prosemirror-snv`](../../pages/perf-react-prosemirror-snv.tsx) |
| `v4-snv` | [`/perf-vanilla-prosemirror-snv`](../../pages/perf-vanilla-prosemirror-snv.tsx) |
| `v5-snv` | [`/perf-tiptap-snv`](../../pages/perf-tiptap-snv.tsx) |

> The reactive `-nv` variants (`v3-nv` / `v4-nv` / `v5-nv`) and the `ctx-flip`
> scenario are referenced by the harness but their pages are **not yet wired**;
> add `editors/perf-v{3,4,5}-nv/page.tsx` + matching `pages/` routes to enable
> them.

### Page query params

- `?n=<N>` — seed the doc with `N` paragraphs on load (cold-load / pre-sized runs).
- `?content=tech` — (snv pages) seed richer headings/code/quotes instead of empty paragraphs.

### Browser hooks

Every page exposes two `window` hooks the specs rely on:

- `window.__perfNodes: number` — current top-level child count.
- `window.__perfGrow(k: number)` — append `k` empty paragraphs (used to ramp doc size).

## Layout

```
articles/react-prosemirror/
├── editors/                      # editor React components (source of truth)
│   ├── lib/perf-gutter-style.ts  # shared nodeview styling
│   ├── perf-v3/page.tsx          # …and v3-snv, v4, v4-snv, v5, v5-snv
├── e2e/perf/
│   ├── constants.ts              # impl matrix, ports, thresholds, routeFor()
│   ├── stress.spec.ts            # type-until-MAX_NODES; CDP metric sampling
│   ├── nodeview.spec.ts          # scenarios: typing / cold-load / cursor / ctx-flip / keystroke-*
│   ├── keystroke-ramp.spec.ts    # ramp doc size until p95 INP > threshold
│   ├── inp-stats.ts              # per-interaction INP percentile math
│   └── create-graphs.ts          # results JSON → PNG charts (chartjs-node-canvas)
├── scripts/
│   ├── run-editor-perf.ts        # orchestrate stress across v3/v4/v5
│   ├── run-nodeview-perf.ts      # orchestrate nodeview impls × scenarios
│   └── run-keystroke-ramp.ts     # orchestrate keystroke-ramp across impls
├── playwright.perf.config.ts     # boots the blog (next start / next dev)
└── tsconfig.json                 # typechecks this harness (excluded from main build)
```

The `editors/*/page.tsx` files are the source; the blog routes in
[`pages/perf-*.tsx`](../../pages) are thin `dynamic(..., { ssr: false })`
wrappers around them (client-only, to avoid hydration mismatch from `?n=`).
The `@/lib/*` import alias resolves to `editors/lib/*` (see root `tsconfig.json`).

## Running

All commands are run from the **repo root**. The npm scripts default to a
production build (`next build` once, then `next start` on port 3100) for
representative numbers.

```bash
npm run perf                 # stress benchmark for v3/v4/v5 + graphs
npm run perf:nodeview        # nodeview spec: typing + cold-load scenarios + graphs
npm run perf:keystroke-ramp  # keystroke latency ramp for the -snv impls + graphs
npm run perf:test            # raw `playwright test` (pass a spec path / EDITOR_IMPL yourself)
```

### Fast iteration (dev server, no build)

```bash
PERF_DEV=1 npm run perf            # orchestrator boots `next dev` instead of build+start
# or reuse a server you already have running:
npx next dev -p 3100 &
cd articles/react-prosemirror
EDITOR_IMPL=v3 PERF_MAX_NODES=300 \
  npx playwright test --config=playwright.perf.config.ts e2e/perf/stress.spec.ts
```

(`reuseExistingServer` is on, so any server already listening on the perf port
is reused.)

## Environment variables

Selection / orchestration:

| var | default | meaning |
| --- | ------- | ------- |
| `EDITOR_IMPL` | `v1` | which impl a single spec run targets (`v3`/`v4`/`v5`/`-snv`/`-nv`) |
| `PERF_SCENARIO` | `typing` | nodeview scenario: `typing` `cold-load` `cursor` `ctx-flip` `keystroke-latency` `keystroke-inp` |
| `PERF_IMPLS` / `PERF_NV_IMPLS` / `PERF_RAMP_IMPLS` | per script | comma list the orchestrators iterate |
| `PERF_NV_SCENARIOS` | `typing,cold-load` | scenarios `run-nodeview-perf.ts` iterates |
| `PERF_DEV` | – | `1` → `next dev` instead of build+start |
| `PERF_SKIP_BUILD` | – | `1` → reuse an existing production build |

Tuning (use low values for quick runs):

| var | default | meaning |
| --- | ------- | ------- |
| `PERF_MAX_NODES` | `2000` (`20000` if `PERF_FULL=1`) | stress/nodeview ceiling |
| `PERF_NODECOUNT_STEP` | `200` | nodes per checkpoint sample |
| `PERF_MEASUREMENT_MS` | `2000` | CDP metric polling interval |
| `PERF_RAMP_STEP` | `500` | nodes added per keystroke-ramp iteration |
| `PERF_RAMP_PRESSES` | `150` | keystrokes measured per iteration |
| `PERF_RAMP_MAX_ITER` | `30` | safety cap on ramp iterations |
| `PERF_LAG_P95_MS` | `100` | p95 INP threshold that defines "laggy" |
| `PERF_TIMEOUT_MS` / `PERF_GLOBAL_TIMEOUT_MS` | 10min / 25min | per-test / whole-run timeouts |
| `PERF_STRESS_WALL` | – | `1` → keep typing until the editor breaks (heap/slow-batch/crash); writes `*-stress-wall-*` sidecars |
| `PERF_WEB_PORT` | `3100` | port the blog is served on |

**Quick smoke (~1 min, low numbers):**

```bash
npx next dev -p 3100 &
cd articles/react-prosemirror
for impl in v3 v4 v5; do
  EDITOR_IMPL=$impl PERF_MAX_NODES=300 PERF_MEASUREMENT_MS=500 PERF_NODECOUNT_STEP=100 \
    npx playwright test --config=playwright.perf.config.ts e2e/perf/stress.spec.ts
done
```

## Output

Specs write JSON to `e2e/perf/results/` (gitignored):

- `<impl>-perfMetrics.json` — CDP metric time-series (`JSHeapUsedSize`, `ScriptDuration`, `LayoutCount`, `RecalcStyleCount`, `TaskDuration`, `Nodes`).
- `<impl>-nodecount.json` — nodes vs elapsed-ms.
- `<impl>-<scenario>-*.json`, `<impl>-keystroke-ramp-summary.json`, `*.trace.json` — scenario-specific outputs (the trace files load into Chrome DevTools' Performance tab).

`create-graphs.ts` renders these to per-impl and `combined-*` PNGs in the same
folder. The curated charts that ship with the post live in
[`public/blog/react-prosemirror/`](../../public/blog/react-prosemirror).

## Patched dependency: react-prosemirror `reactKeys` memory leak

`@handlewithcare/react-prosemirror@3.0.6` ships a memory leak in its
`reactKeys()` plugin that the `v3`/`v3-snv` benchmarks would otherwise pin on
the library unfairly. We carry the same fix the upstream `proof` app uses, via
[`patch-package`](https://github.com/ds300/patch-package):

- **Patch file:** [`patches/@handlewithcare+react-prosemirror+3.0.6.patch`](../../patches)
- **Auto-applied** on every install by the root `"postinstall": "patch-package"` script.

**The bug.** The plugin's `apply(tr, value, …)` returns a freshly allocated
`{ posToKey, keyToPos }` (two new `Map`s) on every document-changing
transaction. React fiber `memoizedState` pins those objects for every memoized
node view, so each *unchanged* node keeps holding the plugin-state snapshot from
the time it last rendered. At `N` nodes this retains `Σ(1..N)` Map entries —
**O(N²)** heap growth — which shows up directly as runaway `JSHeapUsedSize` in
the stress / keystroke-ramp runs.

**The fix.** Keep stable identity for the outer object *and* its two `Map`s by
mutating them in place: compute the next contents in temporary Maps (so
iteration over the old Map isn't disturbed), then `clear()` and re-fill the
originals, returning the same `value`. Mutating across an `EditorState` boundary
is normally a smell, but `prosemirror-history` doesn't snapshot plugin state and
the only consumer (`useReactKeys`) always reads from the latest `view.state`, so
observable behaviour is unchanged. Both the `dist/cjs` and `dist/esm` builds are
patched.

> Regenerating / updating the patch: edit
> `node_modules/@handlewithcare/react-prosemirror/dist/{cjs,esm}/plugins/reactKeys.js`,
> then run `npx patch-package @handlewithcare/react-prosemirror`. If the pinned
> version ever changes, delete the old patch file and regenerate.

## Requirements

Runtime deps are in the blog's root `package.json`
(`@handlewithcare/react-prosemirror` + a pinned `react-reconciler@0.29.2` for
React 18, `@tiptap/*` v3) — plus the `patch-package` postinstall fix above. Test
deps: `@playwright/test`, `tsx`, `chartjs-node-canvas`, `chart.js`. Install the
browser once with:

```bash
npx playwright install chromium
```
