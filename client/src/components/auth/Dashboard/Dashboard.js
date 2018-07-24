import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getCurrentProfile } from "../../../redux/actions/profileActions";
import PropTypes from "prop-types";
import Loading from "../../common/Loading";

import "./Dashboard.css";

class Dahsboard extends Component {
  componentDidMount() {
    this.props.getCurrentProfile();
  }

  render() {
    const { user } = this.props.auth;
    const { profile, loading } = this.props.profile;

    let dashboard;

    if (profile === null || loading) {
      dashboard = <Loading />;
    } else {
      // Check if user profile is empty
      if (Object.keys(profile).length > 0) {
        dashboard = <h1>Hello</h1>;
      } else {
        // If user is authicated but has no profile
        dashboard = (
          <div>
            <p className="lead text-muted">Welcome {user.name} </p>
            <p>Profile has not been setup</p>
            <Link
              to="/create-profile"
              className="btn btn-lg btn-info text-lowercase"
            >
              Create Profile
            </Link>
          </div>
        );
      }
    }

    return (
      <div>
        <div id="dashboard">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h1 className="dispay-4">Dashboard</h1>
                {dashboard}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Dahsboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(
  mapStateToProps,
  { getCurrentProfile }
)(Dahsboard);
