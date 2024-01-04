import type { NextRequest, NextResponse } from "next/server";

import Tab from "../_components/tab/Tab";
import TabProvider from "../_components/tab/provider/TabProvider";
import TweetContents from "../_components/feed/tweetContents/TweetContents";
import TweetPostInput from "../_components/feed/tweetPostInput/TweetPostInput";

import styles from "./Home.module.css";

const FeedPage = async (req: NextRequest, res: NextResponse) => {
  return (
    <div className={styles.feed_page_wrapper}>
      <TabProvider>
        <Tab leftTab="For you" rightTab="Following" />

        <TweetPostInput />

        <TweetContents />
        <TweetContents />
        <TweetContents />
      </TabProvider>
    </div>
  );
};

export default FeedPage;
