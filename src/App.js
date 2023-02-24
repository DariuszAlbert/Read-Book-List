import { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";


function App() {
    const [books, setBooks] = useState([]);

    const editBookById = (id, newTitle) => {
        const updateBooks = books.map((book)=>{
            if (book.id === id){
                return {...book, title: newTitle}
            };
            return book;
        });
        setBooks(updateBooks);
    };

    const deleteBookByID = (id) => {
        const updatedBooks = books.filter((book)=>{
            return book.id !== id;
        });
        setBooks(updatedBooks);
    };

    const createBook = (title) => {
        const updateTitle=[
            ...books,
            {id: Math.round(Math.random()*99999), title}
        ];

        setBooks(updateTitle);
    };

    return (
        <div className="app">
            <h1>Reading List</h1>
            <BookList books={books} onDelete={deleteBookByID} onEdit={editBookById} />
            <BookCreate createBook={createBook} />
        </div>

)};


export default App;