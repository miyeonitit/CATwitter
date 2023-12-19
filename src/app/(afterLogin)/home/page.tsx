import Tab from "./_components/Tab";
import TabProvider from "./_components/provider/TabProvider";
import TweetContents from "../_components/feed/tweetContents/TweetContents";
import TweetPostInput from "../_components/feed/tweetPostInput/TweetPostInput";

import styles from "./Home.module.css";

const FeedPage = () => {
  return (
    <div className={styles.feed_page_wrapper}>
      <TabProvider>
        <Tab />

        <TweetPostInput />

        <TweetContents />
        <TweetContents />
        <TweetContents />
      </TabProvider>
    </div>
  );
};

export default FeedPage;
