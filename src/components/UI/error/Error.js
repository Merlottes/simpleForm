import React from "react";
import Card from "../Card";
import Button from "../Button";
import styles from "./Error.module.css";
import ReactDOM from "react-dom";

const Modale = (props) =>{
    return <div className={styles.backdrop} onClick={props.handleOnClick}/>
}
const CardError = (props) =>{
    return<Card className={styles.card}>
    <header className={styles.header}>
        <h2>{props.h2}</h2>
    </header>
    <div>
        <p>{props.p}</p>
    </div>
    <footer>
        <Button className ={styles.button} onClick={props.handleOnClick}>Okay!</Button>
    </footer>
</Card>
}


const Error = (props) =>{
    const handleOnClick = () =>{
        props.onClick();
    }
    return(
        <React.Fragment>
        
        {ReactDOM.createPortal(
            <Modale handleOnClick={handleOnClick} />,
            document.getElementById("modal-root")
        )}
        {ReactDOM.createPortal(
            <CardError h2={props.h2} p={props.p} handleOnClick={handleOnClick} />,
            document.getElementById("modal-root")
        )}
</React.Fragment>
    );
}
export default Error;