import React from "react";
import "./style.css";
import NavDash from "../../components/AsideDashboard/NavDash";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="dash-app">
      <div className="container-fluid  pt-4">
        <div className="row align-items-center justify-content-center pt-6">
          <div className="aside-nav">
            <NavDash />
          </div>
          <div className="content-dash">
            <Router>
              <Switch>
                <Route exact path="/dashboard/">
                  {"home "}
        
                </Route>
                <Route exact path="/dashboard/menu/">
                  {" graph"}
                  
                </Route>
              </Switch>
            </Router>
          </div>
        </div>
      </div>
    </div>
  );
}
