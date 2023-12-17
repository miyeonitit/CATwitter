"use client";

import { ReactNode } from "react";

import LeftMenuNav from "./_components/sideNavs/LeftMenuNav";
import RightSideNav from "./_components/sideNavs/RightSideNav";

import styles from "./layout.module.css";

type Props = {
  children: ReactNode;
};

export default function afterLoginLayout({ children }: Props) {
  return (
    <div className={styles.container}>
      <LeftMenuNav />

      <div className={styles.children_container}>{children}</div>

      <RightSideNav />
    </div>
  );
}
