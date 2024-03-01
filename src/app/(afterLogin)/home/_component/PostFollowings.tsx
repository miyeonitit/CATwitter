"use client";

import { useQuery } from "@tanstack/react-query";

import PostType from "@/interfaces/PostType";
import { getFollowingPosts } from "../_lib/getFollowingPosts";

import TweetContents from "../../_components/feed/tweetContents/TweetContents";
import FetchingDataLoading from "../../_components/loading/FetchingDataLoading";

const PostFollowings = () => {
  const { status, data, error } = useQuery({
    queryKey: ["posts", "followings"],
    queryFn: getFollowingPosts,
    staleTime: 60000, // n초(1분 - ms) 뒤에 상태 변경 fresh -> stale
    gcTime: 500000,
  });

  if (status === "error") {
    return <div>Error: {error.message}</div>; // 에러가 발생했을 때
  }

  return data ? (
    data?.map((post: PostType) => (
      <TweetContents key={post.postId} post={post} />
    ))
  ) : (
    <FetchingDataLoading />
  );
};

export default PostFollowings;
