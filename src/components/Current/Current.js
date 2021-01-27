import { render } from "@testing-library/react";
import React from "react";
import "./Current.css";

function Current() {
  return (
    <div className="current">
      <div className="current__left">
        <div>
          <h2 className="current__temp">30.24 °C</h2>
          <h3 className="current__weather">Clouds</h3>
        </div>
      </div>
      <div className="current__right"></div>
    </div>
  );
}

export default Current;
