import "./styles.css";
import React from "react";
import PropTypes from "prop-types";
import b_ from "bem-cn";

const bemCn = b_("radio-button");

const RadioButton = props => (
  <label className={bemCn.mix(props.bemCn)()}>
    <input
      className={bemCn("input")()}
      type="radio"
      name={props.name}
      value={props.value}
      onChange={props.onChange}
      onFocus={props.onFocus}
      checked={props.checked}
    />
    <div className={bemCn("label")()}>{props.children}</div>
  </label>
);

RadioButton.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func.isRequired,
  onFocus: PropTypes.func
};

export default RadioButton;
