"use client";

import Image from "next/image";
import cx from "classnames";
import { useQuery } from "@tanstack/react-query";

import UserType from "@/interfaces/UserType";
import { removeAtEmail } from "@/app/utils/removeAtEmail";
import { getUser } from "@/app/(afterLogin)/[userName]/_lib/getUser";

import styles from "./UserInfomationBox.module.css";

import userProfileImage from "../../../../../../public/profile_image.png";

type userInfomationBox = {
  userName: string;
};

const UserInfomationBox = ({ userName }: userInfomationBox) => {
  const { data: user, error } = useQuery<
    UserType,
    Object,
    UserType,
    [_1: string, _2: string]
  >({
    queryKey: ["users", userName],
    queryFn: getUser,
    staleTime: 60000,
    gcTime: 300000,
  });

  if (user.message) {
    return (
      <div className={styles.user_infomation_box_wrapper}>
        <div className={styles.user_background_image} />

        <div className={styles.user_profile_image_contents_box}>
          <div className={styles.user_profile_image_box}>
            <div className={styles.user_mock_profile_image} />
          </div>
        </div>

        <div className={styles.user_profile_box}>
          <div className={styles.user_profile_account_box}>
            <div className={styles.user_nickname}>@{userName}</div>
          </div>
        </div>
      </div>
    );
  }

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
            src={user?.image}
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
          <div className={styles.user_nickname}>{user?.name}</div>
          <div className={styles.user_account}>
            @{removeAtEmail(user?.email)}
          </div>
        </div>
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
