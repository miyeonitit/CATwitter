import SearchBar from "../search/searchBar/SearchBar";
import PromotionBox from "../payment/promotionBox/PromotionBox";
import SearchRankingBox from "../search/searchRankingBox/SearchRankingBox";

import styles from "./RightSideNav.module.css";

const RightSideNav = () => {
  return (
    <div className={styles.left_menu_nav_wrapper}>
      <SearchBar />
      <PromotionBox />
      <SearchRankingBox />
    </div>
  );
};

export default RightSideNav;
