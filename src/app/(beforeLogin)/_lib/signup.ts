"use server";

import { redirect } from "next/navigation";
import { signIn } from "next-auth/react";

import FormType from "@/interfaces/FormType";
import AxiosInstance from "@/axios/AxiosInstance";

const handlerSignUpPost = async (prevState: any, body: FormType) => {
  if (!body.email || body.email === " ") {
    return { message: "no_id" };
  }

  if (!body.password || body.password === " ") {
    return { message: "no_password" };
  }

  let isRedirect = false;

  try {
    const response = await AxiosInstance.post(`/api/users`, body);

    if (response.status === 403) {
      return { message: "user_exists" };
    }

    await signIn("credentials", {
      username: body.email,
      password: body.password,
      redirect: false,
    });

    isRedirect = true;
  } catch (error) {
    console.error(error, "error");

    return;
  }

  if (isRedirect) {
    redirect("/");
  }
};

export default handlerSignUpPost;
