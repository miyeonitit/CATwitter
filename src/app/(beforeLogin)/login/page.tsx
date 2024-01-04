"use client";

import { useRouter, redirect } from "next/navigation";

import LoginMainPage from "../_components/main/LoginMainPage";

const LoginPage = () => {
  const router = useRouter();

  router.replace("i/flow/login");

  return <LoginMainPage />;
};

export default LoginPage;
