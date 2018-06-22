import React from "react";

const Navbar = () => {
  return (
    <nav
      className="navbar fixed-top navbar-expand-lg"
      color-on-scroll="100"
      id="sectionsNav"
    >
      <div className="container">
        <div className="navbar-translate">
          <a className="navbar-brand">Developers Hub</a>
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
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a href="./examples/login-page.html" className="nav-link">
                <i className="material-icons">fingerprint</i> Login
              </a>
            </li>
            <li className="button-container nav-item iframe-extern">
              <a href="" className="btn  btn-rose   btn-round btn-block">
                <i className="material-icons">person_add</i> Sign Up
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
