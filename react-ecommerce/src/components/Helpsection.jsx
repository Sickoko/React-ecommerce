import SubMenu from "./Dropdown";
import { Navbar } from "react-bootstrap";
import dropdownData from "../data/Dropdown";
import headerData from "../data/Header";
import Header from "./Header";
import React from "react";
class Helpsec extends React.Component {
  render() {
    const subMenus = dropdownData.map((subMenu) => {
      return (
        <SubMenu
          title={subMenu.title}
          position={subMenu.position}
          children={subMenu.children}
        />
      );
    });
    return (
      <div>
        <div className="header mt-3 d-flex">
          <p className="col-md-9 text-start ps-5">{this.props.help}</p>
          <a className="col-md-1 text-end text-decoration-none text-dark ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              fill="currentColor"
              className="bi bi-geo-alt me-3"
              viewBox="0 0 16 16"
            >
              <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
              <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
            </svg>
            {this.props.ourstore}
          </a>
          <a className="col-md-3 text-center text-decoration-none text-dark pe-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="bi bi-truck me-3"
              viewBox="0 0 16 16"
            >
              <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5v-7zm1.294 7.456A1.999 1.999 0 0 1 4.732 11h5.536a2.01 2.01 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456zM12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12v4zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
            </svg>
            {this.props.track}
          </a>
        </div>
        <Header />
        <Navbar bg="light" className="px-5">
          {subMenus}
        </Navbar>
      </div>
    );
  }
}

export default Helpsec;
