import styles from "./App.module.css";
import Current from "./components/Current/Current";
import Forecast from "./components/Forecast/Forecast";
import OtherCities from "./components/OtherCities/OtherCities";
import VerticalDivider from "./components/VerticalDivider/VerticalDivider";

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.weather}>
        <div className={styles.top}>
          <Current />
        </div>
        <div className={styles.bottom}>
          <OtherCities />
          <VerticalDivider className={styles.verticalDivider__bottom} />
          <Forecast />
        </div>
      </div>
    </div>
  );
}

export default App;
