import { connect } from "react-redux";
import getSections from "./../selectors/sectionsSelector";
import {
  addSection,
  removeSection,
  addQuestion,
  removeQuestion,
  addSubsection,
  removeSubsection,
  addQuestionInSubsection,
  removeQuestionInSubsection
} from "./../actions/sectionsConfig";
import { start } from "./../actions/progress";
import SectionsConfig from "./../components/SectionsConfig";

const mapStateToProps = state => ({
  sections: getSections(state)
});
const mapDispatchToProps = {
  addSection,
  removeSection,
  addQuestion,
  removeQuestion,
  addSubsection,
  removeSubsection,
  addQuestionInSubsection,
  removeQuestionInSubsection,
  start
};

export default connect(mapStateToProps, mapDispatchToProps)(SectionsConfig);
