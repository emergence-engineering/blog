// Visual-review screenshots for the local dev server.
//
//   npm run screenshot -- /                 desktop + mobile of the home page
//   npm run screenshot -- /blog hero        adds a label to the file names
//   npm run screenshot -- /kapcsolat --desktop-only
//
// Output: screenshots/<page>-<viewport>[-label]-N.png (auto-incremented, gitignored).
//
// Why a script instead of `npx playwright screenshot`: the Growth Engineering
// pages reveal sections on scroll (.rv + IntersectionObserver), so a plain
// full-page capture shows blank sections. This forces prefers-reduced-motion
// (which ge.css uses to show everything) and scrolls the page once so lazy
// images and observers fire before capturing.
import { mkdirSync, readdirSync } from "node:fs";
import { join } from "node:path";

const [, , path = "/", ...rest] = process.argv;
const label = rest.find((a) => !a.startsWith("--"));
const desktopOnly = rest.includes("--desktop-only");
const mobileOnly = rest.includes("--mobile-only");
const base = process.env.SCREENSHOT_BASE_URL ?? "http://localhost:3000";
const url = path.startsWith("http") ? path : base + path;

const viewports = [
  { name: "desktop", width: 1440, height: 900 },
  {
    name: "mobile",
    width: 390,
    height: 844,
    isMobile: true,
    deviceScaleFactor: 2,
  },
].filter((v) =>
  desktopOnly ? v.name === "desktop" : mobileOnly ? v.name === "mobile" : true,
);

let chromium;
try {
  ({ chromium } = await import("playwright"));
} catch {
  console.error(
    "Playwright is not installed. Run: npm install && npx playwright install chromium",
  );
  process.exit(1);
}

const outDir = "screenshots";
mkdirSync(outDir, { recursive: true });
const slug =
  (url.startsWith(base) ? path : new URL(url).pathname)
    .replace(/^\/|\/$/g, "")
    .replace(/[^a-z0-9]+/gi, "-") || "home";

const nextName = (viewport) => {
  const prefix = [slug, viewport, label].filter(Boolean).join("-");
  const n =
    readdirSync(outDir).filter((f) => f.startsWith(prefix + "-")).length + 1;
  return join(outDir, `${prefix}-${n}.png`);
};

const browser = await chromium.launch();
try {
  for (const vp of viewports) {
    const context = await browser.newContext({
      viewport: { width: vp.width, height: vp.height },
      isMobile: vp.isMobile ?? false,
      hasTouch: vp.isMobile ?? false,
      deviceScaleFactor: vp.deviceScaleFactor ?? 1,
      reducedMotion: "reduce",
    });
    const page = await context.newPage();
    await page.goto(url, { waitUntil: "load" });
    // On a cold dev server Next renders "missing required error components,
    // refreshing..." and reloads itself once the chunk compiles. Wait it out.
    await page.waitForFunction(
      () =>
        !document.body.innerText.includes("missing required error components"),
      null,
      { timeout: 60000 },
    );
    await page.waitForLoadState("load");
    // Dev servers keep a websocket open, so network idle is best effort.
    await page
      .waitForLoadState("networkidle", { timeout: 5000 })
      .catch(() => {});
    // Scroll through the page so IntersectionObservers and lazy images fire.
    await page.evaluate(async () => {
      const step = window.innerHeight / 2;
      for (let y = 0; y < document.body.scrollHeight; y += step) {
        window.scrollTo(0, y);
        await new Promise((r) => setTimeout(r, 60));
      }
      window.scrollTo(0, 0);
    });
    await page
      .waitForLoadState("networkidle", { timeout: 5000 })
      .catch(() => {});
    await page.waitForTimeout(300);
    const file = nextName(vp.name);
    await page.screenshot({ path: file, fullPage: true });
    console.log(`${vp.name.padEnd(7)} ${vp.width}x${vp.height}  ->  ${file}`);
    await context.close();
  }
} finally {
  await browser.close();
}
