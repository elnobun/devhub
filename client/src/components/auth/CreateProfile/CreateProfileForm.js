import React, { Component } from "react";
import classnames from "classnames";
import TextGroupField from "../../common/TextGroupField";
import SelectListField from "../../common/SelectListField";

class CreateProfileForm extends Component {
  // Default state for profile form
  state = {
    displaySocialInputs: false,
    handle: "",
    company: "",
    website: "",
    location: "",
    status: "",
    skills: "",
    githubusername: "",
    bio: "",
    twitter: "",
    facebook: "",
    linkedin: "",
    youtube: "",
    instagram: "",
    errors: {}
  };

  onChangeHandler = e => {
    e.preventDefault();
    if (!!this.state.errors[e.target.name]) {
      let errors = Object.assign({}, this.state.errors);
      delete errors[e.target.name];
      this.setState({ [e.target.name]: e.target.value });
    } else {
      this.setState({ [e.target.name]: e.target.value });
    }
  };

  onSubmitHandler = e => {
    e.preventDefault();
    console.log("submitted");
  };

  render() {
    const { errors } = this.state;
    const options = [
      { label: "* Professional status", value: 0 },
      { label: "Developer", value: "Developer" },
      { label: "Junior Developer", value: "Junior Developer" },
      { label: "Senior Developer", value: "Senior Developer" },
      { label: "Manager", value: "Manager" },
      { label: "Student or Learning", value: "Student or Learning" },
      { label: "Instructor or Teacher", value: "Instructor or Teacher" },
      { label: "Intern", value: "Intern" },
      { label: "Other", value: "Other" }
    ];
    return (
      <form onSubmit={this.onSubmitHandler}>
        <div
          className={classnames("form-group", {
            "has-danger": errors.handle
          })}
        >
          <TextGroupField
            placeholder="* Profile name"
            name="handle"
            value={this.state.handle}
            onChange={this.onChangeHandler}
            error={errors.handle}
            info="Unique handle for your profile URL. 
          Your fullname, company name or nickname."
          />
        </div>

        <div
          className={classnames("form-group", {
            "has-danger": errors.status
          })}
        >
          <SelectListField
            placeholder="* Status"
            name="status"
            value={this.state.status}
            onChange={this.onChangeHandler}
            options={options}
            error={errors.status}
            info="Your current career status."
          />
        </div>
        <div
          className={classnames("form-group", {
            "has-danger": errors.company
          })}
        >
          <TextGroupField
            placeholder="Company"
            name="company"
            value={this.state.company}
            onChange={this.onChangeHandler}
            error={errors.company}
            info="Personal or Place of work."
          />
        </div>
        <div
          className={classnames("form-group", {
            "has-danger": errors.website
          })}
        >
          <TextGroupField
            placeholder="Website"
            name="website"
            value={this.state.website}
            onChange={this.onChangeHandler}
            error={errors.website}
            info="Personal or Place of work."
          />
        </div>
        <div
          className={classnames("form-group", {
            "has-danger": errors.location
          })}
        >
          <TextGroupField
            placeholder="Location"
            name="location"
            value={this.state.location}
            onChange={this.onChangeHandler}
            error={errors.location}
            info="City & Region. (e.g: London, England )"
          />
        </div>
        <div
          className={classnames("form-group", {
            "has-danger": errors.skills
          })}
        >
          <TextGroupField
            placeholder="Skills"
            name="skills"
            value={this.state.skills}
            onChange={this.onChangeHandler}
            error={errors.skills}
            info="Separate each skill with comma. 
            (e.g: HTML,CSS,JavaScript,Python)."
          />
        </div>
        <div
          className={classnames("form-group", {
            "has-danger": errors.handle
          })}
        >
          <TextGroupField
            placeholder="Github Username"
            name="githubusername"
            value={this.state.githubusername}
            onChange={this.onChangeHandler}
            error={errors.githubusername}
            info="To display your latest repos and Github link, include username."
          />
        </div>
      </form>
    );
  }
}

export default CreateProfileForm;
