import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "./Landing.css";

class Landing extends Component {
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  render() {
    return (
      <div id="landing">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1>Connecting Developers</h1>
              <h4 className="ml-auto">Connect | Meet Up | Free Chat </h4>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Landing.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Landing);
