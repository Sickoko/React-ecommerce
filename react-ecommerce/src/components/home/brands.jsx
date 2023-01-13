import React from "react";

function Brand(props) {
  return (
    <div className="d-flex p-3">
      <img src={props.brandLogo} alt="logo" className="" />
    </div>
  );
}
export default Brand;
