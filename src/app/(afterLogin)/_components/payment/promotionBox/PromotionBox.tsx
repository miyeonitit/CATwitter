import styles from "./PromotionBox.module.css";

const PromotionBox = () => {
  return (
    <div className={styles.promotion_box_wrapper}>
      <div className={styles.promotion_box_title}>Subscribe to Premium</div>
      <div className={styles.promotion_box_description}>
        Subscribe to unlock new features and if eligible, receive a share of ads
        revenue.
      </div>

      <button className={styles.payment_button}>Subscribe</button>
    </div>
  );
};

export default PromotionBox;
