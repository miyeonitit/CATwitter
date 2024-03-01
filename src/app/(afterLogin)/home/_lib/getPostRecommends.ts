export async function getPostRecommends() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/postRecommends`
  ).then((response) => response.json());

  if (!res) {
    throw new Error("Failed to fetch data");
  }

  return res;
}
