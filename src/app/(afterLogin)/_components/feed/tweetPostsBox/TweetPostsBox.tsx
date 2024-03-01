"use client";

import { useQuery } from "@tanstack/react-query";

import PostType from "@/interfaces/PostType";
import { getUserPosts } from "@/app/(afterLogin)/[userName]/_lib/getUserPosts";

import TweetContents from "../tweetContents/TweetContents";

type userInfomationBox = {
  userName: string;
};

const TweetPostsBox = ({ userName }: userInfomationBox) => {
  const { data } = useQuery<PostType[]>({
    queryKey: ["posts", "users", userName],
    queryFn: getUserPosts,
    staleTime: 60000,
    gcTime: 300000,
  });

  console.log(data, "data");

  return data?.map((post: PostType) => (
    <TweetContents key={post.postId} post={post} />
  ));
};

export default TweetPostsBox;
