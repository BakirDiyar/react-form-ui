import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export default function NavDash() {
  return (
    <nav className="nav flex-column">
      <Link  to="/dashboard/" className="nav-link">
        {" "}
        menu 1
      </Link>
      <Link to="/dashboard/menu/" className="nav-link" >
        {" "}
        menu 2
      </Link>
    </nav>
  );
}
