import React from "react";
function Members(props) {
  return (
    <div className="mt-5 border border-2 rounded-4 w-75 ms-5 p-3">
      <div className="d-flex ms-3 ">
        <img src={props.img} alt="profile" className="bordered_img" />
        <h5 className="name ms-5 mt-4">{props.name}</h5>
      </div>
      <div className="text  d-flex rounded-3 p-3 mt-3 mx-3">
        <p>{props.text}</p>
      </div>
    </div>
  );
}
export default Members;
