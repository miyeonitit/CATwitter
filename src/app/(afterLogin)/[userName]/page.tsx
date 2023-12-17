import styles from "./UserNamePage.module.css";

const FeedPage = () => {
  return (
    <div className={styles.feed_page_wrapper}>
      <div className={styles.feed_page_header}>
        <div className={styles.header_tab}>For you</div>
        <div className={styles.header_tab}>Following</div>
      </div>
    </div>
  );
};

export default FeedPage;
