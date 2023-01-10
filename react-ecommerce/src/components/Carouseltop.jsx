import React from "react";

function CarouselTop(props) {
  return (
    <div className="d-flex justify-content-between mt-5 ps-3">
      <h2 className="col-md-6 text-start ps-5 pt-3">{props.heading}</h2>
      <div className="d-flex justify-content-between ">
        <a
          href=""
          className="text-decoration-none border border-1 px-3 p-1 rounded-4 align-self-center mx-3 text-dark"
        >
          {props.category1}
        </a>
        <a
          href=""
          className="text-decoration-none border border-1 px-3 p-1 rounded-4 align-self-center mx-3 text-dark"
        >
          {props.category2}
        </a>
        <a
          href=""
          className="text-decoration-none border border-1 px-3 p-1 rounded-4 align-self-center mx-3 text-dark"
        >
          {props.category3}
        </a>
        <a
          href=""
          className="text-decoration-none border border-1 px-3 p-1 rounded-4 align-self-center mx-3 text-dark"
        >
          {props.category4}
        </a>
      </div>
    </div>
  );
}
export default CarouselTop;
