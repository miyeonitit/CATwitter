import Image from "next/image";
import cx from "classnames";

import styles from "./UserInfomationBox.module.css";

import userProfileImage from "../../../../../../public/profile_image.png";

const UserInfomationBox = () => {
  return (
    <div className={styles.user_infomation_box_wrapper}>
      <div className={styles.user_background_image_box}>
        {/* <Image
          src={userProfileBackgroundImage}
          alt="user_profile_background_image"
          sizes="100vw"
          style={{ width: "100%", height: "200px", objectFit: "cover" }}
        /> */}
      </div>

      <div className={styles.user_profile_image_contents_box}>
        <div className={styles.user_profile_image_box}>
          <Image
            src={userProfileImage}
            className={styles.user_profile_image}
            alt="user_profile_image"
            width={135}
            height={135}
          />
        </div>
        <div>
          <button className={styles.setting_profile_image_button}>
            Set up profile
          </button>
        </div>
      </div>

      <div className={styles.user_profile_box}>
        <div className={styles.user_profile_account_box}>
          <div className={styles.user_nickname}>miyeonitit</div>
          <div className={styles.user_account}>@cat_start</div>
        </div>
        <div className={styles.user_joined_date}>Joined December 2023</div>
        <div className={styles.user_following_box}>
          <div>
            <span className={cx(styles.follow_infomation, styles.bold)}>2</span>{" "}
            <span
              className={cx(
                styles.follow_infomation,
                styles.margin_right_space
              )}
            >
              Follwing
            </span>
          </div>
          <div>
            <span className={cx(styles.follow_infomation, styles.bold)}>0</span>{" "}
            <span className={styles.follow_infomation}>Followers</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInfomationBox;
