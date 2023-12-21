"use client";

import { useSearchParams } from "next/navigation";
import { useSelectedLayoutSegment } from "next/navigation";

import SearchBar from "../search/searchBar/SearchBar";
import SearchFilter from "../search/searchFilter/SearchFilter";
import SearchRankingBox from "../search/searchRankingBox/SearchRankingBox";
import PromotionBox from "../payment/promotionBox/PromotionBox";
import FollowerBox from "../followers/FollowerBox";

import styles from "./RightSideNav.module.css";

const RightSideNav = () => {
  const segment: string | null = useSelectedLayoutSegment();

  const searchParams = useSearchParams();

  const query: string | null = searchParams.get("query");

  return (
    <div className={styles.left_menu_nav_wrapper}>
      {segment === "explore" || segment === "search" ? (
        <SearchFilter />
      ) : (
        <>
          <SearchBar query={query} />

          <PromotionBox />
          <SearchRankingBox />
        </>
      )}

      <FollowerBox />
    </div>
  );
};

export default RightSideNav;
