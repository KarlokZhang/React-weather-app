import { render } from "@testing-library/react";
import React from "react";
import styles from "./Current.module.css";
import Temperature from "../Temperature/Temperature";
import Meta from "./components/Meta/Meta";
import VerticalDivider from "../VerticalDivider/VerticalDivider";

function Current() {
  return (
    <div className={styles.current}>
      <div className={styles.current__left}>
        <div className={styles.temperature__top}>
          <Temperature degree={24.84} />
        </div>
        <span className={styles.description}>Clouds</span>
        <div className={styles.metas}>
          <div className={styles.humidity}>
            <Meta title={"HUMIDITY"} value={"57%"} />
          </div>
          <VerticalDivider className={styles.verticalDivider__top} />
          <div className={styles.wind}>
            <Meta title={"WIND"} value={"3.6 K/M"} />
          </div>
        </div>
      </div>
      <div className={styles.current__right}>
        <h2 className={styles.current__city}>Melbourne</h2>
      </div>
      <div className={styles.current__bottom}></div>
    </div>
  );
}

export default Current;
