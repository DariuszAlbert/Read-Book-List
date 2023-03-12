import { createContext, useState, useCallback } from "react";
import axios from "axios";

const BooksContext = createContext();
const API_URL = process.env.REACT_APP_API_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

function Provider({ children }) {
  const [books, setBooks] = useState([]);
  // -===find all books on server and set initial state===-

  const fetchBooks = useCallback(async () => {
    const response = await axios.get("http://localhost:3001/books");

    setBooks(response.data);
  }, []);

  const fetchImage = async (imgName) => {
    const imageResponse = await axios.get(API_URL, {
      headers: {
        Authorization: API_KEY,
      },
      params: {
        query: imgName,
        per_page: 1,
      },
    });

    return imageResponse.data.results[0].urls.thumb;
  };

  // -=== edit book in server stored (axios.put)file and updateing current state===-
  // receiving: id and new title form BookEdit component thru the props system

  const editBookById = async (id, newTitle) => {
    const newURL = await fetchImage(newTitle);
    const response = await axios.put(`http://localhost:3001/books/${id}`, {
      title: newTitle,
      url: newURL,
    });

    const updateBooks = books.map((book) => {
      if (book.id === id) {
        return { ...books, ...response.data };
      }
      return book;
    });
    setBooks(updateBooks);
  };

  // -=== delete book in server stored file (axios.delete) and updateing current state===-
  // receiving: id form BookShow component thru the props system

  const deleteBookByID = async (id) => {
    await axios.delete(`http://localhost:3001/books/${id}`);

    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });
    setBooks(updatedBooks);
  };

  // -=== creating book in server stored (axios.post) file and updateing current state===-
  // receiving: title form BookCreate component thru the props system

  const createBook = async (title) => {
    const url = await fetchImage(title);
    console.log(url);
    const response = await axios.post("http://localhost:3001/books", {
      title,
      url: url,
    });

    const updateTitle = [...books, response.data];

    setBooks(updateTitle);
  };

  // Value to share context object declaration

  const valueToShare = {
    books,
    deleteBookByID,
    editBookById,
    createBook,
    fetchBooks,
  };

  return (
    <BooksContext.Provider value={valueToShare}>
      {children}
    </BooksContext.Provider>
  );
}
export { Provider };
export default BooksContext;
