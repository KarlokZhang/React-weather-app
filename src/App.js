import "./App.css";
import Current from "./components/Current/Current";

function App() {
  return (
    <div className="app">
      <div className="weather">
        <div className="top">
          <Current />
        </div>
        {/* <div className="bottom">
          <OtherCities />
          <VerticalDivider className="verticalDivider__bottom" />
          <Forecast />
        </div> */}
      </div>
    </div>
  );
}

export default App;
