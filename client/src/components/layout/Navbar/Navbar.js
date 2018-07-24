import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../../redux/actions/authActions";
import { clearCurrentProfile } from "../../../redux/actions/profileActions";

import "./Navbar.css";

class Navbar extends Component {
  state = {
    isEnabled: true
  };

  handleScroll = e => {
    e.preventDefault();
    if (this.refs.inner) {
      if (window.scrollY > 50) {
        this.setState({ isEnabled: true });
      } else {
        this.setState({ isEnabled: false });
      }
    }
    this.setState({ isEnabled: !this.state.isEnabled });
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  onLogout = e => {
    e.preventDefault();
    this.props.clearCurrentProfile();
    this.props.logoutUser();
  };

  render() {
    const { isEnabled } = this.state;
    const { isAuthenticated, user } = this.props.auth;

    const authLinks = (
      <ul className="nav navbar-nav ml-auto">
        <li className="nav-item">
          <a href="" className="nav-link mr-auto icon" onClick={this.onLogout}>
            <img
              src={user.avatar}
              alt={user.name}
              title="gravatar image"
              className="rounded-circle"
            />&nbsp; LOGOUT
          </a>
        </li>
      </ul>
    );

    const guestLinks = (
      <ul className="nav navbar-nav ml-auto">
        <li className="nav-item">
          <Link className="nav-link mr-auto icon" to="/login">
            <i className="material-icons">fingerprint</i>&nbsp; LOGIN
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link icon" to="/register">
            <i className="material-icons">person_add</i>&nbsp; SIGNUP
          </Link>
        </li>
      </ul>
    );

    const noauth = isEnabled
      ? "navbar navbar-expand-lg fixed-top navbar-dark navbar-transparent"
      : "navbar navbar-expand-lg fixed-top navbar-light bg-light";

    const authHeader = isEnabled
      ? "navbar navbar-expand-lg fixed-top navbar-light navbar-transparent"
      : "navbar navbar-expand-lg fixed-top navbar-dark bg-primary";

    return (
      <div id="home">
        <nav ref="inner" className={isAuthenticated ? authHeader : noauth}>
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
              {isAuthenticated ? authLinks : guestLinks}
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

Navbar.propTypes = {
  auth: PropTypes.object.isRequired,
  logoutUser: PropTypes.func.isRequired,
  clearCurrentProfile: PropTypes.func.isRequired
};

const mapSateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapSateToProps,
  { logoutUser, clearCurrentProfile }
)(Navbar);
