"use client";

import { useSession } from "next-auth/react";
import { useQuery } from "@tanstack/react-query";

import UserType from "@/interfaces/UserType";
import { getSearchFollowers } from "../../search/_lib/getSearchFollowers";

import styles from "./FollowerBox.module.css";

import Follower from "./Follower/Follower";

const FollowerBox = () => {
  const { data: session } = useSession();

  const { data } = useQuery<UserType[]>({
    queryKey: ["followers"],
    queryFn: getSearchFollowers,
    staleTime: 60000,
    gcTime: 300000,
    enabled: !!session?.user,
  });

  return (
    <div className={styles.follower_box_wrapper}>
      <div className={styles.follower_box_title}>Who to follow</div>

      {data?.map((follower: UserType) => (
        <Follower
          key={follower.id}
          follower={follower}
          session={session?.user}
        />
      ))}
    </div>
  );
};

export default FollowerBox;
