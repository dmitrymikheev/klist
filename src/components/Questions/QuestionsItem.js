import React from "react";

import ANSWERS from "../../constants/answers";

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
      <div>
        {ANSWERS.map((answer, idx) => {
          let checked = Boolean(
            props.results[props.section] &&
              props.results[props.section][props.name] === answer
          );

          if (
            props.results[props.section] &&
            props.results[props.section].subsections
          ) {
            checked =
              props.results[props.section] &&
              props.results[props.section].subsections[props.subsection] &&
              props.results[props.section].subsections[props.subsection][
                props.name
              ] === answer;
          }

          return (
            <RadioButton
              key={idx}
              name={props.name}
              value={answer}
              onChange={onChange}
              // onFocus={onFocus}
              checked={checked}
            >
              {answer} {idx + 1}
            </RadioButton>
          );
        })}
      </div>
    </div>
  );
};

export default QuestionsItem;
