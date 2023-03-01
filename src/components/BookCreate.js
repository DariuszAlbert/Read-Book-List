import { useState } from "react";

// component creating new book
// receiving createBook prop from App component
// sending title thru createBook prop to App component after form is submitted
// setting input to empty string after submit

function BookCreate({ createBook }) {
  const [title, setTitle] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    createBook(title);
    setTitle("");
  };

  return (
    <div className="book-create">
      <h3>Add a Book</h3>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
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
