import React, { Component } from 'react'; 
import PropTypes from 'prop-types';

class BookList extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired
  }

  render() {
    const { books } = this.props;

    return (
      <ul>
        {books.map((book, index) => (
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
