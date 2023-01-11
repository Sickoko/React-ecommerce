import React from "react";
import { useState } from "react";
import { Rating } from "react-simple-star-rating";

function Cards(props) {
  const [stars, setStars] = useState(props.stars);
  return (
    <div className="outer d-block">
      <div className="cards d-flex border border-3 rounded-3 w-auto flex-wrap me-5">
        <div className="smallCards">
          <img src={props.productImg} alt="BIGspeaker" />
        </div>
        <div className="details ">
          <h4 className="titles">{props.productName}</h4>
          <p className="price">{props.productPrice}</p>
          <Rating initialValue={stars} size="20" />
        </div>
      </div>
    </div>
  );
}
export default Cards;
