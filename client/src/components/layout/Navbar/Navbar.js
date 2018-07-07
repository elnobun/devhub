import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";

class Navbar extends Component {
  state = {
    isEnabled: true
  };

  handleScroll = e => {
    e.preventDefault();
    const navbar = this.refs.inner;
    if (navbar) {
      if (window.scrollY > 50) {
        this.setState({ isEnabled: true });
      } else {
        this.setState({ isEnabled: false });
      }
    }
    this.setState({
      isEnabled: !this.state.isEnabled
    });
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  render() {
    const { isEnabled } = this.state;
    return (
      <div id="home">
        <nav
          ref="inner"
          className={`navbar navbar-expand-lg fixed-top navbar-dark bg-primary ${
            isEnabled ? "navbar-transparent" : ""
          } `}
        >
          <div className="container">
            <Link className="navbar-brand" to="/">
              DevelopersHub
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarColor01"
              aria-controls="navbarColor01"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>

            <div className="collapse navbar-collapse" id="navbarColor01">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <Link className="nav-link" to="/">
                    FEATURING <span className="sr-only">(current)</span>
                  </Link>
                </li>
              </ul>

              <ul className="nav navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    LOGIN
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/register">
                    SIGNUP
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
