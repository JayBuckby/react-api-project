import "./Card.scss";
import React from "react";

//IN HERE WE WILL BE CREATING THE TEMPLATE STRUCTURE FOR EACH CARD AND APPLYING PROPS TO POPULATE WHAT WILL GO IN EACH CARD

const Card = (props) => {
  const { name, description, image, abv, ph, firstBrewed } = props;

  return (
    <div className="beer-card">
      <div className="beer-card__image">
        <img src={image} alt="Beer" />
      </div>
      <div className="beer-card__info">
        <h2 className="beer-card__info--name">{name}</h2>
        <p className="beer-card__info--description">{description}</p>
        <p className="beer-card__info--firstbrewed">
          First Brewed in: {firstBrewed}
        </p>
        <p className="beer-card__info--abv">ABV = {abv}%</p>
        <p className="beer-card__info--ph">Acidity Level = {ph}</p>
      </div>
    </div>
  );
};

export default Card;
