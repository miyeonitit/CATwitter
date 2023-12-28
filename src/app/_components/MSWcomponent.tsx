"use client";

import { useEffect } from "react";

export const MSWcomponent = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (process.env.NEXT_PUBLIC_API_MOCKING) {
        require("@/mocks/browser");
      }
    }
  }, []);

  return null;
};
