import { QueryFunction } from "@tanstack/react-query";

import PostType from "@/interfaces/PostType";

export const getSearchResult: QueryFunction<
  PostType[],
  [
    _1: string,
    _2: string,
    searchParams: { query: string | null; filter?: string }
  ]
> = async ({ queryKey }: { queryKey: string[] }) => {
  const [_1, _2, searchParams] = queryKey;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/search/${queryKey}`
  ).then((response) => response.json());

  if (!res) {
    throw new Error("Failed to search data");
  }

  return res;
};
