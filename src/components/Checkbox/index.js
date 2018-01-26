import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import COLORS from '../../constants/colors';

const Label = styled.label`
  display: block;
`;
const Input = styled.input`
  position: absolute;
  opacity: 0;

  &:focus + span {
    box-shadow: 0 0 2px ${COLORS.blue};
    border-color: ${COLORS.blue};
  }
`;
const Control = styled.span`
  position: relative;
  top: -1px;
  display: inline-block;
  width: 24px;
  height: 24px;
  margin-right: 12px;
  vertical-align: middle;
  background-color: inherit;
  border: 2px solid ${COLORS.grey};
  border-radius: 4px;
`;
const Icon = styled.svg`
  display: ${props => (props.checked ? 'none' : 'block')};
  position: absolute;
  top: 50%;
  left: 50%;
  width: 24px;
  height: 24px;
  stroke-width: 4px;
  transform: translateX(-50%) translateY(-50%);
  stroke: ${COLORS.main};
`;

const Checkbox = props => (
  <Label>
    <Input
      type="checkbox"
      name={props.name}
      value={props.value}
      onChange={props.onChange}
      checked={props.checked}
    />
    <Control>
      <Icon viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet">
        <path fill="none" d="M6,11.3 L10.3,16 L18,6.2" />
      </Icon>
    </Control>
    {props.children}
  </Label>
);

Checkbox.defaultProps = {
  checked: false,
}

Checkbox.propTypes = {
  checked: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]).isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default Checkbox;
