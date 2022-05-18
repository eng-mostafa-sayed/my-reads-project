import React, { Component, useState } from "react";
export default class Search extends Component {
  render() {
    const [showSearchPage, setShowSearchpage] = useState(false);
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <a
            className="close-search"
            onClick={() => setShowSearchpage(!showSearchPage)}
          >
            Close
          </a>
          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title, author, or ISBN" />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid"></ol>
        </div>
      </div>
    );
  }
}
