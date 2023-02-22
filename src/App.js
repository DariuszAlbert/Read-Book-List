import { useState } from "react";
import BookCreate from "./components/BookCreate";


function App() {
    const [books, setBooks]=useState([]);

    function createBook(title){
        
        console.log(`Book tilte ${title}`);

    };

    return (
        <div>
            <BookCreate createBook={createBook} />
        </div>

)};


export default App;