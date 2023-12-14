"use client";

import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  modal?: ReactNode;
};

export default function afterLoginLayout({ children, modal }: Props) {
  return (
    <>
      {children}
      {modal && modal}
    </>
  );
}
