import { useState, useContext } from "react";
import BooksContext from "../context/books";

// component creating new book
// receiving createBook prop from App component
// sending title thru createBook prop to App component after form is submitted
// setting input to empty string after submit

function BookCreate() {
  const [title, setTitle] = useState("");
  const { createBook } = useContext(BooksContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    createBook(title);
    setTitle("");
  };

  return (
    <div className="book-create">
      <h3>Add a Book</h3>
      <form onSubmit={handleSubmit}>
        <label className="label">Title</label>
        <input
          className="input"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <button className="button">Create Book!</button>
      </form>
    </div>
  );
}

export default BookCreate;
