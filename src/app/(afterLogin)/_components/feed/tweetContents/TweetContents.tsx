"use client";

import Image from "next/image";
import cx from "classnames";
import dayjs from "dayjs";
import "dayjs/locale/ko";
import relativeTime from "dayjs/plugin/relativeTime";

import TweetContentsWrapper from "./TweetContentsWrapper";

import styles from "./TweetContents.module.css";

import profileImage from "../../../../../../public/profile_image.png";
import feedContentsImage from "../../../../../../public/buzzy_feed_image.png";
import nonHeartIcon from "../../../../../../public/non_heart_icon.png";
import filledHeartIcon from "../../../../../../public/filled_heart_icon.png";
import sharedIcon from "../../../../../../public/shared_icon.png";

dayjs.locale("ko");
dayjs.extend(relativeTime);

const TweetContents = () => {
  const mockData = {
    User: {
      id: "cat_star",
      nickname: "캣스타",
      profile_image: profileImage,
    },
    content: "귀여운 버찌 보고 가세요",
    created_at: new Date(),
    images: [],
  };

  return (
    <TweetContentsWrapper>
      <div
        className={cx(
          styles.feed_contents_image_box,
          styles.profile_image_box_wrapper
        )}
      >
        <Image
          src={mockData.User.profile_image}
          alt="profile_image"
          width={40}
          height={40}
        />
      </div>

      <div className={styles.feed_contents_box}>
        <div className={styles.feed_contents_title}>
          <div className={styles.feed_contents_user_name}>
            {mockData.User.nickname}
          </div>
          <div className={styles.feed_contents_user_infomation}>
            <span>@{mockData.User.id}</span> •{" "}
            <span>{dayjs(mockData.created_at).fromNow()}</span>
          </div>
        </div>

        <div>
          <div className={styles.feed_contents_text}>{mockData.content}</div>
          <div className={styles.feed_contents_image_box}>
            <Image
              src={feedContentsImage}
              className={styles.feed_contents_image}
              alt="contents_image"
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        </div>

        <div className={styles.feed_contents_footer}>
          <div>
            <Image src={sharedIcon} alt="shared_icon" width={15} height={15} />
          </div>
          <div className={styles.heart_icon_box}>
            <Image
              src={filledHeartIcon}
              className={styles.heart_icon}
              alt="heart_icon"
              width={15}
              height={15}
            />
            <span className={styles.feed_contents_user_infomation}>12.2K</span>
          </div>
        </div>
      </div>
    </TweetContentsWrapper>
  );
};

export default TweetContents;
