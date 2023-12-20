import SearchRankingBox from "../_components/search/searchRankingBox/SearchRankingBox";

import styles from "./ExplorePage.module.css";

const ExplorePage = () => {
  return (
    <div className={styles.explore_page_wrapper}>
      <SearchRankingBox />
    </div>
  );
};

export default ExplorePage;
