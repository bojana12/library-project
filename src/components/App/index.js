import React, { Component } from 'react';
import './App.css';
import BookList from '../BookList/';
import BookForm from '../BookForm/';
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      books: [],
    }

    this.addBook = this.addBook.bind(this);
  }

  addBook(book) {
    const { books } = this.state;

    books.push(book);

    this.setState({ 
      books,
    });
  }

  render() {
    return (
      <div>
        <BookForm addBook={this.addBook} />
        <BookList books={this.state.books} />
      </div>
    )
  }
}

export default App;
