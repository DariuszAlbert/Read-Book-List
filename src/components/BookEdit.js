
import { useState } from "react";

// handling book editing
// receiving book list
// sending book.id and title to BookShow component

function BookEdit({book, onSubmit }){
    const [title, setTitle] = useState(book.title);

    const handleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(book.id, title);

    };

    return (
    <div>
        <form className="book-edit" onSubmit={handleSubmit}>
            <label>New Title</label>
            <input  className="input" value={title} onChange={handleChange}></input>
            <button className="button is-primary" >Save</button>

        </form>
    </div>
    );
};

export default BookEdit;