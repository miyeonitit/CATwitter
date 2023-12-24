import BackButton from "../../button/backButton/BackButton";

import styles from "./ProfileHeader.module.css";

const ProfileHeader = () => {
  return (
    <div className={styles.profile_header_wrapper}>
      <BackButton />

      <div className={styles.user_infomation_wrapper}>
        <div className={styles.user_nickname}>miyeonitit</div>
        <div className={styles.user_posts_leangth}>1 post</div>
      </div>
    </div>
  );
};

export default ProfileHeader;
