import BookShow from "./BookShow";
import { useContext } from "react";
import BooksContext from "../context/books.js";

// component rendering det of BookShow component according to received book lisr
// sending up and down (form App component to BookShow component and back ) onDelete and onEdit props

function BookList() {
  const { books } = useContext(BooksContext);

  const renderedBooks = books.map((book) => {
    return <BookShow key={book.id} book={book} />;
  });
  return <div className="book-list">{renderedBooks}</div>;
}

export default BookList;
