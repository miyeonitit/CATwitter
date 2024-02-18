"use client";

import { useQuery } from "@tanstack/react-query";

import PostType from "@/interfaces/PostType";
import { getPostRecommends } from "../_lib/getPostRecommends";

import TweetContents from "../../_components/feed/tweetContents/TweetContents";
import FetchingDataLoading from "../../_components/loading/FetchingDataLoading";

const PostRecommends = () => {
  const { status, data, error } = useQuery({
    queryKey: ["posts", "recommends"],
    queryFn: getPostRecommends,
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

export default PostRecommends;
