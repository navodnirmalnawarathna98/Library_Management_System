import React from 'react'



import BookList from '../Common/BookList'
import UserList from '../Common/UserList'
import BookContextProvider from '../Common/BookContext'

const Home = () => {
  return (
    <BookContextProvider>
      <div>
      <p>Home</p>
      <BookList/>
      <br/>
      <UserList/>
    </div>
    </BookContextProvider>
    
  )
}

export default Home