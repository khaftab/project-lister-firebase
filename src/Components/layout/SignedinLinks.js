import React from "react";
import { NavLink } from "react-router-dom";
import { Button, Nav } from "react-bootstrap";
import { connect } from "react-redux";
import { signOut } from "../../store/actions/authAction";

function SignedinLinks({ logOut, initials }) {
  return (
    <Nav className="m-4">
      <Nav.Item>
        <NavLink to="/create" className="nav-link" style={{ color: "white" }}>
          New Project
        </NavLink>
      </Nav.Item>
      <Nav.Item>
        <Button onClick={logOut}>Log Out</Button>
      </Nav.Item>
      <Nav.Item>
        <NavLink style={{ color: "white" }} className="nav-link" to="">
          {initials ? initials : "KA"}
        </NavLink>
      </Nav.Item>
    </Nav>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    logOut: () => dispatch(signOut()),
  };
};

export default connect(null, mapDispatchToProps)(SignedinLinks);
