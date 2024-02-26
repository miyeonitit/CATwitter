import { QueryFunction } from "@tanstack/react-query";

import UserType from "@/interfaces/UserType";

export const getSearchFollowers: QueryFunction<UserType[]> = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/followRecommends`
  ).then((response) => response.json());

  if (!res) {
    throw new Error("Failed to search data");
  }

  return res;
};
