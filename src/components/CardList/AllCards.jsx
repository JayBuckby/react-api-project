import "./AllCards.scss";
import Card from "../Card/Card";

// IN HERE WE WILL BE TAKING THE IMPORT OF THE SINGULAR CARDS AND MAPPING OVER THE DATA WE HAVE ACCESS TO, TO POPULATE EACH CARD.

const AllCards = (props) => {
  const { beers } = props;

  return beers.map((beer) => {
    return <Card beer={beer} />;
  });
};

export default AllCards;
