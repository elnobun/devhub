import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const TextField = ({
  type,
  name,
  label,
  placeholder,
  value,
  onChange,
  error,
  info,
  icon,
  disabled
}) => {
  return (
    <div className="input-group">
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
      {info && <small className="form-text text-muted">{info}</small>}
      {error && <span className="invalid-feedback mt-3 ml-4">{error}</span>}
    </div>
  );
};

TextField.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  icon: PropTypes.string,
  error: PropTypes.string,
  info: PropTypes.string,
  disabled: PropTypes.string
};

TextField.defaultProps = {
  type: "text"
};

export default TextField;
