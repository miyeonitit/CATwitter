import Image from "next/image";

import styles from "./FollowerBox.module.css";

import profileImage from "../../../../../public/profile_image.png";

const FollowerBox = () => {
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
          <button className={styles.follow_button}>Follow</button>
        </div>
      </div>
    </div>
  );
};

export default FollowerBox;
