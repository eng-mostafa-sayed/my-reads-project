import React, { Component } from "react";
import { getAll, search, update } from "../BooksAPI";
export default function Books(props) {
  function someMethod() {
    // Force a render without state change...
    this.forceUpdate();
  }
  ///////change the Book shelf from (currentlyReading,wantToRead,Read) to (currentlyReading,wantToRead,Read,none)
  function changetheBookShelf(shelf) {
    const newBook = { ...props.book, shelf };
    update({ id: props.book.id }, shelf)
      .then(() =>
        props.setBooks(
          (books) =>
            books.map((book) => (book.id === props.book.id ? newBook : book)),
          someMethod()
        )
      )

      .catch((error) => console.log(error));
  }

  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${props.book.imageLinks.thumbnail})`,
            }}
          ></div>
          <div className="book-shelf-changer">
            <select>
              <option value="none" disabled>
                Move to...
              </option>
              <option
                value="currentlyReading"
                onClick={() => changetheBookShelf("currentlyReading")}
              >
                Currently Reading
              </option>
              <option
                value="wantToRead"
                onClick={() => changetheBookShelf("wantToRead")}
              >
                Want to Read
              </option>
              <option value="read" onClick={() => changetheBookShelf("read")}>
                Read
              </option>
              <option value="none" onClick={() => changetheBookShelf("none")}>
                None
              </option>
            </select>
          </div>
        </div>
        <div className="book-title">{props.book.title}</div>
        <div className="book-authors">{props.book.publisher}</div>
      </div>
    </li>
  );
}
