import ProfileHeader from "../_components/profile/header/ProfileHeader";
import UserInfomationBox from "../_components/profile/userInfomation/UserInfomationBox";
import FollowerBox from "../_components/followers/FollowerBox";
import TweetContents from "../_components/feed/tweetContents/TweetContents";

import styles from "./UserNamePage.module.css";

const UserNamePage = () => {
  return (
    <main className={styles.profile_image_wrapper}>
      <ProfileHeader />

      <UserInfomationBox />

      <FollowerBox />

      <TweetContents />
      <TweetContents />
      <TweetContents />
    </main>
  );
};

export default UserNamePage;
