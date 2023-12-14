"use client";

import { ReactNode } from "react";

import LeftMenuNav from "./_components/sideNavs/LeftMenuNav";

import styles from "./layout.module.css";

type Props = {
  children: ReactNode;
};

export default function afterLoginLayout({ children }: Props) {
  return (
    <div className={styles.container}>
      <LeftMenuNav />

      <div>{children}</div>

      <div></div>
    </div>
  );
}
