import { QueryFunction } from "@tanstack/react-query";

import { HashTag } from "@/interfaces/HashTag";

export const getTrendHashTag: QueryFunction<HashTag[]> = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/trends`
  ).then((response) => response.json());

  if (!res) {
    throw new Error("Failed to search hash tag data");
  }

  return res;
};
