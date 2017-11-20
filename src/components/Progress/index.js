import React from "react";
import PropTypes from "prop-types";

import SectionsConfigContainer from "./../../containers/SectionsConfigContainer";
import ResultsContainer from "./../../containers/ResultsContainer";
import Questions from "./../Questions";

export default class Progress extends React.PureComponent {
  render() {
    if (this.props.progress.status.finished) {
      return <ResultsContainer />;
    }

    if (!this.props.progress.status.started) {
      return <SectionsConfigContainer />;
    }

    return (
      <Questions
        questions={this.props.progress.questions}
        currentSubsection={this.props.progress.currentSubsection}
        progressValue={this.props.progressValue}
        reset={this.props.reset}
        title={this.props.progress.title}
        selectAnswer={this.props.selectAnswer}
        results={this.props.results.results}
        goToNextQuestion={this.props.selectSection}
      />
    );
  }
}

Progress.propTypes = {
  goToNextQuestion: PropTypes.func.isRequired,
  progress: PropTypes.object.isRequired,
  progressValue: PropTypes.number.isRequired,
  reset: PropTypes.func.isRequired,
  results: PropTypes.object.isRequired,
  selectAnswer: PropTypes.func.isRequired,
  selectSection: PropTypes.func.isRequired
};
