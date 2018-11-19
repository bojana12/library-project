import React, { Component } from "react";
import BookList from "../BookList/";
import BookForm from "../BookForm/";
import "./App.css";
import Grid from "@material-ui/core/Grid";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      books: [
        {
          bookName: "The Whisperer",
          authorName: "Donato Carrisi",
          numOfPages: 547,
          isRead: true
        }
      ]
    };

    this.addBook = this.addBook.bind(this);
    this.deleteBook = this.deleteBook.bind(this);
  }

  addBook(book) {
    const { books } = this.state;

    books.push(book);

    this.setState({
      books
    });
  }

  deleteBook(index) {
    const { books } = this.state;

    books.splice(index, 1);

    this.setState({
      books
    });
  }

  render() {
    return (
      <Grid container>
        <BookForm addBook={this.addBook} />
        <BookList books={this.state.books} deleteBook={this.deleteBook} />
      </Grid>
    );
  }
}

export default App;
