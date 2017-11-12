import React from "react";
import PropTypes from 'prop-types'
import Checkbox from "./../Checkbox";

const SectionsConfigControl = props => {
  const onChange = ({ target }) => {
    props.onChange({
      section: props.section,
      subsection: props.subsection,
      value: target.value,
      checked: target.checked
    });
  };

  return (
    <Checkbox
      onChange={onChange}
      value={props.value}
      checked={props.checked}
    >
      {props.children}
    </Checkbox>
  );
};

SectionsConfigControl.propTypes = {
  onChange: PropTypes.func.isRequired,
  checked: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
  section: PropTypes.string.isRequired,
  subsection: PropTypes.string
}

export default SectionsConfigControl;
