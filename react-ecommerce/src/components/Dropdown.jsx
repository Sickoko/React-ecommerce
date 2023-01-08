import React from "react";
import { Nav, NavDropdown, NavLink } from "react-bootstrap";

const SubMenu = (props) => {
  const subMenu =
    props.children.length > 0 ? (
      <NavDropdown title={props.title}>
        {props.children.map((child) => {
          return <NavDropdown.Item>{child.title}</NavDropdown.Item>;
        })}
      </NavDropdown>
    ) : (
      <NavLink>{props.title}</NavLink>
    );

  return (
    <div className="w-100">
      <div className="navbg">
        <Nav className="me-auto">{subMenu}</Nav>
      </div>
    </div>
  );
};

export default SubMenu;
