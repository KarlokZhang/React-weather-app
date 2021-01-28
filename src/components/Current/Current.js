import { render } from "@testing-library/react";
import React from "react";
import "./Current.css";
import Temperature from "../Temperature/Temperature";
import Meta from "./components/Meta/Meta";
import VerticalDivider from "../VerticalDivider/VerticalDivider";

function Current() {
  return (
    <div className="current">
      <div className="current__left">
        <div>
          <Temperature degree={24} className="temperature__top" />
        </div>
        <span className="weather--description">Clouds</span>
        <div className="metas">
          <div className="humidity">
            <Meta title={"HUMIDITY"} value={"57%"} />
          </div>
          <VerticalDivider className="verticalDivider__top" />
          <div className="wind">
            <Meta title={"WIND"} value={"3.6 K/M"} />
          </div>
        </div>
      </div>
      <div className="current__right">
        <h2 className="current__city">Melbourne</h2>
      </div>
      <div className="current__bottom"></div>
    </div>
  );
}

export default Current;
