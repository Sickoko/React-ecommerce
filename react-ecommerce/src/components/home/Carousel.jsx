import React from "react";
import Detail from "../detail";
import detailData from "../../data/detail/Detail";
function Carousell(props) {
  // const detail = detailData.map((data) => {
  //   <Detail />;
  // });
  // constructor(props) {
  //   super(props);
  //   this.handleClick = this.handleClick.bind(this)
  // }
  //  handleClick(props) {
  //   console.log("clicked");
  //   console.log(props.id);
  // }
  return (
    <div className="carouselCards d-flex justify-content-start align-items-center p-5">
      <div className="left col-md-6">
        <h1 className="title text-center">{props.title}</h1>
        <div className="text-center">
          <a
            href=""
            className="bg-warning rounded-pill p-2 text-white me-3 mt-3 text-decoration-none"
          >
            Shop now
          </a>
          <a
            href=""
            className="btn rounded-pill border border-1 p-2 text-decoration-none"
            // onClick={() => {
            //   this.handleClick(this.props);
            // }}
          >
            View more
          </a>
        </div>
      </div>
      <div className="right col-md-6">
        <img src={props.image} alt={props.title} />
      </div>
    </div>
  );
}

export default Carousell;
