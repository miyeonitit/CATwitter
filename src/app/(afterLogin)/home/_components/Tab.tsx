"use client";

import { useState } from "react";
import cx from "classnames";

import styles from "./Tab.module.css";

const Tab = () => {
  const [tab, setTab] = useState("foryou");

  const controlClickTab = (tabText: string) => {
    setTab(tabText);
  };

  return (
    <div className={styles.feed_page_header}>
      <div
        className={cx(styles.header_tab, tab === "foryou" && styles.actived)}
        onClick={() => controlClickTab("foryou")}
        hidden={tab === "following"}
      >
        For you
        {tab === "foryou" && <div className={styles.indicator} />}
      </div>
      <div
        className={cx(styles.header_tab, tab === "following" && styles.actived)}
        onClick={() => controlClickTab("following")}
        hidden={tab === "foryou"}
      >
        Following
        {tab === "following" && <div className={styles.indicator} />}
      </div>
    </div>
  );
};

export default Tab;
