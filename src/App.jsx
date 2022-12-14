import "./App.scss";
import React, { useState } from "react";
import NavBar from "./containers/NavBar/NavBar";
import Main from "./containers/Main/Main";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterChoice, setFilterChoice] = useState("");

  return (
    <div className="page-contents">
      <h1 data-testid="title">Punk API</h1>
      <h2>For all your drinking needs!</h2>
      <NavBar
        setSearchTerm={setSearchTerm}
        setFilterChoice={setFilterChoice}
        filterChoice={filterChoice}
      />
      <Main
        className="beer-cards"
        searchTerm={searchTerm}
        filterChoice={filterChoice}
      />
    </div>
  );
};
export default App;
