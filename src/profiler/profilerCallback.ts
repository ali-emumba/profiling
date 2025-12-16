import type { ProfilerOnRenderCallback } from "react";

type RenderMetric = {
  id: string;
  phase: "mount" | "update" | "nested-update";
  actualDuration: number;
  baseDuration: number;
  startTime: number;
  commitTime: number;
};

export const onRenderProfiler: ProfilerOnRenderCallback = (
  id,
  phase,
  actualDuration,
  baseDuration,
  startTime,
  commitTime
) => {
  const metric: RenderMetric = {
    id,
    phase,
    actualDuration,
    baseDuration,
    startTime,
    commitTime,
  };

  // Log only slow renders
  if (actualDuration > 16) {
    console.warn("⚠️ Slow render detected:", metric);
  }
};
