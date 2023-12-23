import React from "react";
import { AiFillHeart } from "react-icons/ai";

const PropertyCard = ({ card }) => {
  return (
    <div className="r-card">
      <AiFillHeart size={24} />
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
