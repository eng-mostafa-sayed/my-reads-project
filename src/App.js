import React, { Component, useState, useEffect } from "react";

import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import Search from "./myViews/Search";
import Home from "./myViews/Home";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/search" element={<Search />} />
      </Routes>
    </div>
  );
}

export default App;
