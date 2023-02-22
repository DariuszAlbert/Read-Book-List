import { useState } from "react";



function BookCreate( {createBook} ){
    const [title, setTitle] = useState('');

    const handleChange = (event) => {
        setTitle(event.target.value);
        
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        createBook(title);
        setTitle('')
        
    }

    return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>Title</label>
            <input value={title} onChange={handleChange}/>
            <button>Create Book!</button>
        </form>
    </div>
    );
};

export default BookCreate;