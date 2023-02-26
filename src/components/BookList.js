import BookShow from "./BookShow";

// component rendering det of BookShow component according to received book lisr
// sending up and down (form App component to BookShow component and back ) onDelete and onEdit props

function BookList({books, onDelete, onEdit}){
    const renderedBooks = books.map((book)=>{

        return <BookShow key={book.id} book={book} onDelete={onDelete} onEdit={onEdit}/>
    });
    return <div className="book-list">{renderedBooks}</div>
}

export default BookList;