import { connect } from "react-redux";

import resultsSelector from "./../selectors/resultsSelector";

import Results from "./../components/Results";

const mapStateToProps = state => ({
  results: resultsSelector(state)
});

export default connect(mapStateToProps)(Results);
