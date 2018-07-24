import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCurrentProfile } from "../../redux/actions/profileActions";
import "./Dashboard.css";

class Dahsboard extends Component {
  componentDidMount() {
    this.props.getCurrentProfile();
  }

  render() {
    return (
      <div id="dashboard">
        <div className="container">
          <h1>User dashboard</h1>
        </div>
      </div>
    );
  }
}

Dahsboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired
};

export default connect(
  null,
  { getCurrentProfile }
)(Dahsboard);
