import { QueryFunction } from "@tanstack/react-query";

import PostType from "@/interfaces/PostType";

export const getUserPosts: QueryFunction<
  PostType[],
  [_1: string, _2: string, string]
> = async ({ queryKey }: { queryKey: string[] }) => {
  const [_1, _2, username] = queryKey;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/users/${username}/posts`
  ).then((response) => response.json());

  if (!res) {
    throw new Error("Failed to user data");
  }

  return res;
};
