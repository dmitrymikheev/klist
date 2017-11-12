import { connect } from "react-redux";
import Progress from "./../components/Progress";
import getProgress from "./../selectors/progressSelector";
import getResults from "./../selectors/resultsSelector";
import { selectSection, selectAnswer, goToNextQuestion } from "./../actions/progress";

const mapStateToProps = state => ({
  progress: getProgress(state),
  results: getResults(state)
});
const mapDispatchToProps = {
  selectSection,
  selectAnswer,
  goToNextQuestion
};

export default connect(mapStateToProps, mapDispatchToProps)(Progress);
