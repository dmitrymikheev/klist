import React from "react";

import SectionsConfigContainer from "./../../containers/SectionsConfigContainer";
import ResultsContainer from "./../../containers/ResultsContainer";
import Questions from "./../Questions";

export default class Progress extends React.PureComponent {
  goToNextQuestion = () => {
    this.props.selectSection();
  };

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
        goToNextQuestion={this.goToNextQuestion}
      />
    );
  }
}
