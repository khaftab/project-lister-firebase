import React from "react";
import Navbar from "./Components/layout/Navbar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Dashboard from "./Components/dashboard/Dashboard";
import ProjectDetails from "./Components/projects/ProjectDetails";
import Signin from "./Components/auth/Signin";
import Signup from "./Components/auth/Signup";
import CreateProject from "./Components/projects/CreateProject";
import PrivateRoute from "./Components/Routing/PrivateRoute";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <PrivateRoute exact path="/" component={Dashboard} />
          <Route path="/project/:id" component={ProjectDetails} />
          <Route path="/signin" component={Signin} />
          <Route path="/signup" component={Signup} />
          <Route path="/create" component={CreateProject} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
