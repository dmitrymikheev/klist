import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import CONFIG_OPTIONS from '../../constants/configOptions';

import Button from '../Button';
import Checkbox from '../Checkbox';
import SectionsConfigControl from './SectionsConfigControl';
import Card from '../Card';
import Radio from '../FormControls/Radio';

const Wrapper = styled.div`
  padding: 5px;
`;
const Option = styled.div`
  margin-bottom: 10px;
`;

const OPTIONS = [
  { value: CONFIG_OPTIONS.ALL, text: 'Show me all questions.' },
  { value: CONFIG_OPTIONS.DOMINANT, text: 'Show only dominant and neutral questions.' },
  { value: CONFIG_OPTIONS.SUBMISSIVE, text: 'Show only submissive and neutral questions.' },
];

export default class SectionsConfig extends React.PureComponent {
  setOption = (event) => {
    this.props.setOption(event.target.value);
  };

  acceptQuestions = () => {
    this.props.start();
  };

  render() {
    return (
      <Wrapper>
        {OPTIONS.map(option => (
          <Option key={option.value}>
            <Radio
              name="v"
              onChange={this.setOption}
              checked={this.props.selectedOption === option.value}
              value={option.value}
            >
              {option.text}
            </Radio>
          </Option>
        ))}
        <Button onClick={this.acceptQuestions}>Start</Button>
      </Wrapper>
    );
  }
}

SectionsConfig.propTypes = {
  start: PropTypes.func.isRequired,
  setOption: PropTypes.func.isRequired,
  selectedOption: PropTypes.string.isRequired,
};
