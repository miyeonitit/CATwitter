import styles from "./FetchingDataLoading.module.css";

const FetchingDataLoading = () => {
  return (
    <div className={styles.data_fetching_wrapper}>
      <div className={styles.data_fetching_box}>
        <div className={styles.loading_spinner_box}>
          <div className={styles.loading_spinner} />
        </div>

        <h2>데이터를 불러오고 있어요.</h2>
      </div>
    </div>
  );
};

export default FetchingDataLoading;
