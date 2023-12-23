import React from "react";

const PropertyCard = ({ card }) => {
  return (
    <div className="r-card">
      <img src={card.image} alt="" />
      <span className="r-price">
        <span>$</span>
        <span>{card.price}</span>
      </span>
      <span className="r-name">{card.name}</span>
      <span className="r-detail">{card.detail}</span>
    </div>
  );
};

export default PropertyCard;
