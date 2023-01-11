import React from "react";
function Top(props) {
  return (
    <div className="d-flex justify-content-between mx-5 mt-5">
      <h2>{props.header}</h2>
      <a href="" className="btn text-decoration-none ">
        <h2>{props.btn}</h2>
      </a>
    </div>
  );
}
export default Top;
