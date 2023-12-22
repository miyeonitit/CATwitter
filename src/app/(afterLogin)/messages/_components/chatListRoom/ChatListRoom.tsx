import { faker } from "@faker-js/faker";

import styles from "./ChatListRoom.module.css";

const ChatListRoom = () => {
  return (
    <div className={styles.chat_list_room_wrapper}>
      <div className={styles.user_profile_image_box}>
        <img
          src={faker.image.avatar()}
          className={styles.user_profile_image}
          alt="user_profile_image"
        />
      </div>

      <div>
        <div className={styles.user_infomation}>
          <div className={styles.user_name}>name</div>
          <div className={styles.user_id_date}>@id • date</div>
        </div>

        <div className={styles.user_chat_text}>content text</div>
      </div>
    </div>
  );
};

export default ChatListRoom;
