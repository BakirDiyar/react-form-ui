import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "../pages/login/Login";
import Dashboard from "../pages/dashboard/Dashboard";
export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" > <Login/> </Route> 
        <Route exact path="/dashboard/" component={Dashboard} />
        <Route exact path="/dashboard/:menu" component={Dashboard} />
      </Switch>
    </Router>
  );
}
