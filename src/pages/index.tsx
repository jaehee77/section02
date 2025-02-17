import { ReactNode } from "react";
import SearchLayout from "@/components/SearchLayout";
import style from "./index.module.css";
// import books from "@/mock/books.json";
import BookItem from "@/components/BookItem";
import { InferGetStaticPropsType } from "next";
import fetchBooks from "@/lib/fetchBooks";
import fetchRandomBooks from "@/lib/fetchBooks";
import Head from "next/head";

export const getStaticProps = async () => {
  // const allBooks = await fetchBooks();
  // const recommendedBooks = await fetchRandomBooks();

  const [allBooks, recommendedBooks] = await Promise.all([
    fetchBooks(),
    fetchRandomBooks(),
  ]);

  return {
    props: {
      allBooks,
      recommendedBooks,
    },
  };
};

export default function Home({
  allBooks,
  recommendedBooks,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  // console.log(recommendedBooks);
  return (
    <>
      <Head>
        <title>한입북스</title>
        <meta property="og:image" name="image" content="/thumnail.png" />
        <meta property="og:title" name="title" content="한입북스" />
        <meta
          property="og:description"
          name="description"
          content="한입북스 - 여러분의 도서를 찾아보세요"
        />
      </Head>
      <div className={style.container}>
        <section>
          <h3>지금 추천하는 도서</h3>
          {recommendedBooks.map((book) => (
            <BookItem key={book.id} {...book} />
          ))}
        </section>
        <section>
          <h3>등록된 모든 도서</h3>
          {allBooks.map((book) => (
            <BookItem key={book.id} {...book} />
          ))}
        </section>
      </div>
    </>
  );
}

Home.getLayout = (page: ReactNode) => {
  return <SearchLayout>{page}</SearchLayout>;
};
