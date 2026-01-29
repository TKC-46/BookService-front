import { getAllBooks } from "@/bookAPI";
import BookList from "./components/BookList";

export default async function Home() {
  const books = await getAllBooks();

  return (
    <div>
      <BookList books={books}/>
    </div>
  );
}
