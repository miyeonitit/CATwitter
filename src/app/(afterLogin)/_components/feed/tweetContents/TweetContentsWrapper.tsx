"use client";

import { ReactNode } from "react";
import { useRouter } from "next/navigation";

import styles from "./TweetContentsWrapper.module.css";

type Props = {
  children: ReactNode;
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

const TweetContentsWrapper = ({ children, post }: Props) => {
  const router = useRouter();

  return (
    <article
      className={styles.feed_contents_wrapper}
      onClick={() => router.push(`/${post.User.id}/status/${post.post_id}`)}
    >
      {children}
    </article>
  );
};

export default TweetContentsWrapper;
