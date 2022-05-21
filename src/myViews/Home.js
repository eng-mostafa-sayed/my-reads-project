import React, { Component, useState, useEffect } from "react";
import BooksShelf from "../components/BooksShelf";
import { getAll } from "../BooksAPI";
import { Link } from "react-router-dom";
export default function Home(allBooks) {
  const [books, setBooks] = useState([]);
  let allBooksArray = [];
  const getAllBooks = async () => {
    try {
      const data = await getAll();
      setBooks(data);
      //console.log("data is");
      //console.log(data);
      allBooksArray = data;
    } catch (error) {
      console.log(error);
    }
  };
  ///Didmount// on intiating the page
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
          setBooks={setBooks}
          books={books.filter((book) => book.shelf == "currentlyReading")}
        />
        <BooksShelf
          sectionTitle="Want to Read"
          setBooks={setBooks}
          books={books.filter((book) => book.shelf == "wantToRead")}
        />
        <BooksShelf
          sectionTitle="read"
          setBooks={setBooks}
          books={books.filter((book) => book.shelf == "read")}
        />
      </div>
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  );
}
