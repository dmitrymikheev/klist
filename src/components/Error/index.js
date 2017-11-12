import "./styles.css";
import React from 'react'

const Error = props => props.children ? (
  <div className="error">{props.children}</div>
) : null

export default Error
