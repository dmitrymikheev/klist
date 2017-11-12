import { createSelector } from "reselect";

const selectedSectionsSelector = state => state.sections;
const currentSectionSelector = state => state.progress.currentSection;
const currentSubsectionSelector = state => state.progress.currentSubsection;
const statusSelector = state => state.progress.status;

export default createSelector(
  [
    selectedSectionsSelector,
    currentSectionSelector,
    currentSubsectionSelector,
    statusSelector
  ],
  (sections, currentSection, currentSubsection, status) => {
    const sectionsArray = Object.keys(sections);

    return {
      status,
      sections,
      sectionsArray,
      currentSubsection,
      questions: currentSubsection
        ? sections[currentSection].questions[currentSubsection]
        : sections[currentSection] && sections[currentSection].questions , //change after
      title: currentSection
    };
  }
);
