"use client";

import { useContext } from "react";

import { TabContext } from "../../_components/tab/provider/TabProvider";

import PostRecommends from "./PostRecommends";
import PostFollowings from "./PostFollowings";

const TabDecider = () => {
  const { tab } = useContext(TabContext);

  if (tab === "Following") {
    return <PostFollowings />;
  }

  return <PostRecommends />;
};

export default TabDecider;
