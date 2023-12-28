"use server";

import { redirect } from "next/navigation";

import FormType from "@/interfaces/FormType";
import AxiosInstance from "@/axios/AxiosInstance";

const handlerLoginPost = async (prevState: any, body: FormType) => {
  if (!body.email || body.email === " ") {
    return { message: "no_id" };
  }

  if (!body.password || body.password === " ") {
    return { message: "no_password" };
  }

  let isRedirect = false;

  try {
    const response = await AxiosInstance.post(`api/login`, body);

    isRedirect = true;
  } catch (error) {
    console.error(error);
  }

  if (isRedirect) {
    redirect("/home");
  }
};

export default handlerLoginPost;
