import React from "react";
import "./App.css";
import { Switch, Router } from "react-router-dom";
import { useState } from "react";
import Search from "./myViews/Search";
import Home from "./myViews/Home";

function App() {
  const [showSearchPage, setShowSearchpage] = useState(false);

  return (
    <div className="app">
      <switch>
        <Router exact to={"/"} component={Home} />
        <Router exact to={"/search"} component={Search} />
      </switch>
    </div>
  );
}

export default App;
