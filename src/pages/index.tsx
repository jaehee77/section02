import { ReactNode } from "react";
import SearchLayout from "@/components/SearchLayout";
import style from "./index.module.css";
// import books from "@/mock/books.json";
import BookItem from "@/components/BookItem";
import { InferGetStaticPropsType } from "next";
import fetchBooks from "@/lib/fetchBooks";
import fetchRandomBooks from "@/lib/fetchBooks";

export const getServerSideProps = async () => {
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
}: InferGetStaticPropsType<typeof getServerSideProps>) {
  console.log(recommendedBooks);
  return (
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
  );
}

Home.getLayout = (page: ReactNode) => {
  return <SearchLayout>{page}</SearchLayout>;
};
