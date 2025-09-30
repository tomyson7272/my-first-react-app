import React, { useEffect, useState, useRef, useMemo } from "react";
import lodash from "lodash";

const UserDisplay = () => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState(null);
  const [userId, setUserId] = useState(null);
  const divRef = useRef(null);
  const [count, setCount] = useState(0);

  const getUsers = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    const sortedUsers = lodash.sortBy(users, ["name"]);

    setUsers(sortedUsers);
  };

  const getUser = async () => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );
    const user = await response.json();
    setUser(user);
  };

  useEffect(() => {
    getUsers();
  }, []);

  useEffect(() => {
    getUser();
  }, [userId]);

  const sortedNumbers = useMemo(() => {
    console.log("I run only if userId changes");
    return "I am great";
  }, [userId]);

  //   const sortedNumbers = () => {
  //     console.log("I run every time the page re-renders");
  //     return "I am great";
  //   };

  return (
    <div ref={divRef} className="flex flex-col items-center">
      <select onChange={(e) => setUserId(e.target.value)}>
        {users.map((user) => (
          <option key={user.id} value={user.id}>
            {user.name}
          </option>
        ))}
      </select>
      {user && (
        <div>
          <h1> {user.name}</h1>
          <p>{user.email}</p>
          <p>{sortedNumbers}</p>
        </div>
      )}

      <p>{count}</p>

      <button onClick={() => setCount(count + 1)}>increase count</button>
    </div>
  );
};

export default UserDisplay;
