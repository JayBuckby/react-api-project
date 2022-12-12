import "./AllCards.scss";
import Card from "../Card/Card";

// IN HERE WE WILL BE TAKING THE IMPORT OF THE SINGULAR CARDS AND MAPPING OVER THE DATA WE HAVE ACCESS TO, TO POPULATE EACH CARD.

const AllCards = (props) => {
  const { beers, searchTerm } = props;

  const getFilteredBeers = () => {
    return beers.filter((beer) => {
      return beer.name.toLowerCase().includes(searchTerm);
    });
  };

  if (searchTerm) {
    return getFilteredBeers().map((beer) => {
      return <Card className="beer-cards" beer={beer} />;
    });
  } else {
    return beers.map((beer) => {
      return <Card className="beer-cards" beer={beer} />;
    });
  }
};

export default AllCards;
