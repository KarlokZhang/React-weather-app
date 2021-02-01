import React from "react";
import styles from "./Forecast.module.css";
import Weather from "./components/Weather";

function Forecast() {
  return (
    <div className={styles.forecastWeather}>
      <h2 className={styles.header}>Forecast</h2>
      <div className={styles.weathers}>
        <Weather day="MON" degree="19" icon="11d"></Weather>
        <Weather day="TUE" degree="15" icon="01d"></Weather>
        <Weather day="WED" degree="11" icon="03d"></Weather>
        <Weather day="THU" degree="7" icon="50d"></Weather>
        <Weather day="FRI" degree="18" icon="09d"></Weather>
      </div>
    </div>
  );
}

export default Forecast;
