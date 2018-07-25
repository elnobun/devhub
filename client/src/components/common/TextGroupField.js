import React, { Fragment } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const TextGroupField = ({
  type,
  name,
  label,
  placeholder,
  value,
  onChange,
  error,
  info,
  disabled
}) => {
  return (
    <Fragment>
      <input
        type={type}
        className={classnames("form-control form-control-lg", {
          "is-invalid": { error }
        })}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        disabled={disabled}
      />
      {info && <small className="form-text text-muted">{info}</small>}
      {error && <span className="invalid-feedback mt-3 ml-4">{error}</span>}
    </Fragment>
  );
};

TextGroupField.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  error: PropTypes.string,
  info: PropTypes.string,
  disabled: PropTypes.string
};

TextGroupField.defaultProps = {
  type: "text"
};

export default TextGroupField;
