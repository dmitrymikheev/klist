import "./styles.css";
import React from "react";
import PropTypes from "prop-types";

const ProgressBar = props => (
  <div className="progress-bar">
    <div className="progress-bar__result" style={{ width: `${props.progressValue}%` }} />
  </div>
);

ProgressBar.propTypes = {
  progressValue: PropTypes.number.isRequired
}

export default ProgressBar
