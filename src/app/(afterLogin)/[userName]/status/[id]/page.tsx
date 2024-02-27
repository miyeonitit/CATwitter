import ProfileHeader from "../../../_components/profile/header/ProfileHeader";
import TweetDetails from "../../../_components/feed/tweetDetails/TweetDetails";

import styles from "./UserTweetPostPage.module.css";

const UserTweetPostPage = () => {
  return (
    <div className={styles.user_tweet_post_page_wrapper}>
      <ProfileHeader />

      {/* <TweetDetails /> */}
    </div>
  );
};

export default UserTweetPostPage;
