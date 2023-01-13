import React from "react";
import { Rating } from "react-simple-star-rating";
export default function Main() {
  return (
    <div className="detail-cont mt-5">
      <div className="left-side">
        <img src="images/neoncontroller.jpg" alt="" />
      </div>
      <div className="right-side text-start">
        <h2>Play game</h2>
        <p className="price">$11,70</p>
        <Rating />
        <p>Availability</p>
        <p>Hurry up! only 34 product left in stock!</p>
        <hr />
        <p className="d-flex">
          Color:
          <p className="color-sec ms-3">.</p>
          <p className="dark-color ms-3">.</p>
        </p>
        <p className="d-flex">
          Size:
          <a href="" className="ms-3 border border-2 px-3">30</a>
          <a href="" className="ms-3 border border-2 px-3">30</a>
          <a href="" className="ms-3 border border-2 px-3">30</a>
          <a href="" className="ms-3 border border-2 px-3">30</a>
        </p>
      </div>
    </div>
  );
}
