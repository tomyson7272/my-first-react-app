import React from "react";
import { Link } from "react-router-dom";

const UserCard = ({ user }) => {
  return (
    <div className="flex flex-col border h-[200px] w-[200px] rounded-lg p-3 shadow-xl">
      <p>{user.name}</p>
      <Link to={`/users/${user.id}`}>
        <button className="bg-green-300 p-2">View User</button>
      </Link>
    </div>
  );
};

export default UserCard;
