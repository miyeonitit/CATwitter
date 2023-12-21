"use client";

import Image from "next/image";

import dayjs from "dayjs";
import "dayjs/locale/ko";
import relativeTime from "dayjs/plugin/relativeTime";

import styles from "./TweetDetails.module.css";

import profileImage from "../../../../../../public/profile_image.png";
import feedContentsImage from "../../../../../../public/buzzy_feed_image.png";
import nonHeartIcon from "../../../../../../public/non_heart_icon.png";
import filledHeartIcon from "../../../../../../public/filled_heart_icon.png";
import sharedIcon from "../../../../../../public/shared_icon.png";
import contentsImage from "../../../../../../public/matdori.JPG";

dayjs.locale("ko");
dayjs.extend(relativeTime);

const TweetDetails = () => {
  const mockData = {
    User: {
      id: "mat_dori",
      nickname: "맛도리",
      profile_image: profileImage,
    },
    content: "오늘 배터지게 먹은 제 맛도리 소개합니다",
    created_at: new Date(),
    images: [],
  };

  return (
    <div className={styles.user_post_defail_page_wrapper}>
      <div className={styles.user_infomation_box}>
        <div className={styles.user_profile_image_box}>
          <Image
            src={mockData.User.profile_image}
            alt="profile_image"
            width={40}
            height={40}
          />
        </div>
        <div className={styles.user_post_detail_box}>
          <div className={styles.user_post_detail_title}>
            <div className={styles.user_post_detail_user_name}>
              {mockData.User.nickname}
            </div>
            <div className={styles.user_post_detail_user_infomation}>
              @{mockData.User.id}
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className={styles.user_post_detail_text}>{mockData.content}</div>
        <div className={styles.user_post_detail_image_box}>
          <Image
            src={contentsImage}
            className={styles.user_post_detail_image}
            alt="contents_image"
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      </div>

      <div className={styles.date_infomation_box}>
        <div className={styles.date_time}>3:55 PM</div>
        <div className={styles.date_ymd}>Dec 21, 2023</div>
      </div>

      <div className={styles.user_post_detail_footer}>
        <div className={styles.heart_icon_box}>
          <Image
            src={filledHeartIcon}
            className={styles.heart_icon}
            alt="heart_icon"
            width={15}
            height={15}
          />
          <span className={styles.user_post_detail_user_infomation}>12.2K</span>
        </div>
        <div>
          <Image src={sharedIcon} alt="shared_icon" width={15} height={15} />
        </div>
      </div>
    </div>
  );
};

export default TweetDetails;
