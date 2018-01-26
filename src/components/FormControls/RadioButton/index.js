import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import COLORS from '../../../constants/colors';

const Wrapper = styled.label`
  display: block;
`;
const Input = styled.input`
  opacity: 0;
  position: absolute;

  &:focus + span {
    outline: 2px solid ${COLORS.blue};
    border-color: ${COLORS.blue};
    transform: translateZ(0);
  }

  &:checked + span {
    background: ${COLORS.main};
    border-color: ${COLORS.main};
    color: #fff;
    transform: translateZ(0);
  }
`;
const Label = styled.span`
  width: 100%;
  display: inline-block;
  padding: 5px;
  border: 1px solid ${COLORS.grey};
`;

const RadioButton = props => (
  <Wrapper>
    <Input
      type="radio"
      name={props.name}
      value={props.value}
      onChange={props.onChange}
      onFocus={props.onFocus}
      checked={props.checked}
    />
    <Label>{props.children}</Label>
  </Wrapper>
);

RadioButton.defaultProps = {
  onFocus: () => {},
};

RadioButton.propTypes = {
  children: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  checked: PropTypes.bool.isRequired,
  onFocus: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default RadioButton;
