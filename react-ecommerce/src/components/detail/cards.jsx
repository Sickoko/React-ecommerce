import React from "react";
import { useState } from "react";
import { Rating } from "react-simple-star-rating";

function Card(props) {
  const [stars, setStars] = useState(props.stars);
  return (

      <div className="ms-5 ">
        <div className="popular_cards border border-1 rounded m-3">
          <img src={props.img} alt="" className="p-3" />
          <div className="d-block">
            <h5 className=" popularcards text-start ps-3">{props.title} </h5>
            <p className="price text-start ps-3 d-flex justify-content-between">
              {props.price}
            </p>
            <div className=" rating d-flex justify-content-start ps-3">
              <Rating initialValue={stars} size="20" />
            </div>
          </div>
        </div>
      </div>
  );
}
export default Card;
