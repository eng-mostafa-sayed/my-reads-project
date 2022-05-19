import React, { Component, useState, useEffect } from "react";
import { getAll, search } from "../BooksAPI";
import BooksShelf from "../components/BooksShelf";
export default function Search() {
  const [books, setBooks] = useState([]);
  const [result, setResult] = useState([]);
  let allBooksArray = [];
  const getAllBooks = async () => {
    try {
      const data = await getAll();
      setBooks(data);
      console.log("data is");
      console.log(data);
      allBooksArray = data;
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAllBooks();
  }, []);
  const query = () => {
    // dummy
  };
  return (
    <div className="search-books">
      <div className="search-books-bar">
        <a className="close-search" href="/">
          Close
        </a>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search for a book"
            onChange={}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">{/* <BooksShelf /> */}</ol>
      </div>
    </div>
  );
}
