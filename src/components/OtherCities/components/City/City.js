import React from "react";
import styles from "./City.module.css";
import Temperature from "../../../Temperature/Temperature";

const City = ({ name, temperature }) => (
  <div className={styles.city}>
    <h3 className={styles.name}>{name}</h3>
    <div className={styles.temperature}>
      <Temperature>{temperature}</Temperature>
    </div>
    <img
      className={styles.weather}
      src="http://openweathermap.org/img/wn/04d.png"
      alt="weather"
    ></img>
  </div>
);

export default City;
