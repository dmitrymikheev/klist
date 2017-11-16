import React from "react";

import ANSWERS, { ANSWERS_KEYS } from "../../constants/answers";

import RadioButton from "./../RadioButton";

const QuestionsItem = props => {
  const onChange = event => {
    props.onChange({
      section: props.section,
      subsection: props.subsection,
      question: event.target.name,
      answer: event.target.value
    });
  };

  return (
    <div className="question__answer">
      {props.question}
      <div className="question__answer-options">
        {ANSWERS.map((answer, idx) => {
          let checked = Boolean(
            props.results[props.section] &&
              props.results[props.section][props.name] === answer
          );

          if (
            props.results[props.section] &&
            props.results[props.section].subsections
          ) {
            checked = Boolean(
              props.results[props.section] &&
                props.results[props.section].subsections[props.subsection] &&
                props.results[props.section].subsections[props.subsection][
                  props.name
                ] === answer
            );
          }

          return (
            <RadioButton
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

export default QuestionsItem;
