/**
 * Per-interaction INP grouping + percentile math for keystroke perf scenarios.
 *
 * The PerformanceObserver collects every PerformanceEventTiming entry (one
 * keystroke fires multiple: keydown, beforeinput, input, keyup — all sharing
 * one interactionId). Web Vitals INP takes the MAX duration across each
 * interaction's events, so we group by interactionId then reduce.
 *
 * Extracted from nodeview.spec.ts (runKeystrokeInp) so the keystroke-ramp
 * scenario can reuse the same math.
 */

export interface InpEntry {
  name: string;
  interactionId: number;
  startTime: number;
  processingStart: number;
  processingEnd: number;
  duration: number;
}

export interface InpInteraction {
  interactionId: number;
  events: string[];
  inputDelay: number;
  processingDuration: number;
  presentationDelay: number;
  duration: number;
}

export interface InpStats {
  count: number;
  p50: number;
  p95: number;
  p99: number;
  max: number;
  mean: number;
  meanInputDelay: number;
  meanProcessing: number;
  meanPresentation: number;
}

export function groupInteractions(entries: readonly InpEntry[]): InpInteraction[] {
  const byInteraction = new Map<number, InpEntry[]>();
  for (const e of entries) {
    const arr = byInteraction.get(e.interactionId);
    if (arr) arr.push(e);
    else byInteraction.set(e.interactionId, [e]);
  }
  return Array.from(byInteraction.entries())
    .map(([id, group]) => {
      const dominant = group.reduce((a, b) => (a.duration >= b.duration ? a : b));
      return {
        interactionId: id,
        events: group.map((e) => e.name),
        inputDelay: dominant.processingStart - dominant.startTime,
        processingDuration: dominant.processingEnd - dominant.processingStart,
        presentationDelay: dominant.startTime + dominant.duration - dominant.processingEnd,
        duration: dominant.duration,
      };
    })
    .sort((a, b) => a.interactionId - b.interactionId);
}

export function computeStats(interactions: readonly InpInteraction[]): InpStats | null {
  if (interactions.length === 0) return null;
  const sorted = interactions.map((i) => i.duration).sort((a, b) => a - b);
  const pick = (q: number): number =>
    sorted[Math.min(sorted.length - 1, Math.floor(sorted.length * q))];
  const mean = (xs: readonly number[]): number => xs.reduce((s, v) => s + v, 0) / xs.length;
  return {
    count: interactions.length,
    p50: pick(0.5),
    p95: pick(0.95),
    p99: pick(0.99),
    max: sorted[sorted.length - 1],
    mean: mean(sorted),
    meanInputDelay: mean(interactions.map((i) => i.inputDelay)),
    meanProcessing: mean(interactions.map((i) => i.processingDuration)),
    meanPresentation: mean(interactions.map((i) => i.presentationDelay)),
  };
}

export function formatStatsLine(stats: InpStats): string {
  return (
    `INP p50=${stats.p50.toFixed(2)}ms ` +
    `p95=${stats.p95.toFixed(2)}ms ` +
    `p99=${stats.p99.toFixed(2)}ms ` +
    `max=${stats.max.toFixed(2)}ms ` +
    `| mean inputDelay=${stats.meanInputDelay.toFixed(2)}ms ` +
    `processing=${stats.meanProcessing.toFixed(2)}ms ` +
    `presentation=${stats.meanPresentation.toFixed(2)}ms`
  );
}
