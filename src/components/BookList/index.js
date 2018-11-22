import React, { Component } from "react";
import PropTypes from "prop-types";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import EditBook from "../EditBook/";
import DeleteIcon from "@material-ui/icons/Delete";

class BookList extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    deleteBook: PropTypes.func.isRequired,
    editBook: PropTypes.func.isRequired
  };

  render() {
    const { books, deleteBook, editBook } = this.props;

    return (
      <Grid item xs={12} style={{ marginTop: "30px" }}>
        <Paper style={{ overflowX: "auto" }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell style={{ padding: "0 25px" }}>Book Name</TableCell>
                <TableCell style={{ padding: "0 25px" }}>Author Name</TableCell>
                <TableCell numeric style={{ padding: "0 25px" }}>
                  Number of Pages
                </TableCell>
                <TableCell style={{ padding: "0 25px" }}>
                  Book is read?
                </TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {books.map((book, index) => {
                return (
                  <TableRow key={index}>
                    <TableCell>{book.bookName}</TableCell>
                    <TableCell>{book.authorName}</TableCell>
                    <TableCell numeric>{book.numOfPages}</TableCell>
                    <TableCell>{book.isRead ? "Yes" : "No"}</TableCell>
                    <TableCell>
                      <EditBook book={book} editBook={editBook} index={index} />
                      <Button color="secondary">
                        <DeleteIcon onClick={() => deleteBook(index)} />
                      </Button>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Paper>
      </Grid>
    );
  }
}

export default BookList;
