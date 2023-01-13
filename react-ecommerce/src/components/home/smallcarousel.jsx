import React from "react";

function Small(props) {
  return (
    <div className=" cards d-flex  border border-1 rounded mt-5 p-3">
      <div className="left_side">
        <img src={props.image} alt={props.alt} />
      </div>
      <div className="right_side ">
        <h4 className="para pt-5">{props.title}</h4>
        <p className="para">{props.count}</p>
      </div>
    </div>
  );
}

export default Small;
