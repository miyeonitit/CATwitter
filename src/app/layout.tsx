import type { Metadata } from "next";
import { Inter } from "next/font/google";
import React from "react";

import { MSWcomponent } from "./_components/MSWcomponent";
import AuthSessionProvider from "./_components/AuthSessionProvider";
import SignUpModalPage from "./(beforeLogin)/@modal/(.)i/flow/signup/page";
import LoginModalPage from "./(beforeLogin)/@modal/(.)i/flow/login/page";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

type Props = {
  children: React.ReactNode;
};

export const metadata: Metadata = {
  title: "냥. 무슨 일이 일어나고 있냐옹?",
  description: "CATwiiter - practice Next.js ver.13",
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MSWcomponent />
        <AuthSessionProvider>{children}</AuthSessionProvider>
      </body>
    </html>
  );
}
