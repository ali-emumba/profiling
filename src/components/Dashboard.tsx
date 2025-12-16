import { Profiler, useState } from "react";
import UserList from "./UserList";
import StatsPanel from "./StatsPanel";
import { onRenderProfiler } from "../profiler/profilerCallback";

export default function Dashboard() {
  const [refreshCount, setRefreshCount] = useState(0);

  return (
    <div style={{ padding: 20 }}>
      <h2>Dashboard</h2>

      <button onClick={() => setRefreshCount((c) => c + 1)}>
        Refresh ({refreshCount})
      </button>

      <Profiler id="StatsPanel" onRender={onRenderProfiler}>
        <StatsPanel />
      </Profiler>

      <Profiler id="UserList" onRender={onRenderProfiler}>
        <UserList />
      </Profiler>
    </div>
  );
}
