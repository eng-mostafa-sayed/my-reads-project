import React, { Component, useState, useEffect } from "react";
import { getAll } from "./BooksAPI";
import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import Search from "./myViews/Search";
import Home from "./myViews/Home";

function App() {
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
    <div className="app">
      <Routes>
        <Route exact path="/" element={<Home allBooks={allBooksArray} />} />
        <Route exact path="/search" element={<Search />} />
      </Routes>
    </div>
  );
}

export default App;
