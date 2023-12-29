import type { Metadata } from "next";
import { Inter } from "next/font/google";
import React, { ReactElement } from "react";

import { LayoutProps } from "@/interfaces/LayoutProps";

import { MSWcomponent } from "./_components/MSWcomponent";
import AuthSessionProvider from "./_components/AuthSessionProvider";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "냥. 무슨 일이 일어나고 있냐옹?",
  description: "CATwiiter - practice Next.js ver.13",
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
  modal,
}: LayoutProps): ReactElement {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MSWcomponent />
        <AuthSessionProvider>
          {children}
          {modal && modal}
        </AuthSessionProvider>
      </body>
    </html>
  );
}
