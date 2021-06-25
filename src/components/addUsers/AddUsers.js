import React, { useState } from "react";
import Card from "../UI/Card";
import styles from "./AddUsers.module.css";
import Button from "../UI/Button";
import Error from "../UI/error/Error";

const AddUsers = (props) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState();



  const handleChangeUsername = (e) => {
    setUsername(e.target.value);
  };
  const handleChangeAge = (e) => {
    setAge(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim().length === 0 || age.trim().length === 0) {
      setError({h2:"No data entered", p: "Please fill all the inputs of the form." });
      return;
    } else if (parseInt(age) < 1) {
      setError({h2:"Age invalid", p: "Please enter a valid age." });
      return;
    }
    props.onNewUser(username, age);
    setUsername("");
    setAge("");
  };
  const handleClick = () =>{
    setError();
  }
  return (
    <React.Fragment>
    
    {error && <Error h2={error.h2} p={error.p} onClick={handleClick}></Error>}
      <Card className={styles.card}>

        <form className={styles.form} onSubmit={handleSubmit}>
          <label htmlFor="Username" className={styles.label}>
            Username:
          </label>
          <input
            id="Username"
            type="text"
            className={styles.input}
            onChange={handleChangeUsername}
            value={username}
          ></input>
          <label htmlFor="Age" className={styles.label}>
            Age (Number):
          </label>
          <input
            id="Age"
            type="number"
            className={styles.input}
            onChange={handleChangeAge}
            value={age}
          ></input>
          <Button type="submit" className={styles.button}>
            Add User
          </Button>
        </form>
      </Card>
    </React.Fragment>
  );
};
export default AddUsers;
