import "./Main.scss";
import AllCards from "../../components/CardList/AllCards";
import { useEffect, useState } from "react";

// IN HERE WE WILL BE TAKING ALL THE CARDS WE HAVE CREATED AND PLACING THEM IN A CONTAINER TO HOLD THEM

const Main = (props) => {
  const { searchTerm, filterChoice } = props;
  const [newBeers, setNewBeers] = useState();

  // delcare a isPH var here

  const getNewBeers = async () => {
    let url = "";
    if (filterChoice == "High Alcohol") {
      url = `https://api.punkapi.com/v2/beers/?abv_gt=6`;
    } else if (filterChoice == "Classic Range") {
      url = `https://api.punkapi.com/v2/beers/?brewed_before=12-2010`;
    } // else if FC == PH set isPH = true
    else {
      url = `https://api.punkapi.com/v2/beers/`;
    }
    const res = await fetch(url);
    const data = await res.json();
    setNewBeers(data);
  };
  useEffect(() => {
    getNewBeers();
  }, [filterChoice]);
  return (
    <div className="beer-page">
      <h1>PUNK API</h1>
      <p>For all your drinking needs!</p>
      {/* // pass is PH to ALLCARDS in all cards check if isPH == true, if is filter for ph */}
      {newBeers ? <AllCards searchTerm={searchTerm} beers={newBeers} /> : ""}
    </div>
  );
};

export default Main;
