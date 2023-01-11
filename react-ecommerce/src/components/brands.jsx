import React from "react";

function Brand(props) {
  return (
    <div className="d-flex">
      <img src={props.brandLogo} alt="logo" className="" />
    </div>
  );
}
export default Brand;
