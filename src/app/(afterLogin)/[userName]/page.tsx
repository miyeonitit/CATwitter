import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";

import { getUser } from "./_lib/getUser";
import { getUserPosts } from "./_lib/getUserPosts";

import ProfileHeader from "../_components/profile/header/ProfileHeader";
import UserInfomationBox from "../_components/profile/userInfomation/UserInfomationBox";
import FollowerBox from "../_components/followers/FollowerBox";
import TweetPostsBox from "../_components/feed/tweetPostsBox/tweetPostsBox";

import styles from "./UserNamePage.module.css";

type profileProps = {
  params: { userName: string };
};

const UserNamePage = async ({ params }: profileProps) => {
  const { userName } = params;

  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["users", userName],
    queryFn: getUser,
  });
  await queryClient.prefetchQuery({
    queryKey: ["posts", "users", userName],
    queryFn: getUserPosts,
  });

  const dehydrateState = dehydrate(queryClient);

  return (
    <main className={styles.profile_image_wrapper}>
      <HydrationBoundary state={dehydrateState}>
        <ProfileHeader userName={userName} />
        <UserInfomationBox userName={userName} />
        <FollowerBox userName={userName} />
        <TweetPostsBox userName={userName} />
      </HydrationBoundary>
    </main>
  );
};

export default UserNamePage;
