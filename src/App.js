import React, { useState } from "react";
import AddUsers from "./components/addUsers/AddUsers";
import UsersList from "./components/UsersList/UsersList";

const App = () => {
  const [users, setUsers] = useState([]);
  const handleNewUser = (username, age) => {
    setUsers((prevUsers) => {
      return [
        ...prevUsers,
        { username: username, age: age, id: Math.random() },
      ];
    });
  };
  const handleDelete = (e) => {
    const userUpdate = users.filter(users => {
      return users.id.toString() !== e.target.id.toString();
    })

    setUsers([...userUpdate]);
  };
  return (
    <React.Fragment>
      <AddUsers onNewUser={handleNewUser} />
      <UsersList onDelete={handleDelete} usersList={users} />
    </React.Fragment>
  );
};

export default App;
