import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      books: [],
      bookName: '',
      authorName: '',
      numOfPages: 0,
      isRead: false
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(e, name) {
    this.setState({ [name]: e.target.value });
  }
 
  handleCheckboxChange() {
    this.setState((prevState) => ({ isRead: !prevState.isRead }));
  }

  handleSubmit(e) {
    e.preventDefault();

    const { books, bookName, authorName, numOfPages, isRead } = this.state;
    const newBook = { bookName, authorName, numOfPages, isRead };

    books.push(newBook);

    this.setState({ 
      books,
      bookName: '', 
      authorName: '',
      numOfPages: 0, 
      isRead: false
    });

    alert('You successfully added a new book!');
  }

  render() {
    return (
      <div>
        <h1>Library</h1>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="bookName" value={this.state.bookName} onChange={(e) => this.handleInputChange(e, 'bookName')} required />
          <input type="text" name="authorName" value={this.state.authorName} onChange={(e) => this.handleInputChange(e, 'authorName')} required />
          <input type="number" name="numOfPages" value={this.state.numOfPages} onChange={(e) => this.handleInputChange(e, 'numOfPages')} required />
          <input type="checkbox" name="read" checked={this.state.isRead} onChange={this.handleCheckboxChange} />
          <button type="submit">Save Book</button>
        </form>

        <ul>
          {this.state.books.map(book => (
            <li>
              Book Name: {book.bookName} <br/>
              Author Name: {book.authorName} <br/>
              Number of pages: {book.numOfPages} <br/>
              Is read?: {book.isRead ? 'Yes' : 'No'} <br/>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
