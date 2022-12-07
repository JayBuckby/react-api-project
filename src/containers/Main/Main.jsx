import "./Main.scss";
import { useState } from "react";
import Card from "../../components/Card/Card";

const Main = (props) => {
  const {} = props;
  return (
    <div className="beer-page">
      <header className="beer-header">
        <h1>PUNK API</h1>
        <p>For all your drinking needs!</p>
      </header>
      <Card />
    </div>
  );
};

export default Main;
