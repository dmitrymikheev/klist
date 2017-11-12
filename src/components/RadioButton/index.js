import "./styles.css";
import React from "react";
import PropTypes from "prop-types";

const RadioButton = props => {

  return (
    <label className="checkbox">
      <input
        className="checkbox__input"
        type="radio"
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        onFocus={props.onFocus}
        checked={props.checked}
      />
      <span className="checkbox__label">{props.children}</span>
    </label>
  );
};

RadioButton.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onFocus: PropTypes.func
};

export default RadioButton;
