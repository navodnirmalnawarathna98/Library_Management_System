// BookContext.js

import React, { createContext, useState } from 'react';

export const BookContext = createContext();

const BookContextProvider = ({ children }) => {
  const [books, setBooks] = useState([
    { id: 1, title: 'Book 1' },
    { id: 2, title: 'Book 2' },
    { id: 3, title: 'Book 3' },
  ]);

  const [users, setUsers] = useState([
    { id: 1, name: 'User 1' },
    { id: 2, name: 'User 2' },
    { id: 3, name: 'User 3' },
  ]);

  const addBook = (title, author) => {
    const newBook = { title, author };
    setBooks([...books, newBook]);
  };


  return (
    <BookContext.Provider value={{ books, setBooks, users, setUsers , addBook }}>
      {children}
    </BookContext.Provider>
  );
};

export default BookContextProvider
