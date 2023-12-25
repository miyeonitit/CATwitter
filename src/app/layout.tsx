import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ReactNode } from "react";

import "./globals.css";

import { MSWcomponent } from "./_components/MSWcomponent";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "냥. 무슨 일이 일어나고 있냐옹?",
  description: "CATwiiter - practice Next.js ver.13",
  icons: { icon: "/favicon.ico" },
};

type Props = {
  children: ReactNode;
  modal?: ReactNode;
};

export default function RootLayout({ children, modal }: Props) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MSWcomponent />
        {children}
        {modal}
      </body>
    </html>
  );
}
