import React from "react";
import { Rating } from "react-simple-star-rating";
export default function Main() {
  return (
    <div className="detail-cont mt-5">
      <div className="left-side">
        <img src="images/neoncontroller.jpg" alt="" />
      </div>
      <div className="right-side">
        <h2>Play game</h2>
        <p className="price">$11,70</p>
        <Rating />
        <p>Availability</p>
        <p>Hurry up! only 34 product left in stock!</p>
        <hr />
        <p>Color:</p>
      </div>
    </div>
  );
}
