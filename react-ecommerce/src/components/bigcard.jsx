import React from "react";
import { useState } from "react";
import { Rating } from "react-simple-star-rating";
import Cards from "../data/smallcards";
import cardsData from "../data/smallcards";

function BigCards(props) {
  const [stars, setStars] = useState(props.stars);
  return (
    <div className="outer">
      <div className="cards d-flex justify-content-between border border-3 rounded-3 w-auto flex-wrap me-5">
        <div className="smallCards">
          <img src={props.camImg} alt="BIGspeaker" />
        </div>
        <div className="details ">
          <h4 className="titles">{props.camName}</h4>
          <p className="price">{props.camPrice}</p>
          <Rating initialValue={stars} size="20" />
        </div>
      </div>
    </div>
  );
}
export default BigCards;
