import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const InputField = ({
  type,
  name,
  placeholder,
  value,
  onChange,
  error,
  icon
}) => {
  return (
    <div className="input-group mb-3">
      <div className="input-group-prepend">
        <span className="input-group-text">
          <i className="material-icons">{icon}</i>
        </span>
      </div>
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
      {error && <span className="invalid-feedback mt-3 ml-4">{error}</span>}
    </div>
  );
};

InputField.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  icon: PropTypes.string,
  error: PropTypes.string
};

TextField.defaultProps = {
  type: "text"
};

export default InputField;
