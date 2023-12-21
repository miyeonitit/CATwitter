"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import styles from "./BackButton.module.css";

import leftArrow from "../../../../../../public/left_arrow_icon.png";

const BackButton = () => {
  const router = useRouter();

  return (
    <div className={styles.back_icon_box} onClick={() => router.back()}>
      <Image src={leftArrow} alt="go_to_back_page" width={20} height={20} />
    </div>
  );
};

export default BackButton;
