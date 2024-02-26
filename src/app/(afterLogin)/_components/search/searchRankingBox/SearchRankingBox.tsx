import Link from "next/link";
import { useSession } from "next-auth/react";

import styles from "./SearchRankingBox.module.css";

const SearchRankingBox = () => {
  const { data } = useSession();

  console.log(data, "data");

  return (
    <div className={styles.search_ranking_box_wrapper}>
      <div className={styles.search_ranking_box_title}>Trends for you</div>

      <div className={styles.search_ranking_box_contents}>
        {data ? (
          <>
            <div className={styles.trending_tag}>Trending in South Korea</div>
            <div className={styles.trending_words}>박버찌</div>
            <div className={styles.trending_tag}>13.4K posts</div>
          </>
        ) : (
          <div className={styles.trending_tag}>
            <Link href="/login">
              <strong>로그인 </strong>
            </Link>
            후 조회할 수 있어요.
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchRankingBox;
