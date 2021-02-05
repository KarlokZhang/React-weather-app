import React from "react";
import styles from "./Forecast.module.css";
import Weather from "./components/Weather";

function Forecast() {
  const weathers = [
    {
      key: 1,
      day: "MON",
      degree: "19",
      icon: "11d",
    },
    {
      key: 2,
      day: "TUE",
      degree: "15",
      icon: "01d",
    },
    {
      key: 3,
      day: "WED",
      degree: "11",
      icon: "03d",
    },
    {
      key: 4,
      day: "THU",
      degree: "7",
      icon: "50d",
    },
    {
      key: 5,
      day: "FRI",
      degree: "18",
      icon: "09d",
    },
  ];

  return (
    <div className={styles.forecastWeather}>
      <h2 className={styles.header}>Forecast</h2>
      <div className={styles.weathers}>
        {weathers.map((weather) => (
          <Weather
            key={weather.key}
            day={weather.day}
            degree={weather.degree}
            icon={weather.icon}
          ></Weather>
        ))}
      </div>
    </div>
  );
}

export default Forecast;
