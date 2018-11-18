import React, { Component } from 'react';

class BookList extends Component {
  render() {
    return (
      <ul>
        {this.props.books.map((book, index) => (
          <li key={index}>
            Book Name: {book.bookName} <br/>
            Author Name: {book.authorName} <br/>
            Number of pages: {book.numOfPages} <br/>
            Is read?: {book.isRead ? 'Yes' : 'No'} <br/>
          </li>
        ))}
      </ul> 
    )
  }
}

export default BookList;
