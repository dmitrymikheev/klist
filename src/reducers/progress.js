import progressActionTypes from "./../actionTypes/progress";

const INITIAL_STATE = {
  currentSection: null,
  currentSubsection: null,
  selectedSections: null,
  selectedSectionsArray: null,
  currentSectionIndex: 0,
  results: {},
  status: {
    started: false,
    finished: false
  }
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
      const lastSection =
        state.currentSectionIndex === state.selectedSectionsArray.length - 1;
      const lastSubsection =
        state.currentSubsection &&
        state.selectedSections[state.currentSection].subsections[1] ===
          state.currentSubsection;
      const isEnd =
        lastSubsection || !state.currentSubsection ? lastSection : false;

      if (isEnd) {
        return {
          ...state,
          status: {
            ...state.status,
            finished: true
          }
        };
      }

      let currentSection;
      let currentSubsection;
      let currentSectionIndex;
      let nextSubsections;

      if (
        state.currentSubsection &&
        state.selectedSections[state.currentSection].subsections[0] ===
          state.currentSubsection
      ) {
        currentSectionIndex = state.currentSectionIndex;
        currentSection = state.currentSection;
        currentSubsection =
          state.selectedSections[state.currentSection].subsections[1];
      } else {
        currentSectionIndex = state.currentSectionIndex + 1;
        currentSection = state.selectedSectionsArray[currentSectionIndex];
        nextSubsections = state.selectedSections[currentSection].subsections;
        currentSubsection = nextSubsections ? nextSubsections[0] : null;
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
        const answers =
          (state.results[action.section] &&
            state.results[action.section].subsections) ||
          {};
        const subsectionAnswers = answers[action.subsection] || {};

        return {
          ...state,
          results: {
            ...state.results,
            [action.section]: {
              subsections: {
                ...answers,
                [action.subsection]: {
                  ...subsectionAnswers,
                  [action.question]: action.answer
                }
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

    case progressActionTypes.RESET: {
      return INITIAL_STATE;
    }

    default:
      return state;
  }
}
