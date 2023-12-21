"use client";

import { useSearchParams } from "next/navigation";

import Tab from "../_components/tab/Tab";
import BackButton from "../_components/button/backButton/BackButton";
import TweetContents from "../_components/feed/tweetContents/TweetContents";
import SearchBar from "../_components/search/searchBar/SearchBar";

import styles from "./SearchDetailPage.module.css";

const SearchDetailPage = () => {
  const searchParams = useSearchParams();

  const query: string | null = searchParams.get("query");

  return (
    <div>
      <div className={styles.search_page_header}>
        <BackButton />
        <SearchBar query={query} />
      </div>

      <Tab leftTab="Top" rightTab="Latest" />

      <div>
        <TweetContents />
        <TweetContents />
        <TweetContents />
        <TweetContents />
        <TweetContents />
      </div>
    </div>
  );
};

export default SearchDetailPage;
