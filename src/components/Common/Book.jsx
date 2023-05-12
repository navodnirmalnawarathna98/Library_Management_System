import React from "react";

const Book = ({ book }) => {
  return (
    <div>
      <table style={{border: '1px solid'}}>
        <tr>
          <th style={{border: '1px solid'}}>Tittle</th>
          <th style={{border: '1px solid'}}>Author</th>
        </tr>
        <tr>
          <td style={{border: '1px solid'}}>{book.title}</td>
          <td style={{border: '1px solid'}}>{book.author}</td>
        </tr>
      </table>
    </div>
  );
};

export default Book;
