"use client";

import { LayoutProps } from "@/interfaces/LayoutProps";

import styles from "./layout.module.css";

type footerMenuListType = {
  id: string;
  name: string;
  src: string;
};

export default function beforeLoginLayout({ children, modal }: LayoutProps) {
  const footerMenuList: footerMenuListType[] = [
    { id: "intro", name: "소개", src: "" },
    { id: "engineers", name: "개발자", src: "" },
    { id: "config", name: "설정", src: "" },
    { id: "account", name: "@buzzy_nyang", src: "" },
  ];

  return (
    <>
      {children}
      {modal && modal}

      <footer className={styles.footer}>
        <div>
          {footerMenuList.map((menu) => (
            <span key={menu.id} className={styles.footer_menu}>
              {menu.name}
            </span>
          ))}
        </div>
      </footer>
    </>
  );
}
