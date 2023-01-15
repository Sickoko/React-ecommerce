import React from "react";
import { Rating } from "react-simple-star-rating";
import cardData from "../../data/detail/cards";
import Card from "./cards";
import Top from "./producttop";
import Footer from "../home/footer";
import footerData from "../../data/home/footer";
export default function Main(props) {
  const card = cardData.map((data) => {
    return (
      <Card
        title={data.title}
        price={data.price}
        img={data.img}
        pic={data.pic}
      />
    );
  });

  const footer = footerData.map((data) => {
    return <Footer icon={data.icon} />;
  });

  return (
    <div>
      <div className="detail-cont mt-5 d-flex">
        <div className="left-side">
          <img src={props.controllerimg} alt="" />
          <div>
            <img
              src={props.controller}
              alt=""
              className="small rounded-4  mt-5 me-3"
            />
            <img
              src={props.controller}
              alt=""
              className="small rounded-4 mt-5 ms-5"
            />
          </div>
        </div>
        <div className="right-side text-start align-items-start ms-5">
          <div>
            <h2>Play game</h2>
            <p className="prices">$11,70</p>
            <Rating className="mb-4" />
            <p className="d-flex mb-0">
              <strong>Availability: </strong>
              <p className="green-txt ms-3">
                <img src={props.vector} alt="" /> In stock
              </p>
            </p>
            <p>Hurry up! only 34 product left in stock!</p>
            <hr />
            <p className="d-flex">
              <strong>Color:</strong>
              <a href="#" className="color-sec ms-3 text-decoration-none">
                .
              </a>
              <a href="#" className="dark-color ms-3 text-decoration-none">
                .
              </a>
            </p>
            <p className="d-flex">
              <strong> Size:</strong>
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
                className="cart-btn text-decoration-none text-white rounded-pill"
              >
                Add to cart
              </a>
              <a
                href="#"
                className="cart-btn text-decoration-none ms-3 text-white rounded-pill"
              >
                Buy it now
              </a>
              <a href="" className="heart-btn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  class="bi bi-heart"
                  viewBox="0 0 16 16"
                >
                  <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                </svg>
              </a>
            </div>
            <hr />
            <div className="d-flex">
              <p>
                <strong>Sku:</strong>
              </p>
              <p className="num ms-2">01133-9-9</p>
            </div>
            <div className="d-flex">
              <p className="">
                <strong>Sku:</strong>
              </p>
              <p className="sale ms-2"> 20% off, 49% off, Alex remote</p>
            </div>
            <div className="d-flex">
              <p>
                <strong>Share:</strong>
              </p>
              <a href="" className="ms-3">
                <img src={props.icon} alt="" />
              </a>
              <a href="" className="ms-4">
                <img src={props.ficon} alt="" />
              </a>
              <a href="" className="ms-4">
                <img src={props.wicon} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <a
          href=""
          className="normal-btn border border-1 rounded-4 text-decoration-none text-dark me-5"
        >
          Description
        </a>
        <a
          href=""
          className="fill-btn rounded-4 text-decoration-none text-white"
        >
          Reviews
        </a>
      </div>
      <div className="d-flex justify-content-center">
        <div className="border-b mt-5 border border-1 rounded-4 text-start ps-5 p-5 ">
          <h2 className="head">Customer reviews</h2>
          <p className="status">No reviews yet</p>
          <a href="" className="review-btn">
            Write a review
          </a>
        </div>
      </div>
      <Top />
      <div>
        <div className="d-flex mb-5">{card}</div>
      </div>
      {footer}
    </div>
  );
}
