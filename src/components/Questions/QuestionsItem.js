import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import COLORS from '../../constants/colors';
import ANSWERS, { ANSWERS_KEYS } from '../../constants/answers';

import RadioButton from './../FormControls/RadioButton';

const Wrapper = styled.div`
  padding: 10px;

  &:not(:last-child) {
    border-bottom: 1px solid ${COLORS.lightGrey};
  }
`;
const Options = styled.div`
  display: flex;
`;
const RadioButtonWrapper = styled.div`
  flex: 0 1 100%;
`;

const QuestionsItem = (props) => {
  const onChange = (event) => {
    props.onChange({
      section: props.section,
      subsection: props.subsection,
      question: event.target.name,
      answer: event.target.value,
    });
  };

  return (
    <Wrapper>
      {props.question}
      <Options>
        {ANSWERS.map((answer, idx) => {
          let checked = Boolean(props.results[props.section] && props.results[props.section][props.name] === answer);

          if (props.results[props.section] && props.results[props.section].subsections) {
            checked = Boolean(props.results[props.section] &&
                props.results[props.section].subsections[props.subsection] &&
                props.results[props.section].subsections[props.subsection][props.name] === answer);
          }

          return (
            <RadioButtonWrapper key={answer}>
              <RadioButton name={props.name} value={answer} onChange={onChange} checked={checked}>
                {ANSWERS_KEYS[answer]} {idx + 1}
              </RadioButton>
            </RadioButtonWrapper>
          );
        })}
      </Options>
    </Wrapper>
  );
};

QuestionsItem.propTypes = {
  bemCn: PropTypes.func,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  question: PropTypes.string.isRequired,
  results: PropTypes.object.isRequired,
  section: PropTypes.string.isRequired,
  subsection: PropTypes.string,
};

export default QuestionsItem;
