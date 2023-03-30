import React from "react";
import styles from "./input.module.css";

const Input = () => {
  return (
    <div className={styles.inputContainer}>
      <h1>Weather App</h1>
      <div className={styles.inputDiv}>
        <input type="text" />
      </div>
      <div className={styles.divider}></div>
      <div className={styles.autoBtn}>
        <button>Get Device Location</button>
      </div>
    </div>
  );
};

export default Input;
