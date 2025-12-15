import React, { useState } from "react";

function Parent() {
  const [count, setCount] = useState(0);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <List />
    </>
  );
}

function List() {
  return new Array(500).fill(0).map((_, i) => <Item key={i} index={i} />);
}

const Item = React.memo(function Item({ index }: { index: number }) {
  console.log("Render:", index);
  return <div>Row {index}</div>;
});

export default Parent;
