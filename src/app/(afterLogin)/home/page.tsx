import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";

import { getPostRecommends } from "./_lib/getPostRecommends";

import Tab from "../_components/tab/Tab";
import TabDecider from "./_component/TabDecider";
import TabProvider from "../_components/tab/provider/TabProvider";
import TweetPostInput from "../_components/feed/tweetPostInput/TweetPostInput";

import styles from "./Home.module.css";

const FeedPage = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["posts", "recommends"],
    queryFn: getPostRecommends,
  });

  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <div className={styles.feed_page_wrapper}>
        <TabProvider>
          <Tab leftTab="For you" rightTab="Following" />

          <TweetPostInput />

          <TabDecider />
        </TabProvider>
      </div>
    </HydrationBoundary>
  );
};

export default FeedPage;
