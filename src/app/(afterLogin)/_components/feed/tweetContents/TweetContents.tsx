"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import cx from "classnames";
import dayjs from "dayjs";
import "dayjs/locale/ko";
import relativeTime from "dayjs/plugin/relativeTime";

import PostType from "@/interfaces/PostType";
import { removeAtEmail } from "@/app/utils/removeAtEmail";

import TweetContentsWrapper from "./TweetContentsWrapper";

import styles from "./TweetContents.module.css";

import filledHeartIcon from "../../../../../../public/filled_heart_icon.png";
import sharedIcon from "../../../../../../public/shared_icon.png";

dayjs.locale("ko");
dayjs.extend(relativeTime);

type TweetContentsProps = {
  post: PostType;
};

const TweetContents: React.FC<TweetContentsProps> = ({
  post,
}: TweetContentsProps) => {
  return (
    <TweetContentsWrapper>
      <div
        className={cx(
          styles.feed_contents_image_box,
          styles.profile_image_box_wrapper
        )}
      >
        <Image
          src={post.User.image}
          className={styles.user_profile_image}
          alt="profile_image"
          width={40}
          height={40}
        />
      </div>

      <div className={styles.feed_contents_box}>
        <div className={styles.feed_contents_title}>
          <div className={styles.feed_contents_user_name}>{post.User.name}</div>
          <div className={styles.feed_contents_user_infomation}>
            <span>@{removeAtEmail(post.User.email)}</span> •{" "}
            <span>{dayjs(post.createdAt).fromNow()}</span>
          </div>
        </div>

        <div>
          <div className={styles.feed_contents_text}>{post.content}</div>
          {post.Images.map((image) => (
            <span key={image.imageId}>
              <Link href={`/miyeon/status/14/photo/55`}>
                <div className={styles.feed_contents_image_box}>
                  <img
                    src={image.link}
                    className={styles.feed_contents_image}
                    alt="contents_image"
                  />
                </div>
              </Link>
            </span>
          ))}
        </div>

        <div className={styles.feed_contents_footer}>
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
          <div className={styles.shared_icon_box}>
            <Image src={sharedIcon} alt="shared_icon" width={14} height={14} />
          </div>
        </div>
      </div>
    </TweetContentsWrapper>
  );
};

export default TweetContents;
