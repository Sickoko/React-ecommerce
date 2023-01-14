import React from "react";
import { Rating } from "react-simple-star-rating";
export default function Main() {
  return (
    <div className="detail-cont mt-5 d-flex">
      <div className="left-side">
        <img src="images/neoncontroller.jpg" alt="" />
      </div>
      <div className="right-side text-start align-items-start ms-5">
        <div>
          <h2>Play game</h2>
          <p className="price">$11,70</p>
          <Rating />
          <p className="d-flex">
            <strong>Availability: </strong>
            <p className="text-success">In Stock</p>
          </p>
          <p>Hurry up! only 34 product left in stock!</p>
          <hr />
          <p className="d-flex">
            Color:
            <a href="#" className="color-sec ms-3 text-decoration-none">
              .
            </a>
            <a href="#" className="dark-color ms-3 text-decoration-none">
              .
            </a>
          </p>
          <p className="d-flex">
            Size:
            <a
              href=""
              className="ms-3 border border-2 px-3 text-decoration-none text-dark"
            >
              30
            </a>
            <a
              href=""
              className="ms-3 border border-2 px-3 text-decoration-none text-dark"
            >
              56
            </a>
            <a
              href=""
              className="ms-3 border border-2 px-3 text-decoration-none text-dark"
            >
              42
            </a>
            <a
              href=""
              className="ms-3 border border-2 px-3 text-decoration-none text-dark"
            >
              48
            </a>
          </p>
          <div className="my-4">
            <a
              href="#"
              className="cart-btn text-decoration-none text-white rounded-pill px-3"
            >
              Add to cart
            </a>
            <a
              href="#"
              className="cart-btn text-decoration-none ms-3 text-white rounded-pill px-3"
            >
              Buy it now
            </a>
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
}
