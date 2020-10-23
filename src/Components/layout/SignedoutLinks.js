import React from "react";
import { NavLink } from "react-router-dom";
import { Nav } from "react-bootstrap";

function SignedoutLinks() {
  return (
    <Nav className="m-4">
      <Nav.Item>
        <NavLink to="/signin" className="nav-link" style={{ color: "white" }}>
          Sign In
        </NavLink>
      </Nav.Item>
      <Nav.Item>
        <NavLink style={{ color: "white" }} to="/signup" className="nav-link">
          Sign Up
        </NavLink>
      </Nav.Item>
    </Nav>
  );
}

export default SignedoutLinks;
