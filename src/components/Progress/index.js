import React from "react";

import SectionsConfigContainer from "./../../containers/SectionsConfigContainer";
import Questions from "./../Questions";

export default class Progress extends React.PureComponent {
  componentWillMount() {
    // if (!this.props.currentSection) {
    //   this.props.selectSection(this.props.progress.sectionsArray[0]);
    // }
  }

  goToNextQuestion = () => {
    this.props.selectSection(
      this.props.progress.sectionsArray[this.currentQuestionIndex]
    );
  };

  render() {
    if (!this.props.progress.status.started) {
      return <SectionsConfigContainer />;
    }

    return (
      <Questions
        questions={this.props.progress.questions}
        currentSubsection={this.props.progress.currentSubsection}
        title={this.props.progress.title}
        selectAnswer={this.props.selectAnswer}
        results={this.props.results}
        goToNextQuestion={this.goToNextQuestion}
      />
    );
  }
}
