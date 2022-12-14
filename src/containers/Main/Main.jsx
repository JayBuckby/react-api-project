import "./Main.scss";
import AllCards from "../../components/CardList/AllCards";
import { useEffect, useState } from "react";

const Main = (props) => {
  const { searchTerm, filterChoice } = props;
  const [newBeers, setNewBeers] = useState([]);

  const getNewBeers = async () => {
    let url = "";
    if (filterChoice === "High Alcohol") {
      url = `https://api.punkapi.com/v2/beers?per_page=80&abv_gt=6`;
    } else if (filterChoice === "Classic Range") {
      url = `https://api.punkapi.com/v2/beers?per_page=80&brewed_before=12-2010`;
    } else {
      url = `https://api.punkapi.com/v2/beers?per_page=80`;
    }
    const res = await fetch(url);
    const data = await res.json();

    if (filterChoice === "High Acidity") {
      const highAcidityBeers = data.filter((beer) => {
        const phBeer = beer.ph < 4;
        return phBeer;
      });
      setNewBeers(highAcidityBeers);
    } else {
      setNewBeers(data);
    }
  };
  useEffect(() => {
    getNewBeers();
  }, [filterChoice]);

  return (
    <div className="beer-cards">
      <AllCards searchTerm={searchTerm} beers={newBeers} />
    </div>
  );
};
export default Main;
