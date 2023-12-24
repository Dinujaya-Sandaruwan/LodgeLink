import React from "react";
import { truncate } from "lodash";
import { AiFillHeart } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const PropertyCard = ({ card }) => {
  const navigate = useNavigate();
  return (
    <div
      className="r-card"
      onClick={() => navigate(`../properties/${card.id}`)}
    >
      <AiFillHeart size={24} />
      <img src={card.image} alt="" />
      <span className="r-price">
        <span>$</span>
        <span>{card.price}</span>
      </span>
      <span className="r-name">{truncate(card.title, { length: 15 })}</span>
      <span className="r-detail">
        {truncate(card.description, { length: 80 })}
      </span>
    </div>
  );
};

export default PropertyCard;
