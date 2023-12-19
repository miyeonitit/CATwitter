"use client";

import { createContext, useState, ReactNode } from "react";

export const TabContext = createContext({
  tab: "foryou",
  setTab: (value: "foryou" | "following"): void => {},
});

type Props = { children: ReactNode };

const TabProvider = ({ children }: Props) => {
  const [tab, setTab] = useState("foryou");
  return (
    <TabContext.Provider value={{ tab, setTab }}>
      {children}
    </TabContext.Provider>
  );
};

export default TabProvider;
