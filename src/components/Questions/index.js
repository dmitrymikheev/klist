import React from "react";
import "./styles.css";

import QUESTIONS from "../../constants/sections";

import QuestionsItem from "./QuestionsItem";
import Error from "./../Error";
import RadioButton from "../RadioButton";
import ProgressBar from "../ProgressBar";

const ERROR = "Please answer all questions";

export default class Questions extends React.Component {
  state = {
    error: null
  };

  onKeyDown(event) {
    const answer = this.nodes[this.focusedQuestionNode][event.key - 1];

    if (answer) {
      answer.checked = true;
      answer.focus();
      this.currentQuestionIndex = this.currentQuestionIndex + 1;
      console.log(this.nodesArray);
      const nextQuestion = this.nodesArray[this.currentQuestionIndex];
      const nextAnswer = this.nodes[nextQuestion][0];
      this.focusedQuestionNode = nextQuestion;
      nextAnswer.focus();
    }
  }

  goToNextQuestion = event => {
    event.preventDefault();
    const questions = this.props.questions;
    const section = this.props.results[this.props.title];
    const results =
      section && section.subsections
        ? section.subsections[this.props.currentSubsection]
        : section;

    if (!results || this.checkValidation(questions, results)) {
      return this.setState({ error: ERROR });
    }

    this.setState({ error: null });

    this.props.goToNextQuestion();
  };

  checkValidation = (questions, results) =>
    questions.filter(question => !results[question]).length;

  setAnswer = ({ section, subsection, question, answer }) => {
    this.props.selectAnswer({
      section,
      subsection,
      question,
      answer
    });
  };

  onFocus(event) {}

  render() {
    if (!this.props.questions) return null;

    return (
      <section className="question">
        <h4 className="question__title">
          {this.props.title}
          {this.props.currentSubsection && (
            <span className="question__subsection-title">
              - {this.props.currentSubsection}
            </span>
          )}
          <span className="question__progress">
            Progress - {this.props.progressValue}%
          </span>
        </h4>
        <ProgressBar progressValue={this.props.progressValue} />
        <form onSubmit={this.goToNextQuestion}>
          {this.props.questions.map(question => (
            <QuestionsItem
              key={question}
              section={this.props.title}
              subsection={this.props.currentSubsection}
              question={question}
              name={question}
              onChange={this.setAnswer}
              onFocus={this.onFocus}
              results={this.props.results}
            />
          ))}
          <Error>{this.state.error}</Error>
          <button type="submit">Submit</button>
          <button type="button" onClick={this.props.reset}>
            Reset test
          </button>
        </form>
      </section>
    );
  }
}
