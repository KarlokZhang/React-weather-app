import { render } from "@testing-library/react";
import React from "react";
import style from "./Current.module.css";
import Temperature from "../Temperature/Temperature";
import Meta from "./components/Meta/Meta";
import VerticalDivider from "../VerticalDivider/VerticalDivider";

function Current() {
  return (
    <div className={style.current}>
      <div className={style.current__left}>
        <div className={style.temperature__top}>
          <Temperature degree={24} />
        </div>
        <span className={style.description}>Clouds</span>
        <div className={style.metas}>
          <div className={style.humidity}>
            <Meta title={"HUMIDITY"} value={"57%"} />
          </div>
          <VerticalDivider className={style.verticalDivider__top} />
          <div className={style.wind}>
            <Meta title={"WIND"} value={"3.6 K/M"} />
          </div>
        </div>
      </div>
      <div className={style.current__right}>
        <h2 className={style.current__city}>Melbourne</h2>
      </div>
      <div className={style.current__bottom}></div>
    </div>
  );
}

export default Current;
