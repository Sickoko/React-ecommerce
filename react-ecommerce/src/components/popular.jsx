import React from "react";
class Popular extends React.Component {
  render() {
    return (
      <div>
        <div className="border border-1">
          <img src={this.props.img} alt="" />
          <h6>{this.props.title} </h6>
          <p>{this.props.price}</p>
        </div>
      </div>
    );
  }
}
export default Popular;
