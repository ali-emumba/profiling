import React from "react";

const users = Array.from({ length: 400 }, (_, i) => ({
  id: i,
  name: `User ${i + 1}`,
}));

function UserList() {
  return (
    <div style={{ marginTop: 20 }}>
      <h4>User List</h4>
      {users.map((u) => (
        <div key={u.id}>{u.name}</div>
      ))}
    </div>
  );
}

export default UserList;
// export default React.memo(UserList);
