"use client";

import React from "react";
import { useRouter } from "next/navigation";

import styles from "./TweetContentsWrapper.module.css";

type LayoutProps = {
  children: React.ReactNode;
};

type Props = {
  post: {
    post_id: number;
    content: string;
    User: {
      id: string;
      nickname: string;
      profile_image: string;
    };
    created_at: Date;
    Images: any[];
  };
};

const TweetContentsWrapper = ({ children }: LayoutProps) => {
  const router = useRouter();

  return (
    <article
      className={styles.feed_contents_wrapper}
      // onClickCapture={() =>
      //   router.push(`/${post.User.id}/status/${post.post_id}`)
      // }
    >
      {children}
    </article>
  );
};

export default TweetContentsWrapper;
