import "./App.scss";
import React, { useState } from "react";
import NavBar from "./containers/NavBar/NavBar";
import Main from "./containers/Main/Main";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterChoice, setFilterChoice] = useState("");

  return (
    <div className="page-contents">
      <NavBar
        className="nav-bar"
        setSearchTerm={setSearchTerm}
        setFilterChoice={setFilterChoice}
        filterChoice={filterChoice}
      />
      <Main
        className="main-beers"
        searchTerm={searchTerm}
        filterChoice={filterChoice}
      />
    </div>
  );
};
export default App;
