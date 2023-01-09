import React from "react";

class Small extends React.Component {
  render() {
    return (
      <div className=" cards d-flex justify-content-evenly border border-1 rounded">
        <div className="left_side">
          <img src={this.props.image} alt={this.props.alt} />
        </div>
        <div className="right_side ">
          <h4 className="para pt-5">{this.props.title}</h4>
          <p className="para">{this.props.count}</p>
        </div>
      </div>
    );
  }
}

export default Small;
