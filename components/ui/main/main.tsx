import { ReactNode } from "react";

type MainProps = {
  children: ReactNode;
};
const Main = ({ children }: MainProps) => {
  return <main>{children}</main>;
};

export default Main;
