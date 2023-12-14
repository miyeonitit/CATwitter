"use client";

import Link from "next/link";

import LoginModal from "@/app/(beforeLogin)/_components/modals/LoginModal";

import styles from "./loginModalOutside.module.css";

const page = () => {
  return (
    <div className={styles.modal_outside_wrapper}>
      <Link href="/">
        <LoginModal />
      </Link>
    </div>
  );
};

export default page;
