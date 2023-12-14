import { ReactNode } from "react";

type Props = { children: ReactNode; modal: ReactNode };

const layout = ({ children }: Props) => {
  return <div>{children}</div>;
};

export default layout;