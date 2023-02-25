import { useState, useEffect } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import axios from "axios";


function App() {
    const [books, setBooks] = useState([]);

    const fetchBooks = async () => {
        const response = await axios.get("http://localhost:3001/books");

        setBooks(response.data); 
    };

    useEffect(()=>{
        fetchBooks();
    }, [])

    const editBookById = async (id, newTitle) => {
        const response = await axios.put(`http://localhost:3001/books/${id}`, {
            title: newTitle
        });

        const updateBooks = books.map((book)=>{
            if (book.id === id){
                return {...books, ...response.data};
            };
            return book;
        });
        setBooks(updateBooks);
    };

    const deleteBookByID = async (id) => {
        const response = await axios.delete(`http://localhost:3001/books/${id}`);
        console.log(response.data);
        const updatedBooks = books.filter((book)=>{
            return book.id !== id;
        });
        setBooks(updatedBooks);
    };

    const createBook = async (title) => {
        const response = await axios.post('http://localhost:3001/books', {
            title
        });

        const updateTitle=[
            ...books,
            response.data
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