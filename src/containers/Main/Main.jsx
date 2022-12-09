import "./Main.scss";
import AllCards from "../../components/CardList/AllCards";
import beers from "../../assets/data/beers";
import { useEffect, useState } from "react";

// IN HERE WE WILL BE TAKING ALL THE CARDS WE HAVE CREATED AND PLACING THEM IN A CONTAINER TO HOLD THEM

const Main = (props) => {
  const { searchTerm } = props;
  const [newBeers, setNewBeers] = useState();
  const getNewBeers = async () => {
    const url = `https://api.punkapi.com/v2/beers/`;
    const res = await fetch(url);
    const data = await res.json();
    setNewBeers(data);
  };
  useEffect(() => {
    getNewBeers();
  }, []);
  return (
    <div className="beer-page">
      <h1>PUNK API</h1>
      <p>For all your drinking needs!</p>
      {newBeers ? <AllCards searchTerm={searchTerm} beers={newBeers} /> : ""}
    </div>
  );
};

export default Main;
