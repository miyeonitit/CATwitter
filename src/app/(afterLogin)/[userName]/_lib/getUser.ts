import { QueryFunction } from "@tanstack/react-query";

import UserType from "@/interfaces/UserType";

export const getUser: QueryFunction<
  UserType,
  [_1: string, _2: string]
> = async ({ queryKey }: { queryKey: string[] }) => {
  const [_1, username] = queryKey;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/users/${username}`
  ).then((response) => response.json());

  if (!res) {
    throw new Error("Failed to user data");
  }

  return res;
};
