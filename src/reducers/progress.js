import progressActionTypes from "./../actionTypes/progress";
import SECTIONS from "./../constants/sections";

const INITIAL_STATE = {
  status: {
    started: false
  },
  currentSection: null,
  currentSubsection: null,
  selectedSections: null,
  selectedSectionsArray: null,
  currentSectionIndex: 0,
  results: {}
  // results: {
  // Bodies: {
  //   Chubby: "Maybe",
  //   Skinny: "Like"
  // }

  // }
};

export default function progress(state = INITIAL_STATE, action) {
  switch (action.type) {
    case progressActionTypes.START: {
      const selectedSectionsArray = Object.keys(action.sections);
      const currentSection = selectedSectionsArray[state.currentSectionIndex];
      const currentSubsection = action.sections[currentSection].subsections
        ? action.sections[currentSection].subsections[0]
        : null;

      return {
        ...state,
        selectedSections: action.sections,
        status: {
          ...state.status,
          started: true
        },
        currentSection,
        currentSubsection,
        selectedSectionsArray
      };
    }

    case progressActionTypes.SELECT_SECTION: {
      let currentSubsection = state.currentSubsection;
      let currentSectionIndex = state.currentSectionIndex + 1
      let currentSection = state.selectedSectionsArray[currentSectionIndex]
      const subsections = state.selectedSections[state.currentSection].subsections;

      if (
        currentSubsection &&
        subsections &&
        subsections[0] === currentSubsection
      ) {
        currentSubsection = subsections[1] || null;
        currentSection = state.currentSection
        currentSectionIndex = state.currentSectionIndex
      }

      return {
        ...state,
        currentSection,
        currentSubsection,
        currentSectionIndex
      };
    }

    case progressActionTypes.SELECT_ANSWER: {
      if (action.subsection) {
        const answers = state.results[action.section] || {};
        const subsectionAnswers = answers[action.subsection] || {};

        return {
          ...state,
          results: {
            ...state.results,
            [action.section]: {
              ...answers,
              hasSubsection: true,
              [action.subsection]: {
                ...subsectionAnswers,
                [action.question]: action.answer
              }
            }
          }
        };
      }

      return {
        ...state,
        results: {
          ...state.results,
          [action.section]: {
            ...state.results[action.section],
            [action.question]: action.answer
          }
        }
      };
    }
  }

  return state;
}
