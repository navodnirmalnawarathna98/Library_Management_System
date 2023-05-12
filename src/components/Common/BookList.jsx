// BookList.js

import React, { useContext } from 'react';
import { BookContext } from './BookContext';
import Book from './Book';

const BookList = () => {
  const { books } = useContext(BookContext);

  return (
    <div>
      
      {books.map((book, index)=> (
          <Book key={index} book={book}/>
      ))}
    </div>
  );
};

export default BookList;
