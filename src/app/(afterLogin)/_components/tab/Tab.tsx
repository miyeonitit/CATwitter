"use client";

import { useState, useEffect, useContext } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import cx from "classnames";

import { TabContext } from "./provider/TabProvider";

import styles from "./Tab.module.css";

type Props = {
  leftTab: string;
  rightTab: string;
};

const Tab = ({ leftTab, rightTab }: Props) => {
  const router = useRouter();
  const pathName = usePathname();
  const searchParams = useSearchParams();

  const query = searchParams.get("query");

  const { tab, setTab } = useContext(TabContext);

  useEffect(() => {
    if (tab === rightTab) {
      router.replace(`?tab=${tab}`);
    } else {
      router.replace(`/home`);
    }
  }, [tab, router]);

  useEffect(() => {
    if (pathName === "/search" && !query) {
      router.replace("/explore");
    }
  }, [pathName, query, router]);

  useEffect(() => {
    if (pathName === "/search") {
      const controlSearchQuery = () => {
        if (tab === leftTab) {
          router.replace(`/search?query=${query}`);
        } else {
          router.replace(`/search?query=${query}&filter=live`);
        }
      };

      controlSearchQuery();
    }
  }, [query, pathName, tab, router, leftTab]);

  return (
    <div className={styles.feed_page_header}>
      <div
        className={cx(styles.header_tab, tab === leftTab && styles.actived)}
        onClick={() => setTab(leftTab)}
        hidden={tab === rightTab}
      >
        {leftTab}
        {tab === leftTab && <div className={styles.indicator} />}
      </div>

      <div
        className={cx(styles.header_tab, tab === rightTab && styles.actived)}
        onClick={() => setTab(rightTab)}
        hidden={tab === leftTab}
      >
        {rightTab}
        {tab === rightTab && <div className={styles.indicator} />}
      </div>
    </div>
  );
};

export default Tab;
