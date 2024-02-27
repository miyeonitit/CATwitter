"use client";

import { useQuery } from "@tanstack/react-query";

import UserType from "@/interfaces/UserType";
import { getUser } from "@/app/(afterLogin)/[userName]/_lib/getUser";

import BackButton from "../../button/backButton/BackButton";

import styles from "./ProfileHeader.module.css";

type userInfomationBox = {
  userName: string;
};

const ProfileHeader = ({ userName }: userInfomationBox) => {
  const { data: user } = useQuery<UserType>({
    queryKey: ["users", userName],
    queryFn: getUser,
    staleTime: 60000,
    gcTime: 300000,
  });

  return (
    <div className={styles.profile_header_wrapper}>
      <BackButton />

      <div className={styles.user_infomation_wrapper}>
        <div className={styles.user_nickname}>
          {user ? user.name : "프로필"}
        </div>
        <div className={styles.user_posts_leangth}>1 post</div>
      </div>
    </div>
  );
};

export default ProfileHeader;
