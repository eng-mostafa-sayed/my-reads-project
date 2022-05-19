import React, { Component } from "react";

//importing the books component
import Books from "./Books";

export default function BooksShelf(props) {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{props.title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {props.books.map((book) => (
            <Books key={book.id} book={book}></Books>
          ))}
        </ol>
      </div>
    </div>
  );
}
