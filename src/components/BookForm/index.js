import React, { Component } from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Grid from "@material-ui/core/Grid";

class BookForm extends Component {
  static propTypes = {
    saveBook: PropTypes.func.isRequired,
    book: PropTypes.object
  };

  constructor(props) {
    super(props);

    this.state = {
      bookName: "",
      authorName: "",
      numOfPages: "",
      isRead: false
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    if (this.props.book) {
      this.setState({
        ...this.props.book
      });
    }
  }

  handleInputChange(e, name) {
    this.setState({ [name]: e.target.value });
  }

  handleCheckboxChange() {
    this.setState(prevState => ({ isRead: !prevState.isRead }));
  }

  handleSubmit(e) {
    e.preventDefault();

    const { bookName, authorName, numOfPages, isRead } = this.state;
    const formBook = { bookName, authorName, numOfPages, isRead };

    this.props.saveBook(formBook);

    this.setState({
      bookName: "",
      authorName: "",
      numOfPages: 0,
      isRead: false
    });
  }

  render() {
    const { bookName, authorName, numOfPages, isRead } = this.state;

    return (
      <div style={{ width: "100%", textAlign: "center" }}>
        <h1>{this.props.book ? "Edit Book" : "Library"}</h1>

        <form onSubmit={this.handleSubmit} style={{ display: "flex" }}>
          <Grid container justify={"space-around"}>
            <Grid item xs={12} sm={3} md={2}>
              <TextField
                type="text"
                name="bookName"
                variant="outlined"
                label="Book Name"
                placeholder="Book Name"
                margin="normal"
                value={bookName}
                onChange={e => this.handleInputChange(e, "bookName")}
                required
              />
            </Grid>
            <Grid item xs={12} sm={3} md={2}>
              <TextField
                type="text"
                name="authorName"
                variant="outlined"
                label="Author Name"
                placeholder="Author Name"
                margin="normal"
                value={authorName}
                onChange={e => this.handleInputChange(e, "authorName")}
                required
              />
            </Grid>

            <Grid item xs={12} sm={3} md={2}>
              <TextField
                type="number"
                name="numOfPages"
                variant="outlined"
                label="Number of Pages"
                placeholder="Number of Pages"
                margin="normal"
                value={numOfPages}
                onChange={e => this.handleInputChange(e, "numOfPages")}
                required
              />
            </Grid>

            <Grid item xs={6} sm={3} md={2}>
              <FormControlLabel
                control={
                  <Checkbox
                    type="checkbox"
                    name="read"
                    color="primary"
                    checked={isRead}
                    onChange={this.handleCheckboxChange}
                  />
                }
                label="Did you read this book?"
                style={{
                  marginTop: "15px",
                  marginRight: "0",
                  paddingLeft: "25px"
                }}
              />
            </Grid>

            <Grid item xs={6} md={2}>
              <Button
                variant="outlined"
                color="primary"
                type="submit"
                style={{ height: "40px", top: "20px" }}
              >
                Save Book
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
    );
  }
}

export default BookForm;
