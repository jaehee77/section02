import { BookData } from "@/types";

export default async function fetchBooks(q?: string): Promise<BookData[]> {
  const url = `https://onebite-books-server-amber.vercel.app/book
  ${q ? `/search?q=${q}` : ""}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const books = await response.json();

    return books;
  } catch (err) {
    console.error("Error:", err);
    return [];
  }
}
