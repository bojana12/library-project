import React, { Component } from 'react';

class BookForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
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

    const { bookName, authorName, numOfPages, isRead } = this.state;
    const newBook = { bookName, authorName, numOfPages, isRead };

    this.props.addBook(newBook);

    this.setState({ 
      bookName: '', 
      authorName: '',
      numOfPages: 0, 
      isRead: false
    });
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
      </div>
    )
  }
}

export default BookForm;
