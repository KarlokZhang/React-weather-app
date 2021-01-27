import { render } from "@testing-library/react";
import React from "react";
import "./Current.css";
import Temperature from "../Temperature/Temperature";

function Current() {
  return (
    <div className="current">
      <div className="current__left">
        <div>
          <Temperature degree={24} className="temperature__top" />
          <h3 className="current__weather">Clouds</h3>
        </div>
      </div>
      <div className="current__right"></div>
    </div>
  );
}

export default Current;
