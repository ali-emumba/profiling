import { useState } from "react";
import UserList from "./UserList";
import StatsPanel from "./StatsPanel";

export default function Dashboard() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ padding: 20 }}>
      <h2>Dashboard</h2>

      <button onClick={() => setCount((c) => c + 1)}>
        Refresh Stats ({count})
      </button>

      <StatsPanel />
      <UserList />
    </div>
  );
}
