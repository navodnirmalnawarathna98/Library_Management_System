// UserList.js

import React, { useContext } from 'react';
import { BookContext } from './BookContext';

const UserList = () => {
  const { users } = useContext(BookContext);

  return (
    <div>
      <h2>Users</h2>
      {users.map(user => (
        <div key={user.id}>
          <span>{user.name}</span>
        </div>
      ))}
    </div>
  );
};

export default UserList;
