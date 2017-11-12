import React from "react";

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
    <span className="checkbox__label">{props.label}</span>
    {props.children}
  </label>
);

export default Checkbox;
