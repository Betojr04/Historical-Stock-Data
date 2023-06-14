import React from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.css";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light mb-3">
      <Link to="/">
        <span className="navbar-brand mb-0 h1 mr-4">Search That Stock and make some monayyyy</span>
      </Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/howtouse" className="nav-link rightAlign">
              <button className="btn btn-primary">Help</button>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
