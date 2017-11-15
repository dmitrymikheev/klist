import "./styles.css";
import React from "react";
import PropTypes from "prop-types";

const RadioButton = props => (
  <label className="radio-button">
    <input
      className="radio-button__input"
      type="radio"
      name={props.name}
      value={props.value}
      onChange={props.onChange}
      onFocus={props.onFocus}
      checked={props.checked}
    />
    <span className="radio-button__label">{props.children}</span>
  </label>
);

RadioButton.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func.isRequired,
  onFocus: PropTypes.func
};

export default RadioButton;
