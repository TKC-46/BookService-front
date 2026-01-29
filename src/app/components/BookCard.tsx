import { Book } from "@/types"
import Link from "next/link"

type BookProps = {
    book: Book}

const BookCard = ({ book }: BookProps) => {
  return (
    <div>
        <div>
            <Link href={`/books/${book.id}`}>
                {book.title}
            </Link>
        </div>
        <div>
            <Link href={`/books/${book.id}`}>
                {book.description}
            </Link>
        </div>
        
    </div>
  )
}

export default BookCard