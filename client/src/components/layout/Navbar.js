import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar fixed-top navbar-expand-lg">
      <div className="container">
        <div className="navbar-translate">
          <Link to="/" className="navbar-brand">
            DevelopersHub
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
            <span className="navbar-toggler-icon" />
            <span className="navbar-toggler-icon" />
          </button>
        </div>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/profiles" className="nav-link">
                Meet Ups
              </Link>
            </li>
          </ul>

          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to="/login" className="nav-link">
                <i className="material-icons">fingerprint</i> Login
              </Link>
            </li>
            <li className="button-container nav-item iframe-extern">
              <Link
                to="/register"
                className="btn  btn-rose   btn-round btn-block"
              >
                <i className="material-icons">person_add</i> Sign Up
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
