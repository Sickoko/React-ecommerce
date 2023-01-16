import React from "react";
import SubMenu from "./Dropdown";
import { Navbar } from "react-bootstrap";
import dropdownData from "../../data/home/Dropdown";
function Header(props) {
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
      <div className="Header mt-3 d-flex justify-content-between">
        <img
          src={props.logo}
          alt="logo"
          className="img col-md-9 text-start px-3 ms-5 w-auto"
        />
        <div class="input-group mb-3 w-25">
          <input
            type="text"
            className="form-control"
            placeholder="Search anything"
            aria-label="Search anything"
            aria-describedby="button-addon2"
          />
          <button
            className="btn text-white bg-warning "
            type="button"
            id="button-addon2"
          >
            Search
          </button>
        </div>
        <div className="signin d-flex me-5">
          <div className="align-self-center d-flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              className="bi bi-person text-white"
              viewBox="0 0 16 16"
            >
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
            </svg>
            <p className="sign text-white ">Sign in</p>
            <div className="d-flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="24"
                fill="currentColor"
                className="bi bi-heart text-white ms-3"
                viewBox="0 0 16 16"
              >
                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
              </svg>
              <p className="text-white ps-1">0</p>
            </div>
            <div className="d-flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                className="bi bi-cart text-white ms-5"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
              </svg>
              <p className="text-white ps-1">0</p>
            </div>
          </div>
        </div>
      </div>
      <div className="navbar-menu">
        <Navbar
          bg="light"
          className="navbar_space px-5 d-flex justify-content-between"
        >
          <div className="orange">
            <select className="border border-none ">
              <option> Browse categories </option>
              <option>Laptop</option>
              <option>Camera</option>
              <option>Desktop</option>
              <option>Watches</option>
            </select>
          </div>
          {subMenus}
          <p className="return">30 days free return</p>
        </Navbar>
      </div>
    </div>
  );
}
export default Header;
