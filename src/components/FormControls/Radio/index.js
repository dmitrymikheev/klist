import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import COLORS from '../../../constants/colors';

const Control = styled.span`
  position: relative;
  width: 16px;
  height: 16px;
  display: inline-block;
  vertical-align: middle;
  border-radius: 16px;
  margin-right: 10px;
  border: 1px solid black;

  &::after {
    display: ${props => (props.checked ? 'block' : 'none')};
    content: '';
    width: 8px;
    height: 8px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    background: black;
    border-radius: 8px;
  }
`;
const Input = styled.input`
  position: absolute;
  opacity: 0;

  &:focus + span {
    border-color: ${COLORS.main};

    &:after {
      background: ${COLORS.main};
    }
  }
`;

const Radio = props => (
  <label htmlFor={`${props.name}-${props.value}`}>
    <Input
      type="radio"
      id={`${props.name}-${props.value}`}
      onChange={props.onChange}
      name={props.name}
      value={props.value}
      checked={props.checked}
    />
    <Control checked={props.checked} />
    {props.children}
  </label>
);

Radio.propTypes = {
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]).isRequired,
};

export default Radio;
