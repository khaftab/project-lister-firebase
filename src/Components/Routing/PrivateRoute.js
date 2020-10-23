import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useSelector } from "react-redux";

function PrivateRoute({ component: Component, ...rest }) {
  const auth = useSelector((state) => state.firebase.auth.uid);
  console.log(auth);
  return (
    <div>
      {auth ? (
        <Route component={Component} {...rest} />
      ) : (
        <Redirect to="signin" />
      )}
    </div>
  );
}

export default PrivateRoute;
