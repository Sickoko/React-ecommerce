import React from "react";

function SaleSection(props) {
  return (
    <div>
      <div className="background ms-5">
        <div className="bgimg">
          <img src={props.bgimg} alt="biglaptoppic" className="w-100" />
        </div>
        <div className="rightside ">
          <a
            href=""
            className="text-white bg-warning rounded-pill p-2 px-3 text-decoration-none"
          >
            New Laptop
          </a>
          <h1 className="sale mt-3">{props.saledesc}</h1>
          <p className="text-white mt-3 mb-3">{props.description}</p>
          <a
            href=""
            className="text-white bg-warning rounded-pill p-2 px-3 text-decoration-none "
          >
            Shop now
          </a>
        </div>
      </div>
    </div>

  );
}

export default SaleSection;
