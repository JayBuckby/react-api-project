import "./Main.scss";
import AllCards from "../../components/CardList/AllCards";

// IN HERE WE WILL BE TAKING ALL THE CARDS WE HAVE CREATED AND PLACING THEM IN A CONTAINER TO HOLD THEM

const Main = (props) => {
  const { beers } = props;
  return (
    <div className="beer-page">
      <h1>PUNK API</h1>
      <p>For all your drinking needs!</p>
      <AllCards beers={beers} />
    </div>
  );
};

export default Main;
