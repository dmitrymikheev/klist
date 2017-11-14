import React from "react";
import "./styles.css";

import ANSWERS from "../../constants/answers";

import QuestionsItem from "./QuestionsItem";
import Button from './../Button'
import Error from "./../Error";
import ProgressBar from "../ProgressBar";

const ERROR = "Please answer all questions";

export default class Questions extends React.Component {
  state = {
    error: null
  };
  currentQuestionIndex = 0;

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeydown);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeydown);
  }

  componentWillReceiveProps(nextProps) {
    if (
      this.props.title !== nextProps.title ||
      this.props.currentSubsection !== nextProps.currentSubsection
    ) {
      window.scrollTo(0, 0);
      this.currentQuestionIndex = 0;
    }

    if (this.isValid(nextProps)) {
      this.props.goToNextQuestion();
    }
  }

  handleKeydown = event => {
    const answer = ANSWERS[event.key - 1];
    if (Number.isInteger(event.key - 1) && answer) {
      this.currentQuestionIndex += 1;

      this.props.selectAnswer({
        section: this.props.title,
        subsection: this.props.currentSubsection,
        question: this.props.questions[this.currentQuestionIndex - 1],
        answer
      });
    }
  };

  goToNextQuestion = event => {
    event.preventDefault();

    if (!this.isValid()) {
      return this.setState({ error: ERROR });
    }

    this.setState({ error: null });

    this.props.goToNextQuestion();
  };

  isValid = (props = this.props) => {
    const questions = props.questions;
    const section = props.results[props.title];
    const results =
      section && section.subsections
        ? section.subsections[props.currentSubsection]
        : section;

    return results && !questions.filter(question => !results[question]).length;
  };

  setAnswer = ({ section, subsection, question, answer }) => {
    this.props.selectAnswer({
      section,
      subsection,
      question,
      answer
    });
  };

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
          <Button type="submit">Submit</Button>
          <Button type="button" onClick={this.props.reset}>
            Reset test
          </Button>
        </form>
      </section>
    );
  }
}
