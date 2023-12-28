import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

import AxiosInstance from "@/axios/AxiosInstance";

const NextAuthHandler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "username" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const authResponse = await AxiosInstance.post(`/api/login`, {
          email: credentials.username,
          password: credentials.password,
        });

        // success
        if (authResponse) {
          const user = authResponse.data;

          return user;
        } else {
          // error
          return null;
        }
      },
    }),
  ],
});

export { NextAuthHandler as GET, NextAuthHandler as POST };
