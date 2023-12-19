"use client";

import { ReactNode } from "react";

import LeftMenuNav from "./_components/sideNavs/LeftMenuNav";
import RightSideNav from "./_components/sideNavs/RightSideNav";

import styles from "./layout.module.css";

type Props = {
  children: ReactNode;
  modal?: ReactNode;
};

export default function afterLoginLayout({ children, modal }: Props) {
  return (
    <div className={styles.container}>
      {modal && modal}

      <LeftMenuNav />

      <div className={styles.children_container}>{children}</div>

      <RightSideNav />
    </div>
  );
}
