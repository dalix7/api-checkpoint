import React, { useState, useEffect } from "react";
import axios from "axios";
import UserCard from "./UserCard";

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h1>User Liste</h1>
      <div
        class="thumb"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
          margin: "2% 10% ",
        }}
      >
        {users.map((el) => (
          <UserCard user={el} key={el.id} />
        ))}
      </div>
    </div>
  );
};

export default UserList;
