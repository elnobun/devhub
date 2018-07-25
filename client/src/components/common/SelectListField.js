import React, { Fragment } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const SelectListField = ({ name, value, onChange, error, info, options }) => {
  const selectOptions = options.map(option => (
    <option key={option.label} value={option.value}>
      {option.label}
    </option>
  ));
  return (
    <Fragment>
      <select
        className="form-control form-control-lg"
        name={name}
        value={value}
        onChange={onChange}
      >
        {selectOptions}
      </select>
      {info && <small className="form-text text-muted">{info}</small>}
      {error && <span className="invalid-feedback mt-3 ml-4">{error}</span>}
    </Fragment>
  );
};

SelectListField.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
  info: PropTypes.string,
  options: PropTypes.array.isRequired
};

export default SelectListField;
