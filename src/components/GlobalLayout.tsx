import Link from "next/link";
import { ReactNode } from "react";
import style from "./GlobalLayout.module.css";
import cx from "clsx";

const GlobalLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className={style.container}>
      <header className={cx(style.header, style.type1)}>
        <Link href={"/"}>📚 ONEBITE BOOKS</Link>
      </header>
      <main className={style.main}>{children}</main>
      <footer className={style[`footer`]}>created by KIMJAEHEE</footer>
    </div>
  );
};

export default GlobalLayout;
