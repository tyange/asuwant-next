import { ReactNode } from "react";
import styles from "./main.module.css";

type MainProps = {
  children: ReactNode;
};
const Main = ({ children }: MainProps) => {
  return <main className={styles.main}>{children}</main>;
};

export default Main;
