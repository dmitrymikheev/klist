import { connect } from 'react-redux';
import setOption from './../actions/sectionsConfig';
import { start } from './../actions/progress';
import SectionsConfig from './../components/SectionsConfig';

const mapStateToProps = state => ({
  selectedOption: state.sectionsConfig.selectedOption,
});
const mapDispatchToProps = {
  setOption,
  start,
};

export default connect(mapStateToProps, mapDispatchToProps)(SectionsConfig);
