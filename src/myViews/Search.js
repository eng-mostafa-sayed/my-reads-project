import React, { useState, useEffect } from "react";
import { getAll, search } from "../BooksAPI";
import { Link } from "react-router-dom";
import BooksShelf from "../components/BooksShelf";

export default function Search() {
  const [books, setBooks] = useState([]);
  const [result, setResult] = useState([]);
  const [errorLog, setErrorLog] = useState([]);

  useEffect(() => {
    getAllBooks();
  }, []);

  const getAllBooks = async () => {
    const data = await getAll();
    setResult(data);
  };

  const query = async (evt) => {
    const data = await search(evt == "" ? " " : evt);
    if (data.error) {
      setBooks([]);
      setErrorLog(data.error);
    } else {
      setBooks(data);
      setErrorLog(null);
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
            onChange={(evt) => query(evt.target.value)}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {errorLog}
          <BooksShelf books={books} results={result} setResults={setResult} />
        </ol>
      </div>
    </div>
  );
}
