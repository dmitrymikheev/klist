import { connect } from "react-redux";
import Progress from "./../components/Progress";
import getProgress from "./../selectors/progressSelector";
import getResults, { getProgressValue } from "./../selectors/resultsSelector";
import {
  selectSection,
  selectAnswer,
  goToNextQuestion,
  reset
} from "./../actions/progress";

const mapStateToProps = state => ({
  progress: getProgress(state),
  results: getResults(state),
  progressValue: getProgressValue(state)
});
const mapDispatchToProps = {
  selectSection,
  selectAnswer,
  goToNextQuestion,
  reset
};

export default connect(mapStateToProps, mapDispatchToProps)(Progress);
