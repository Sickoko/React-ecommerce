import React from "react";
function Additional(props) {
  return (
    <div className="d-flex">
      <img src={props.Icon} alt="logo" className="me-5 "/>
      <div className="text">
        <h2 >{props.text}</h2>
        <p>{props.moretxt}</p>
      </div>
    </div>
  );
}
export default Additional;
