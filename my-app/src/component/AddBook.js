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

  componentDidMount() {
    this.getData();
  }
  getData() {
    console.log("mathu");
    axios.get("http://localhost:8080/library/findAll").then(response => {
      console.log(response.data);
      TableBook(response.data);
      this.setState({ tableDetail: response.data });
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
        <button onClick={this.onSubmit}>ADD</button>

        {TableBook(this.state.tableDetail)}
      </div>
    );
  }
}

export default AddBook;
