import React, { Component } from "react";
import axios from "axios";
import { TableBook } from "./TableBook";

class AddBook extends Component {
  state = {
    bookId: "",
    bookName: "",
    bookISBN: "",

    table: "",
    tableDetail: []
  };
  updateState = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  onSubmit = () => {
    const book = {
      bookId: this.state.bookId,
      bookName: this.state.bookName,
      bookISBN: this.state.bookISBN
    };
    console.log(book);

    axios
      .post("http://localhost:8080/library/saveBook", book)
      .then(response => {
        console.log(response.data);
        this.getData();
      });

    // TableBook(this.state.tableDetail);
  };
  onEditSubmit = () => {
    const book = {
      bookId: this.state.bookId,
      bookName: this.state.bookName,
      bookISBN: this.state.bookISBN
    };

    axios
      .put("http://localhost:8080/library/updateBook/" + book.bookId, book)
      .then(response => {
        console.log(response.data);
        this.getData();
      });
  };

  componentDidMount() {
    this.getData();
  }
  getData() {
    console.log("mathu");
    axios.get("http://localhost:8080/library/findAll").then(response => {
      console.log(response.data);
      // TableBook(response.data);
      this.setState({ tableDetail: response.data });
    });
  }
  editData(book) {
    this.setState({
      bookId: book.bookId,
      bookName: book.bookName,
      bookISBN: book.bookISBN
    });
  }
  deleteData(id) {
    axios
      .delete("http://localhost:8080/library/deleteBook/" + id)
      .then(response => {
        console.log(response.data);
        this.getData();
      });
  }

  render() {
    return (
      <div>
        <form>
          <label>Book ID</label>
          <input
            name="bookId"
            type="number"
            value={this.state.bookId}
            onChange={this.updateState}
            disabled
          />
          <br />
          <label>Book Name</label>
          <input
            type="text"
            name="bookName"
            value={this.state.bookName}
            onChange={this.updateState}
          />
          <br />
          <label>Book ISBN</label>
          <input
            type="number"
            name="bookISBN"
            value={this.state.bookISBN}
            onChange={this.updateState}
          />
        </form>
        <button onClick={this.onSubmit}>SAVE</button>
        <button onClick={this.onEditSubmit}>EDIT</button>

        {/* table format */}
        <h1 id="title">React Dynamic Table</h1>
        <table id="students">
          <thead>
            <tr>
              <td>id</td>
              <td>Name</td>
              <td>ISBN</td>
              <td>EDIT</td>
              <td>DELETE</td>
            </tr>
          </thead>
          <tbody>
            {this.state.tableDetail.map((post, index) => (
              <tr key={index}>
                <td>{post.bookId}</td>
                <td>{post.bookName}</td>
                <td>{post.bookISBN}</td>
                <td>
                  <button onClick={() => this.editData(post)}>EDIT</button>
                </td>
                <td>
                  <button onClick={() => this.deleteData(post.bookId)}>
                    DELETE
                  </button>
                </td>
                <td></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default AddBook;
