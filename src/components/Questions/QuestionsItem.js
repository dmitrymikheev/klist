import React from 'react';
import PropTypes from 'prop-types';

import ANSWERS, { ANSWERS_KEYS } from '../../constants/answers';

import RadioButton from './../FormControls/RadioButton';

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
    <div className={props.bemCn('answer')()}>
      {props.question}
      <div className={props.bemCn('answer-options')()}>
        {ANSWERS.map((answer, idx) => {
          let checked = Boolean(props.results[props.section] && props.results[props.section][props.name] === answer);

          if (props.results[props.section] && props.results[props.section].subsections) {
            checked = Boolean(props.results[props.section] &&
                props.results[props.section].subsections[props.subsection] &&
                props.results[props.section].subsections[props.subsection][props.name] === answer);
          }

          return (
            <RadioButton
              bemCn={props.bemCn('radio-button')()}
              key={idx}
              name={props.name}
              value={answer}
              onChange={onChange}
              checked={checked}
            >
              {ANSWERS_KEYS[answer]} {idx + 1}
            </RadioButton>
          );
        })}
      </div>
    </div>
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
