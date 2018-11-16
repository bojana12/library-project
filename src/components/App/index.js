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
  }

  handleInputChange(e, name) {
    this.setState({ [name]: e.target.value });
  }
 
  handleCheckboxChange() {
    this.setState((prevState) => ({isRead: !prevState.isRead}));
  }

  render() {
    return (
      <div>
        <h1>Library</h1>
        <form>
          <input type="text" name="bookName" value={this.state.bookName} onChange={(e) => this.handleInputChange(e, 'bookName')} required />
          <input type="text" name="authorName" value={this.state.authorName} onChange={(e) => this.handleInputChange(e, 'authorName')} required />
          <input type="number" name="numOfPages" value={this.state.numOfPages} onChange={(e) => this.handleInputChange(e, 'numOfPages')} required />
          <input type="checkbox" name="read" checked={this.state.isRead} onChange={this.handleCheckboxChange} />
        </form>
      </div>
    );
  }
}

export default App;
