import ProfileHeader from "../_components/profile/header/ProfileHeader";
import UserInfomationBox from "../_components/profile/userInfomation/UserInfomationBox";
import FollowerBox from "../_components/followers/FollowerBox";
import TweetContents from "../_components/feed/tweetContents/TweetContents";

import styles from "./ProfilePage.module.css";

const ProfilePage = () => {
  return (
    <main className={styles.profile_image_wrapper}>
      <ProfileHeader />
      <UserInfomationBox />
      <FollowerBox />
      gdgd
      {/* <TweetContents />
      <TweetContents />
      <TweetContents /> */}
    </main>
  );
};

export default ProfilePage;
