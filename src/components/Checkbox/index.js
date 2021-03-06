import "./styles.css";
import React from "react";
import PropTypes from "prop-types";

const Checkbox = props => (
  <label className="checkbox">
    <input
      className="checkbox__input"
      type="checkbox"
      name={props.name}
      value={props.value}
      onChange={props.onChange}
      checked={props.checked}
    />
    <span className="checkbox__control">
      <svg
        className="checkbox__control-check"
        viewBox="0 0 24 24"
        preserveAspectRatio="xMidYMid meet"
      >
        <path fill="none" d="M6,11.3 L10.3,16 L18,6.2" />
      </svg>
    </span>
    {props.children}
  </label>
);

Checkbox.propTypes = {
  checked: PropTypes.bool,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default Checkbox;
