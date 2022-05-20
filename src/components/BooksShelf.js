import React, { Component } from "react";
import { getAll, search, update } from "../BooksAPI";
//importing the books component
import Books from "./Books";

export default function BooksShelf(props) {
  async function changetheBookShelf(shelf) {
    try {
      const newBook = { ...props.book, shelf };
      await update({ id: props.book.id }, shelf);
      props.setBooks((books) =>
        books.map((book) => (book.id === props.book.id ? newBook : book))
      );
      this.setState(this.state);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{props.sectionTitle}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {props.books.map((book) => (
            <Books
              setBook={props.setBooks}
              key={book.id}
              book={book}
              results={props.result}
              setResults={props.setResult}
            ></Books>
          ))}
        </ol>
      </div>
    </div>
  );
}
