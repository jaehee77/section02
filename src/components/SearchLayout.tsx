import { useRouter } from "next/router";
import React, { ReactNode, useEffect, useState } from "react";
import style from "./SearchLayout.module.css";

export default function SearchLayout({ children }: { children: ReactNode }) {
  const [search, setSearch] = useState("");

  const router = useRouter();
  const { q } = router.query as { q: string };

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    setSearch(q ?? "");
  }, [q]);

  const onSubmit = () => {
    if (!search || q === search) return;
    router.push(`/search?q=${search}`);
  };

  useEffect(() => {
    router.prefetch(`/search?q=${search}`);
  }, []);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") onSubmit();
  };

  return (
    <div>
      <div className={style.searchbar_container}>
        <input
          type="text"
          value={search}
          onChange={onChangeSearch}
          onKeyDown={onKeyDown}
          placeholder="검색어를 입력하세요."
        />
        <button onClick={onSubmit}>검색</button>
      </div>
      {children}
    </div>
  );
}
