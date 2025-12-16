import React from "react";

function StatsPanel() {
  // Simulate expensive computation
  let total = 0;
  for (let i = 0; i < 5_000_000; i++) {
    total += i;
  }

  return (
    <div style={{ marginTop: 20 }}>
      <h4>Stats Panel</h4>
      <p>Computed Value: {total}</p>
    </div>
  );
}

export default StatsPanel;
// export default React.memo(StatsPanel);
