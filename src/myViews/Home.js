import React, { Component, useState, useEffect } from "react";
import { getAll } from "../BooksAPI";
import BooksShelf from "../components/BooksShelf";
export default function Home() {
  const [books, setBooks] = useState([]);
  const getAllBooks = async () => {
    try {
      const data = await getAll();
      setBooks(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAllBooks();
  }, []);

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <BooksShelf title="Currently Reading" />
        <BooksShelf title="Want to Read" />
        <BooksShelf title="read" />
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
