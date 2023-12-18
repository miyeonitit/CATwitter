import Image from "next/image";

import styles from "./TweetContents.module.css";

import profileImage from "../../../../../../public/profile_image.png";
import feedContentsImage from "../../../../../../public/buzzy_feed_image.png";
import nonHeartIcon from "../../../../../../public/non_heart_icon.png";
import filledHeartIcon from "../../../../../../public/filled_heart_icon.png";
import sharedIcon from "../../../../../../public/shared_icon.png";

const TweetContents = () => {
  return (
    <div className={styles.feed_contents_wrapper}>
      <div className={styles.feed_contents_image_box}>
        <Image src={profileImage} alt="profile_image" width={40} height={40} />
      </div>

      <div className={styles.feed_contents_box}>
        <div className={styles.feed_contents_title}>
          <div className={styles.feed_contents_user_name}>user name</div>
          <div className={styles.feed_contents_user_infomation}>
            <span>@user id tag</span> • <span>upload date</span>
          </div>
        </div>

        <div>
          <div className={styles.feed_contents_text}>user contents text</div>
          <div className={styles.feed_contents_image_box}>
            <Image
              src={feedContentsImage}
              className={styles.feed_contents_image}
              alt="contents_image"
              width={600}
            />
          </div>
        </div>

        <div className={styles.feed_contents_footer}>
          <div>
            <Image src={sharedIcon} alt="shared_icon" width={15} height={15} />
          </div>
          <div className={styles.heart_icon_box}>
            <Image
              src={filledHeartIcon}
              className={styles.heart_icon}
              alt="heart_icon"
              width={15}
              height={15}
            />
            <span className={styles.feed_contents_user_infomation}>12.2K</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TweetContents;
