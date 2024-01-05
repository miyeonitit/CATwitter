"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

import styles from "./FollowerBox.module.css";

import profileImage from "../../../../../public/profile_image.png";

const FollowerBox = () => {
  const router = useRouter();
  const { data } = useSession();

  const handleUserFollow = () => {
    if (!data) {
      router.replace("/login");
    }
  };

  return (
    <div className={styles.follower_box_wrapper}>
      <div className={styles.follower_box_title}>Who to follow</div>

      <div className={styles.follower_box_contents}>
        <div className={styles.follower_infomation}>
          <div className={styles.follower_profile_image_box}>
            <Image
              src={profileImage}
              alt="profile_image"
              width={40}
              height={40}
            />
          </div>
          <div>
            <div className={styles.follower_words}>버터냥</div>
            <div className={styles.follower_tag}>@butter_nyang</div>
          </div>
        </div>

        <div className={styles.follow_button_box}>
          <button
            className={styles.follow_button}
            onClick={() => handleUserFollow()}
          >
            Follow
          </button>
        </div>
      </div>
    </div>
  );
};

export default FollowerBox;
