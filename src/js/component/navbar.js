import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light mb-3">
      <Link to="/">
        <span className="navbar-brand mb-0 h1">Search That Stock</span>
      </Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link to="/howtouse" className="nav-link">
              <button className="btn btn-primary">Help</button>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
