import React from "react";
import type { BookData } from "@/types";
import Link from "next/link";
import style from "./BookItem.module.css";
import Image from "next/image";

export default function BookItem({
  id,
  title,
  subTitle,
  author,
  // description,
  publisher,
  coverImgUrl,
}: BookData) {
  return (
    <Link href={`/book/${id}`} className={style.container}>
      <img src={coverImgUrl} alt="" />
      <div>
        <div className={style.title}>{title}</div>
        <div className={style.subTitle}>{subTitle}</div>
        <br />
        <div className={style.author}>
          {author} | {publisher}
        </div>
      </div>
    </Link>
  );
}
