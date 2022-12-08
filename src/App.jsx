import "./App.scss";
import React from "react";
import NavBar from "./containers/NavBar/NavBar";
import beers from "./assets/data/beers";
import Main from "./containers/Main/Main";
// import NavBar from "./containers/NavBar/NavBar";

// IN HERE WE WILL COMBINE BOTH OUR NAVBAR AND OUR MAIN TO CREATE THE WEBPAGE AS A WHOLE

const App = () => {
  return (
    <div>
      {/* <NavBar /> */}
      <Main beers={beers} />
    </div>
  );
};
export default App;
