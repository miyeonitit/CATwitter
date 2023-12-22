import ChatListRoom from "./_components/chatListRoom/ChatListRoom";

import styles from "./Message.module.css";

const MessagePage = () => {
  return (
    <div className={styles.message_page_wrapper}>
      <div>
        <div className={styles.message_page_header}>
          <h2>쪽지</h2>
        </div>

        <ChatListRoom />
        <ChatListRoom />
        <ChatListRoom />
        <ChatListRoom />
        <ChatListRoom />
        <ChatListRoom />
      </div>
    </div>
  );
};

export default MessagePage;
