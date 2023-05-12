// BookContext.js

import React, { createContext, useState } from 'react';

export const NewContext = createContext();

const BookContextProvider = ({ children }) => {
  const [books, setBooks] = useState([
    { id: 1, title: 'Book 1', author: 'a1' },
    { id: 2, title: 'Book 2', author: 'a2' },
    { id: 3, title: 'Book 3', author: 'a3' },
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
    <NewContext.Provider value={{ books, setBooks, users, setUsers , addBook }}>
      {children}
    </NewContext.Provider>
  );
};

export default BookContextProvider
