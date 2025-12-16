import { Profiler } from "react";
import Dashboard from "./components/Dashboard";
import { onRenderProfiler } from "./profiler/profilerCallback";

function App() {
  return (
    <Profiler id="AppRoot" onRender={onRenderProfiler}>
      <Dashboard />
    </Profiler>
  );
}

export default App;
