"use client";

import { useRouter } from "next/navigation";

import LoginMainPage from "../_components/main/LoginMainPage";

const page = () => {
  const router = useRouter();

  router.replace("i/flow/login");

  return <LoginMainPage />;
};

export default page;
