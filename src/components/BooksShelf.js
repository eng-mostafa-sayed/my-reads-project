import React, { Component } from "react";
//importing the books component
import Books from "./Books";

export default class BooksShelf extends Component {
  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">Currently Reading</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            <Books />
          </ol>
        </div>
      </div>
    );
  }
}
