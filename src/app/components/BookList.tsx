import { Book } from "@/types";
import BookCard from "./BookCard";

type BooksProps = {
    books: Book[]
};

const BookList = ({ books }: BooksProps) => {

    return (
    <div>
        {
            books.map(book => (
                <BookCard book={book} key={book.id}/>
            ))
        }
    </div>
    )
}

export default BookList