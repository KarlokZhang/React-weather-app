import React from "react";
import styles from "./OtherCities.module.css";
import City from "./components/City/City";

const citys = [
  {
    key: 1,
    name: "Sydney",
    degree: "22",
    icon: "10n",
  },
  { key: 2, name: "Brisbane", degree: "28", icon: "03n" },
  { key: 3, name: "Perth", degree: "31", icon: "01d" },
];
const OtherCities = () => (
  <div className={styles.otherCities}>
    <h2 className={styles.header}>Other Cities</h2>
    <div>
      {citys.map((city) => (
        <City
          key={city.key}
          name={city.name}
          degree={city.degree}
          icon={city.icon}
        ></City>
      ))}
    </div>
  </div>
);

export default OtherCities;
