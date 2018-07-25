import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import "./CreateProfile.css";
import CreateProfileForm from "./CreateProfileForm";

const CreateProfile = ({ profile, errors }) => {
  return (
    <div id="create-profile">
      <div className="container">
        <div className="row">
          <div className="col-md-7 m-auto">
            <h1 className="display-5 text-center">Create Your Profile</h1>
            <p className="lead text-center">
              Some information to make your profile stand out
            </p>
            <small className="d-block pb-3">* means required fields</small>
            <CreateProfileForm profile={profile} errors={errors} />
          </div>
        </div>
      </div>
    </div>
  );
};

CreateProfile.propTypes = {
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  errors: state.errors
});

export default connect(mapStateToProps)(CreateProfile);
