import { ReactNode } from "react";

const HomeLayout = ({ children }: { children: ReactNode }) => {
  return <div>home{children}</div>;
};

export default HomeLayout;
