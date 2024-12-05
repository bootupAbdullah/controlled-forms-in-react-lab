import { useState, useEffect } from 'react';

const Bookshelf = (props) => {
    const [books, setBooks] = useState([
      ]);
    
    const [newBook, setNewBook] = useState({
        title: '', 
        author: '',
      });

    const handleInputChange = (event) => {
        setNewBook({...newBook, [event.target.name]: event.target.value});
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(newBook)
        // setBooks([{...books, newBook}])
        setBooks((banana) => [...banana, newBook]) //glen helpmed me with this
        setNewBook({title: '', author: ''})
    }
useEffect(() => { //glen helped me with this
    console.log(books)
}, [books])
    return (
    <div className="bookshelfDiv">
      <div className="formDiv">
        <h3>Add a Book</h3>
        <form onSubmit={handleSubmit}>
          <label htmlFor='title'>Title: </label>
          <input
            id="title"
            name="title"
            value={newBook.title}
            onChange={handleInputChange}
          />
          <label htmlFor="author">Author: </label>
          <input
            id="author"
            name="author"
            value={newBook.author}
            onChange={handleInputChange}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
      <div className="bookCardsDiv">
        {/* Book cards will display here */}
      </div>
    </div>
)
}

export default Bookshelf