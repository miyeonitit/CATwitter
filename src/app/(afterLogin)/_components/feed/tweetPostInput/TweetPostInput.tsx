import Image from "next/image";

import styles from "./TweetPostInput.module.css";

import profileImage from "../../../../../../public/profile_image.png";
import menuIcon from "../../../../../../public/nyang_foot.png";

const TweetPostInput = () => {
  return (
    <div className={styles.feed_post_wrapper}>
      <div className={styles.profile_image_section}>
        <Image src={profileImage} alt="profile_image" width={40} height={40} />
      </div>

      <div className={styles.feed_input_wrapper}>
        <div className={styles.feed_input_box}>
          <textarea
            placeholder="What is happening?!"
            className={styles.feed_input}
          />
        </div>
        <div className={styles.feed_input_menu_box}>
          <div className={styles.feed_input_left_menu_box}>
            <Image
              src={menuIcon}
              className={styles.menu_icon}
              alt="nyang_foot_icon"
              width={20}
              height={20}
            />
            <Image
              src={menuIcon}
              className={styles.menu_icon}
              alt="nyang_foot_icon"
              width={20}
              height={20}
            />
            <Image
              src={menuIcon}
              className={styles.menu_icon}
              alt="nyang_foot_icon"
              width={20}
              height={20}
            />
          </div>
          <div>
            <button className={styles.post_button}>Post</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TweetPostInput;
