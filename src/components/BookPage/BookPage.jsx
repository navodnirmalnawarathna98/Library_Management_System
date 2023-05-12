import React from 'react'
import BookContextProvider from '../Common/BookContext'
import BookList from '../Common/BookList'
import BookForm from '../Common/BookForm'

const BookPage = () => {
  return (
    <BookContextProvider>
       <div>
        <p>Book Page</p>

        <BookList/>

        <br/>

        <BookForm/>
    </div>
    </BookContextProvider>
   
  )
}

export default BookPage