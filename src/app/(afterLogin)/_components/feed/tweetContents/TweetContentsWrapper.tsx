"use client";

import { useRouter } from "next/navigation";

import { LayoutProps } from "@/interfaces/LayoutProps";

import styles from "./TweetContentsWrapper.module.css";

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

const TweetContentsWrapper = ({ children, post }: Props & LayoutProps) => {
  const router = useRouter();

  return (
    <article
      className={styles.feed_contents_wrapper}
      onClickCapture={() =>
        router.push(`/${post.User.id}/status/${post.post_id}`)
      }
    >
      {children}
    </article>
  );
};

export default TweetContentsWrapper;
