import React from "react";

function Cards(props) {
  return (
    <div className="d-flex ">
      <div className="cards d-flex border border-3 rounded-3">
        <div className="smallCards">
          <img src={props.productImg} alt="BIGspeaker" />
        </div>
        <div className="details d-flex">
          <p>{props.productName}</p>
          <p>{props.productPrice}</p>
        </div>
      </div>
    </div>
  );
}
export default Cards;
