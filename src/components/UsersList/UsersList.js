import React from "react";
import Card from "../UI/Card";
import styles from "./UsersList.module.css";

const UserList = (props) => {
  const handleDelete = (e) =>{
    props.onDelete(e);
  }
  return (
    <Card className={styles.card}>
      <ul className={styles.ul}>
        {props.usersList.map((user) => {
          return (
            <li key = {user.id} id={`${user.id}`} className={styles.li} onClick={handleDelete}>
              {user.username} ({user.age} years old)
            </li>
          );
        })}
      </ul>
    </Card>
  );
};
export default UserList;
