import "./App.scss";
import React, { useState } from "react";
import NavBar from "./containers/NavBar/NavBar";
import Main from "./containers/Main/Main";
// import NavBar from "./containers/NavBar/NavBar";

// IN HERE WE WILL COMBINE BOTH OUR NAVBAR AND OUR MAIN TO CREATE THE WEBPAGE AS A WHOLE

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  console.log(searchTerm);
  return (
    <div>
      <NavBar setSearchTerm={setSearchTerm} />
      <Main searchTerm={searchTerm} />
    </div>
  );
};
export default App;
