import React from "react";

type Props = {
  name: string;
};

function UserRow({ name }: Props) {
  return <div>{name}</div>;
}

export default UserRow;
// export default React.memo(UserRow);
