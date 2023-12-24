import { faker } from "@faker-js/faker";
import cx from "classnames";
import dayjs from "dayjs";
import "dayjs/locale/ko";
import relativeTime from "dayjs/plugin/relativeTime";

import BackButton from "../../_components/button/backButton/BackButton";

import styles from "./ChatRoomPage.module.css";

dayjs.locale("ko");
dayjs.extend(relativeTime);

const ChatRoomPage = () => {
  const messages = [
    {
      messageId: 1,
      roomId: 123,
      id: "yeony",
      content: "안녕하세요.",
      createdAt: new Date(),
    },
    {
      messageId: 2,
      roomId: 123,
      id: "hero",
      content: "안녕히가세요.",
      createdAt: new Date(),
    },
  ];

  return (
    <div>
      <div className={styles.chat_room_header_wrapper}>
        <BackButton />

        <div className={styles.user_infomation_wrapper}>
          <div className={styles.user_nickname}>miyeonitit</div>
        </div>
      </div>

      <div className={styles.chat_room_user_infomation_box}>
        <img
          src={faker.image.avatar()}
          className={styles.user_profile_image}
          alt="user_profile_image"
        />
        <div className={styles.user_name}>user Nickname</div>
        <div className={styles.user_id}>@user id</div>
      </div>

      <div className={styles.chat_room_message_box}>
        {messages.map((data) => {
          if (data.id === "yeony") {
            // 내 메시지면
            return (
              <div
                key={data.messageId}
                className={cx(styles.message, styles.myMessage)}
              >
                <div className={styles.content}>{data.content}</div>
                <div className={styles.date}>
                  {dayjs(data.createdAt).format("YYYY년 MM월 DD일 A HH시 mm분")}
                </div>
              </div>
            );
          }
          return (
            <div
              key={data.messageId}
              className={cx(styles.message, styles.yourMessage)}
            >
              <div className={styles.content}>{data.content}</div>
              <div className={styles.date}>
                {dayjs(data.createdAt).format("YYYY년 MM월 DD일 A HH시 mm분")}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ChatRoomPage;
