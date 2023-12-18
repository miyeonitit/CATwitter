import TweetContents from "../_components/feed/tweetContents/TweetContents";
import TweetPostInput from "../_components/feed/tweetPostInput/TweetPostInput";

import styles from "./UserNamePage.module.css";

const FeedPage = () => {
  return (
    <div className={styles.feed_page_wrapper}>
      <div className={styles.feed_page_header}>
        <div className={styles.header_tab}>For you</div>
        <div className={styles.header_tab}>Following</div>
      </div>

      <TweetPostInput />

      <TweetContents />
    </div>
  );
};

export default FeedPage;
