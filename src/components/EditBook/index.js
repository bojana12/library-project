import React, { Component } from "react";
import PropTypes from "prop-types";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import EditIcon from "@material-ui/icons/Edit";
import BookForm from "../BookForm";
import "./EditBook.css";

class EditBook extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    editBook: PropTypes.func.isRequired,
    index: PropTypes.number.isRequired
  };

  state = {
    open: false
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleEdit = book => {
    this.props.editBook(book, this.props.index);
    this.handleClose();
  };

  render() {
    return (
      <React.Fragment>
        <Button color="primary" onClick={this.handleOpen}>
          <EditIcon />
        </Button>
        <Modal open={this.state.open} onClose={this.handleClose}>
          <Paper className="editForm">
            <BookForm book={this.props.book} saveBook={this.handleEdit} />
          </Paper>
        </Modal>
      </React.Fragment>
    );
  }
}

export default EditBook;
