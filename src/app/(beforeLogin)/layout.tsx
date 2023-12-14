"use client";

import { ReactNode } from "react";

import styles from "./beforeLogin.module.css";

type Props = {
  children: ReactNode;
  modal?: ReactNode;
};

type footerMenuListType = {
  name: string;
  src: string;
};

export default function beforeLoginLayout({ children, modal }: Props) {
  const footerMenuList: footerMenuListType[] = [
    { name: "소개", src: "" },
    { name: "개발자", src: "" },
    { name: "설정", src: "" },
    { name: "@buzzy_nyang", src: "" },
  ];

  return (
    <>
      {children}
      {modal && modal}

      <footer className={styles.footer}>
        <div>
          {footerMenuList.map((menu) => (
            <span className={styles.footer_menu}>{menu.name}</span>
          ))}
        </div>
      </footer>
    </>
  );
}
