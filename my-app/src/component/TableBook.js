import React, { Component } from "react";
import axios from "axios";
import { foo } from "./AddBook";

export function TableBook(tableDetail) {
  return (
    <div>
      {/* <h1 id="title">React Dynamic Table</h1>
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
          {tableDetail.map((post, index) => (
            <tr key={index}>
              <td>{post.bookId}</td>
              <td>{post.bookName}</td>
              <td>{post.bookISBN}</td>
              <td>
                <button>EDIT</button>
              </td>
              <td>
                <button>DELETE</button>
              </td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </table> */}
    </div>
  );
}
