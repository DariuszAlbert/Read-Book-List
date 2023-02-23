import { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";


function App() {
    const [books, setBooks] = useState([]);

    const deleteBookByID = (id) =>{
        const updatedBooks = books.filter((book)=>{
            return book.id !== id;
        })
        setBooks(updatedBooks);
    };

    const createBook = (title) => {
        const updateTitle=[
            ...books,
            {id: Math.round(Math.random()*99999), title}
        ];

        setBooks(updateTitle);

    }

    return (
        <div className="app">
            <BookList books={books} onDelete={deleteBookByID} />
            <BookCreate createBook={createBook} />
        </div>

)};


export default App;