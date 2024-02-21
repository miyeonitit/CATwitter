"use client";

import { createContext, useState, ReactNode, useContext } from "react";

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

export const useTab = (): {
  tab: string;
  setTab: (value: "foryou" | "following") => void;
} => {
  const context = useContext(TabContext);

  if (!TabContext) {
    throw new Error("tab context error");
  }

  return context;
};
