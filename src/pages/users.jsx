import React, { useEffect, useState } from "react";
import lodash from "lodash";
import UserCard from "../components/UserCard";
import { useSearchParams } from "react-router-dom";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const filter = searchParams.get("filter");
  const date = searchParams.get("date");
  console.log(filter, date);

  const getUsers = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    const sortedUsers = lodash.sortBy(users, ["name"]);

    setUsers(sortedUsers);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="grid grid-cols-5 gap-y-3 items-center p-4">
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
};

export default Users;
