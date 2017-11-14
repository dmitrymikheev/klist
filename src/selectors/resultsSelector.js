import { createSelector } from "reselect";

const resultsSelector = state => state.progress.results;
const selectedSections = state => state.progress.selectedSections;
const selectedSectionsSelector = state => state.progress.selectedSectionsArray;

export default createSelector(
  [resultsSelector, selectedSectionsSelector],
  (results, selectedSectionsArray) => {

    return {
      results,
      selectedSectionsArray: selectedSectionsArray || Object.keys(results)
    }
  }
);

const getProgressValue = createSelector(
  [selectedSections, resultsSelector],
  (selectedSections, results) => {
    const resultsArray = Object.keys(results);
    if (!selectedSections || !resultsArray.length) return 0;

    const questionsCount = Object.keys(
      selectedSections
    ).reduce((acc, currentSection) => {
      if (selectedSections[currentSection].subsections) {
        return (acc += selectedSections[
          currentSection
        ].subsections.reduce((questionsCount, currentSubsection) => {
          return (questionsCount +=
            selectedSections[currentSection].questions[currentSubsection]
              .length);
        }, 0));
      }

      return (acc += selectedSections[currentSection].questions.length);
    }, 0);

    const answeredQuestionCount = resultsArray.reduce((acc, currentSection) => {
      const subsections = results[currentSection].subsections;

      if (subsections) {
        return (acc += Object.keys(
          subsections
        ).reduce((answeredSubsectionsCount, currentSubsection) => {
          return (answeredSubsectionsCount += Object.keys(
            subsections[currentSubsection]
          ).length);
        }, 0));
      }

      return (acc += Object.keys(results[currentSection]).length);
    }, 0);

    return Math.round(answeredQuestionCount * 100 / questionsCount);
  }
);

export { getProgressValue };
