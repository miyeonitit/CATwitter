export async function getFollowingPosts() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/followingPosts`
  ).then((response) => response.json());

  if (!res) {
    throw new Error("Failed to fetch data");
  }

  return res;
}
