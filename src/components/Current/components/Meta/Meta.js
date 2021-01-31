import React from "react";
import styles from "./Meta.module.css";

const Meta = ({ title, value }) => (
  <div className={styles.meta}>
    <span className={styles.title}>{title}</span>
    <br></br>
    <span className={styles.value}>{value}</span>
  </div>
);

export default Meta;
