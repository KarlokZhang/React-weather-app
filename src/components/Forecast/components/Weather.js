import React from "react";
import styles from "./Weather.module.css";
import Temperature from "../../Temperature/Temperature";

const Weather = ({ day, degree, icon }) => (
  <div className={styles.weather}>
    <h3 className={styles.day}>{day}</h3>
    <img
      className={styles.icon}
      src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
      alt="weatherIcon"
    ></img>
    <div className={styles.temperature}>
      <Temperature degree={degree}></Temperature>
    </div>
  </div>
);

export default Weather;
