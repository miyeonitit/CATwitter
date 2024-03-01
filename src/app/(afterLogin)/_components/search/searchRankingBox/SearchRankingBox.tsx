import Link from "next/link";
import { useSession } from "next-auth/react";
import { useQuery } from "@tanstack/react-query";

import Trends from "./trend/Trends";

import { HashTag } from "@/interfaces/HashTag";
import { getTrendHashTag } from "@/app/(afterLogin)/search/_lib/getTrendHashTag";

import styles from "./SearchRankingBox.module.css";

const SearchRankingBox = () => {
  const { data: session } = useSession();

  const { data } = useQuery<HashTag[]>({
    queryKey: ["trends"],
    queryFn: getTrendHashTag,
    staleTime: 60000,
    gcTime: 300000,
    enabled: !!session?.user,
  });

  return (
    <div className={styles.search_ranking_box_wrapper}>
      <div className={styles.search_ranking_box_title}>Trends for you</div>

      <div className={styles.search_ranking_box_contents}>
        {session ? (
          data?.map((trend: HashTag) => (
            <Trends key={trend.tagId} trend={trend} />
          ))
        ) : (
          <div className={styles.trending_tag}>
            <Link href="/login">
              <strong>로그인 </strong>
            </Link>
            후 조회할 수 있어요.
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchRankingBox;
