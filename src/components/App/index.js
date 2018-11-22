import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import BookList from "../BookList/";
import BookForm from "../BookForm/";
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
    this.editBook = this.editBook.bind(this);
  }

  componentDidMount() {
    this.hydrateStateWithLocalStorage();

    window.addEventListener(
      "beforeunload",
      this.saveStateToLocalStorage.bind(this)
    );
  }

  componentWillUnmount() {
    window.removeEventListener(
      "beforeunload",
      this.saveStateToLocalStorage.bind(this)
    );

    this.saveStateToLocalStorage();
  }

  hydrateStateWithLocalStorage() {
    for (let key in this.state) {
      if (localStorage.hasOwnProperty(key)) {
        let value = localStorage.getItem(key);

        try {
          value = JSON.parse(value);
          this.setState({ [key]: value });
        } catch (e) {
          this.setState({ [key]: value });
        }
      }
    }
  }

  saveStateToLocalStorage() {
    for (let key in this.state) {
      localStorage.setItem(key, JSON.stringify(this.state[key]));
    }
  }

  addBook(book) {
    const { books } = this.state;

    books.push(book);

    this.setState({
      books
    });

    localStorage.setItem("books", JSON.stringify(books));
  }

  deleteBook(index) {
    const { books } = this.state;

    books.splice(index, 1);

    this.setState({
      books
    });
  }

  editBook(book, index) {
    const { books } = this.state;

    books[index] = book;

    this.setState({
      books
    });
  }

  render() {
    return (
      <Grid container>
        <BookForm saveBook={this.addBook} />
        <BookList
          books={this.state.books}
          deleteBook={this.deleteBook}
          editBook={this.editBook}
        />
      </Grid>
    );
  }
}

export default App;
