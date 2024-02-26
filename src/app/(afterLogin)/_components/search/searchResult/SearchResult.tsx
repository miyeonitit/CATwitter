"use client";

import { useQuery } from "@tanstack/react-query";

import PostType from "@/interfaces/PostType";
import { getSearchResult } from "@/app/(afterLogin)/search/_lib/getSearchResult";

import TweetContents from "../../feed/tweetContents/TweetContents";
import FetchingDataLoading from "../../loading/FetchingDataLoading";

type Props = {
  query: string | null;
  filter?: string;
};

const SearchResult = ({ query }: Props) => {
  const { status, data, error } = useQuery<
    PostType[],
    Object,
    PostType[],
    [_1: string, _2: string, Props["query"]]
  >({
    queryKey: ["posts", "search", query],
    queryFn: getSearchResult,
    staleTime: 60000, // n초(1분 - ms) 뒤에 상태 변경 fresh -> stale
    gcTime: 500000,
  });

  return data ? (
    data?.map((post: PostType) => (
      <TweetContents key={post.postId} post={post} />
    ))
  ) : (
    <FetchingDataLoading />
  );
};

export default SearchResult;
