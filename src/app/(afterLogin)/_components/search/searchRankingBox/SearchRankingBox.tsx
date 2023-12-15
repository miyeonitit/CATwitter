import styles from "./SearchRankingBox.module.css";

const SearchRankingBox = () => {
  return (
    <div className={styles.search_ranking_box_wrapper}>
      <div className={styles.search_ranking_box_title}>Trends for you</div>

      <div className={styles.search_ranking_box_contents}>
        <div className={styles.trending_tag}>Trending in South Korea</div>
        <div className={styles.trending_words}>박버찌</div>
        <div className={styles.trending_tag}>13.4K posts</div>
      </div>
    </div>
  );
};

export default SearchRankingBox;
