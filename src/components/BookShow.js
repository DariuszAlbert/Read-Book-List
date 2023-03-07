import { useState, useContext } from "react";
import BookEdit from "./BookEdit";
import BooksContext from "../context/books";

// component responsible for rendering single book component
// receiving: book list, onDelete and onEdit props

function BookShow({ book }) {
  const [showEdit, setShowEdit] = useState(false);
  const { deleteBookByID } = useContext(BooksContext);

  // sending book id thur prop system to App via onDelete prop

  const handleDeleteClick = () => {
    deleteBookByID(book.id);
  };

  // toggling showEdit state

  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };

  // sending book id and newTitle received from BookEdit thru prop system to App via onEdit prop
  // setting showEdit to false
  const handleSubmit = () => {
    setShowEdit(false);
  };

  let content = <h3>{book.title}</h3>;

  // rendering BookEdit component when showEdit is set to true

  if (showEdit) {
    content = <BookEdit book={book} onSubmit={handleSubmit} />;
  }

  return (
    <div>
      <div className="book-show">
        <img
          src={`https://picsum.photos/seed/${book.title}/300/200`}
          alt="obrazek"
        />
        <div>{content}</div>
        <div className="actions">
          <button className="edit" onClick={handleEditClick}>
            Edit
          </button>
          <button className="delete" onClick={handleDeleteClick}></button>
        </div>
      </div>
    </div>
  );
}

export default BookShow;
