import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const UserDetails = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  const getUser = async () => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    const user = await response.json();
    setUser(user);
  };

  useEffect(() => {
    getUser();
  });

  return <div>{user && <p>{user.name}</p>}</div>;
};

export default UserDetails;
