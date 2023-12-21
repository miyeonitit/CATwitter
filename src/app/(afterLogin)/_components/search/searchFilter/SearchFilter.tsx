import cx from "classnames";

import styles from "./SearchFilter.module.css";

const SearchFilter = () => {
  return (
    <div>
      <div className={cx(styles.search_filter_wrapper, styles.filter_title)}>
        검색 필터
      </div>

      <div className={cx(styles.search_filter_wrapper, styles.contents_box)}>
        <label className={styles.search_filter_sub_title}>사용자</label>
        <div className={styles.search_filter_contents_box}>
          <div>모든 사용자</div>
          <input type="radio" name="allPeople" defaultChecked />
        </div>
        <div className={styles.search_filter_contents_box}>
          <div>내가 팔로우하는 사람들</div>
          <input type="radio" name="myFollower" value="on" />
        </div>
      </div>
    </div>
  );
};

export default SearchFilter;
