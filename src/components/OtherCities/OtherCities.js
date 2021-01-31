import React from "react";
import styles from "./OtherCities.module.css";
import City from "./components/City/City";

const OtherCities = () => (
  <div className={styles.OtherCities}>
    <h2 className={styles.header}>Other Cities</h2>
    <div>
      <City name="Sydney" degree="22"></City>
    </div>
  </div>
);

export default OtherCities;
