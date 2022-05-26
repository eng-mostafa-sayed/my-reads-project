import React, { Component, useEffect, useState } from "react";
import { getAll, search, update } from "../BooksAPI";
export default function Books(props) {
  const [optionValue, setOptionValue] = useState("none");
  ///////change the Book shelf from (currentlyReading,wantToRead,Read) to (currentlyReading,wantToRead,Read,none)
  async function changetheBookShelf(shelf) {
    setOptionValue(shelf);
    const newBook = { ...props.book, shelf };
    await update({ id: props.book.id }, shelf);
    props.setBook((books) =>
      books.map((book) => (book.id === props.book.id ? newBook : book))
    );
  }
  ///Didupdate// on updating the component
  // this is to re-render the component when the shelf is changed
  useEffect(() => {
    console.log("update effected");
  }, [props.book]);
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
            <select
              id="bookShelf"
              value={optionValue}
              onChange={(event) => changetheBookShelf(event.target.value)}
            >
              <option value="none" disabled>
                Move to...
              </option>
              <option value="currentlyReading">Currently Readings</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{props.book.title}</div>
        <div className="book-authors">{props.book.publisher}</div>
      </div>
    </li>
  );
}
