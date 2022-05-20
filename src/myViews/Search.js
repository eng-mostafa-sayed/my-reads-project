import React, { Component, useState, useEffect } from "react";
import { getAll, search } from "../BooksAPI";
import { Link } from "react-router-dom";
import BooksShelf from "../components/BooksShelf";
export default function Search() {
  const [books, setBooks] = useState([]);
  const [result, setResult] = useState([]);
  let allBooksArray = [];
  const getAllBooks = async () => {
    try {
      const data = await getAll();
      setResult(data);
      //for testing purposes
      // console.log("data is");
      // console.log(data);
      allBooksArray = data;
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAllBooks();
  }, []);
  const query = async (evt) => {
    try {
      const data = await search(evt);
      setBooks(data);
      //for testing purposes
      console.log("search is");
      console.log(data);
      allBooksArray = data;
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link className="close-search" to="/">
          Close
        </Link>

        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search for a book"
            onChange={(evt) => query(evt.target.value.trim())}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          <BooksShelf books={books} results={result} setResults={setResult} />
        </ol>
      </div>
    </div>
  );
}
