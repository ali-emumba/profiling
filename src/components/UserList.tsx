import React from "react";
import UserRow from "./UserRow";

const users = Array.from({ length: 300 }, (_, i) => ({
  id: i,
  name: `User ${i + 1}`,
}));

function UserList() {
  return (
    <div style={{ marginTop: 20 }}>
      <h4>User List</h4>

      {users.map((user) => (
        <UserRow key={user.id} name={user.name} />
      ))}
    </div>
  );
}

export default UserList;
// export default React.memo(UserList);
