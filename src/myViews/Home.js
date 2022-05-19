import React, { Component, useState, useEffect } from "react";
import BooksShelf from "../components/BooksShelf";
export default function Home(allBooks) {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>

      <div className="list-books-content">
        <BooksShelf title="Currently Reading" allBooks={allBooks} />
        <BooksShelf title="Want to Read" allBooks={allBooks} />
        <BooksShelf title="read" allBooks={allBooks} />
      </div>
      <div className="open-search">
        <a //onClick={() => setShowSearchpage(!showSearchPage)}
        >
          Add a book
        </a>
      </div>
    </div>
  );
}
