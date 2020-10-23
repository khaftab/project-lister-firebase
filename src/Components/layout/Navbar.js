import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import SignedinLinks from "./SignedinLinks";
import SignedoutLinks from "./SignedoutLinks";
import { connect } from "react-redux";

function Navbar({ auth, initials }) {
  return (
    <Nav
      className="d-flex justify-content-around align-items-center"
      style={{ background: "#40407a" }}
    >
      <Link to="/" className="" style={{ fontSize: "27px", color: "#fff" }}>
        Bloogy
      </Link>
      {auth.uid ? <SignedinLinks initials={initials} /> : <SignedoutLinks />}
    </Nav>
  );
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    auth: state.firebase.auth,
    initials: state.firebase.profile.initials,
  };
};

export default connect(mapStateToProps)(Navbar);
