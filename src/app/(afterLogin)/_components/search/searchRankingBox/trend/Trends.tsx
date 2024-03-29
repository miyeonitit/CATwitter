import Link from "next/link";

import { HashTag } from "@/interfaces/HashTag";

import styles from "./Trends.module.css";

type TrendProps = {
  trend: HashTag;
};

const Trends = ({ trend }: TrendProps) => {
  return (
    <Link href={`/search?query=${trend?.title}`}>
      <div className={styles.trending_box}>
        <div className={styles.trending_tag}>Trending in South Korea</div>
        <div className={styles.trending_words}>{trend?.title}</div>
        <div className={styles.trending_tag}>
          {trend?.count.toLocaleString()}K posts
        </div>
      </div>
    </Link>
  );
};

export default Trends;
