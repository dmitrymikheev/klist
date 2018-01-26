import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ANSWERS from '../../constants/answers';
import COLORS from '../../constants/colors';

import QuestionsItem from './QuestionsItem';
import Button from './../Button';
import Error from './../Error';
import ProgressBar from '../ProgressBar';

const Wrapper = styled.section`
  max-width: 700px;
  margin: 0 auto;
  border: 1px solid ${COLORS.lightGrey};
`;
const Title = styled.h4`
  margin: 0;
  padding: 10px;
  border-bottom: 1px solid ${COLORS.lightGrey};
`;
const SubSectionTitle = styled.span`
  margin-left: 5px;
`;
const Progress = styled.span`
  float: right;
`;
const ErrorWrapper = styled.div`
  padding: 10px 10px 0;
`;
const Buttons = styled.div`
  display: flex;
  padding: 10px;
  justify-content: space-between;
`;

const ERROR = 'Please answer all questions';

export default class Questions extends React.Component {
  state = {
    error: null,
  };
  currentQuestionIndex = 0;

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeydown);
  }

  componentWillReceiveProps(nextProps) {
    if (
      this.props.title !== nextProps.title ||
      this.props.currentSubsection !== nextProps.currentSubsection
    ) {
      window.scrollTo(0, 0);
      this.currentQuestionIndex = 0;
    }
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeydown);
  }

  handleKeydown = (event) => {
    const answer = ANSWERS[event.key - 1];

    if (Number.isInteger(event.key - 1) && answer) {
      this.currentQuestionIndex += 1;

      if (this.props.questions[this.currentQuestionIndex - 1]) {
        this.props.selectAnswer({
          section: this.props.title,
          subsection: this.props.currentSubsection,
          question: this.props.questions[this.currentQuestionIndex - 1],
          answer,
        });
      }

      if (this.isValid()) {
        this.props.goToNextQuestion();
      }
    }
  };

  goToNextQuestion = (event) => {
    event.preventDefault();

    if (!this.isValid()) {
      return this.setState({ error: ERROR });
    }

    this.setState({ error: null });

    this.props.goToNextQuestion();
  };

  isValid = (props = this.props) => {
    const section = props.results[props.title];
    const results =
      section && section.subsections ? section.subsections[props.currentSubsection] : section;

    return results && !props.questions.filter(question => !results[question]).length;
  };

  setAnswer = ({
    section, subsection, question, answer,
  }) => {
    this.props.selectAnswer({
      section,
      subsection,
      question,
      answer,
    });
  };

  render() {
    if (!this.props.questions) return null;

    return (
      <Wrapper>
        <Title>
          {this.props.title}
          {this.props.currentSubsection && (
            <SubSectionTitle>- {this.props.currentSubsection}</SubSectionTitle>
          )}
          <Progress>Progress - {this.props.progressValue}%</Progress>
        </Title>
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
              results={this.props.results}
            />
          ))}
          {this.state.error && (
            <ErrorWrapper>
              <Error>{this.state.error}</Error>
            </ErrorWrapper>
          )}
          <Buttons>
            <Button type="submit">Submit</Button>
            <Button type="button" onClick={this.props.reset}>
              Reset test
            </Button>
          </Buttons>
        </form>
      </Wrapper>
    );
  }
}

Questions.propTypes = {
  currentSubsection: PropTypes.string,
  goToNextQuestion: PropTypes.func.isRequired,
  progressValue: PropTypes.number.isRequired,
  questions: PropTypes.array.isRequired,
  reset: PropTypes.func.isRequired,
  results: PropTypes.object.isRequired,
  selectAnswer: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};
