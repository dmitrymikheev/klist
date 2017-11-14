import { connect } from "react-redux";

import resultsSelector from "./../selectors/resultsSelector";
import { reset } from "./../actions/progress";

import Results from "./../components/Results";

const mapStateToProps = state => ({
  results: resultsSelector(state)
});
const mapDispatchToProps = {
  reset
}

export default connect(mapStateToProps, mapDispatchToProps)(Results);
