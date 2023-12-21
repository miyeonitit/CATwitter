"use client";

import { useSearchParams } from "next/navigation";

import SearchBar from "../_components/search/searchBar/SearchBar";
import SearchRankingBox from "../_components/search/searchRankingBox/SearchRankingBox";

import styles from "./ExplorePage.module.css";

const ExplorePage = () => {
  const searchParams = useSearchParams();

  const query: string | null = searchParams.get("query");

  return (
    <div className={styles.explore_page_wrapper}>
      <div className={styles.search_bar_box}>
        <SearchBar query={query} />
      </div>

      <SearchRankingBox />
    </div>
  );
};

export default ExplorePage;
