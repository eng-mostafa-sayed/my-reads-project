import React, { Component, useState } from "react";

import BooksShelf from "../components/BooksShelf";
export default class Home extends Component {
  render() {
    const [showSearchPage, setShowSearchpage] = useState(false);
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <BooksShelf />
        </div>
        <div className="open-search">
          <a onClick={() => setShowSearchpage(!showSearchPage)}>Add a book</a>
        </div>
      </div>
    );
  }
}
