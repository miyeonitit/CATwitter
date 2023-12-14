"use client";

import LoginModal from "../_components/modals/LoginModal";

import styles from "./loginModalOutside.module.css";

const page = () => {
  return (
    <div className={styles.modal_outside_wrapper}>
      <LoginModal />
    </div>
  );
};

export default page;
