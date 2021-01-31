import styles from "./App.module.css";
import Current from "./components/Current/Current";
import Forecast from "./components/Forecast/Forecast";
import Temperature from "./components/Temperature/Temperature";

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.weather}>
        <div className={styles.top}>
          <Current />
        </div>
        <div className={styles.bottom}>
          {/* <OtherCities />
          <VerticalDivider className="verticalDivider__bottom" /> */}
          <Forecast />
        </div>
      </div>
    </div>
  );
}

export default App;
