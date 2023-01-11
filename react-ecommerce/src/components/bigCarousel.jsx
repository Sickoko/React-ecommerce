import React from "react";
function BigCarousel(props) {
  return (
    <div className="out d-flex w-75 mt-5 border border-2 rounded-5 p-5 text-center ">
      <div>
        <img src={props.img} alt="picture" />
      </div>
      <div className="text-start ms-3">
        <a
          href=""
          className="date-btn border border-1 rounded-pill text-start text-decoration-none px-3 "
        >
          {props.date}
        </a>
        <h2 className=" header mt-3">{props.header}</h2>
        <p className="txt">{props.text}</p>
        <p className="maker">{props.maker}</p>
      </div>
    </div>
  );
}
export default BigCarousel;
