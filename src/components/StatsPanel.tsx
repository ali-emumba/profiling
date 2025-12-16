import React from "react";

function StatsPanel() {
  let total = 0;

  for (let i = 0; i < 6_000_000; i++) {
    total += i;
  }

  return (
    <div style={{ marginTop: 20 }}>
      <h4>Stats Panel</h4>
      <p>Total: {total}</p>
    </div>
  );
}

export default StatsPanel;
// export default React.memo(StatsPanel);
