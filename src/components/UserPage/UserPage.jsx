import React from 'react'
import BookContextProvider from '../Common/BookContext'
import UserList from '../Common/UserList'

const UserPage = () => {
  return (
    <BookContextProvider>
      <div>
        <p>UserPage</p>
        <UserList/>
    </div>
    </BookContextProvider>
    
  )
}

export default UserPage