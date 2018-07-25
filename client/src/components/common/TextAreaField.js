import React, { Fragment } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const TextAreaField = ({ name, placeholder, value, onChange, error, info }) => {
  return (
    <Fragment>
      <textarea
        className={classnames("form-control form-control-lg", {
          "is-invalid": { error }
        })}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
      />
      {info && <small className="form-text text-muted">{info}</small>}
      {error && <span className="invalid-feedback mt-3 ml-4">{error}</span>}
    </Fragment>
  );
};

TextAreaField.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  error: PropTypes.string,
  info: PropTypes.string
};

export default TextAreaField;
