import React, { Component, useState, useEffect } from "react";
import BooksShelf from "../components/BooksShelf";
import { getAll } from "../BooksAPI";
export default function Home(allBooks) {
  const [books, setBooks] = useState([]);
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
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>

      <div className="list-books-content">
        <BooksShelf
          sectionTitle="Currently Reading"
          books={books.filter((book) => book.shelf == "currentlyReading")}
        />
        <BooksShelf
          sectionTitle="Want to Read"
          books={books.filter((book) => book.shelf == "wantToRead")}
        />
        <BooksShelf
          sectionTitle="read"
          books={books.filter((book) => book.shelf == "read")}
        />
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
