import "./Card.scss";

const Card = (props) => {
  const { name, description, image, abv } = props;

  return (
    <div className="beer-card">
      <img className="beer-card__image">
        {image}This is the picture of the beer
      </img>
      <h2 className="beer-card__name">{name}This is what the beer is called</h2>
      <p className="beer-card__info">
        {description}This is a description about the beer
      </p>
      <p className="beer-card__abv">{abv}This is the ABV of the beer</p>
    </div>
  );
};

export default Card;
