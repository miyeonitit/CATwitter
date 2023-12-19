import Link from "next/link";

import TweetPostInput from "../feed/tweetPostInput/TweetPostInput";

import styles from "./TweetPostModal.module.css";

const TweetPostModalPage = () => {
  return (
    <div className={styles.modal_outside_wrapper}>
      <div className={styles.modal_wrapper}>
        <Link href="/">
          <div className={styles.close_button}>X</div>
        </Link>

        <div className={styles.post_input_wrapper}>
          <TweetPostInput />
        </div>
      </div>
    </div>
  );
};

export default TweetPostModalPage;
