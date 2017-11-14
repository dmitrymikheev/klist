import SECTIONS from "../constants/sections";
import sectionsConfigActionTypes from "./../actionTypes/sectionsConfig";
import progressActionTypes from "./../actionTypes/progress";

const INITIAL_STATE = SECTIONS;

export default function sections(state = INITIAL_STATE, action) {
  switch (action.type) {
    case sectionsConfigActionTypes.ADD_SECTION: {
      return {
        ...state,
        [action.section]: SECTIONS[action.section]
      };
    }

    case sectionsConfigActionTypes.REMOVE_SECTION: {
      const { [action.section]: section, ...rest } = state;

      return rest;
    }

    case sectionsConfigActionTypes.ADD_QUESTION: {
      const section = state[action.section];
      const questions = section ? section.questions : [];

      return {
        ...state,
        [action.section]: {
          questions: [...questions, action.question]
        }
      };
    }

    case sectionsConfigActionTypes.ADD_QUESTION_IN_SUBSECTION: {
      const section = state[action.section];
      const questions = section
        ? section.questions[action.subsection] || []
        : [];
      const subsection = section ? state[action.section].questions : {};

      return {
        ...state,
        [action.section]: {
          ...state[action.section],
          questions: {
            ...subsection,
            [action.subsection]: [...questions, action.question]
          }
        }
      };
    }

    case sectionsConfigActionTypes.REMOVE_QUESTION: {
      const section = state[action.section];
      const questions = section ? section.questions : [];
      const filteredQuestions = questions.filter(
        question => question !== action.question
      );
      const { [action.section]: selected, ...rest } = state;

      return filteredQuestions.length
        ? {
            ...state,
            [action.section]: {
              questions: filteredQuestions
            }
          }
        : rest;
    }

    case sectionsConfigActionTypes.REMOVE_QUESTION_IN_SUBSECTION: {
      const section = state[action.section];
      const questions = section ? section.questions[action.subsection] : [];
      const filteredQuestions = questions.filter(
        question => question !== action.question
      );
      const { [action.subsection]: subsection, ...restSubsection } = state[
        action.section
      ].questions;

      if (!filteredQuestions.length && !Object.keys(restSubsection).length) {
        const { [action.section]: section, ...rest } = state;

        return rest;
      }

      if (!filteredQuestions.length) {
        return {
          ...state,
          [action.section]: {
            ...state[action.section],
            questions: restSubsection
          }
        };
      }

      return {
        ...state,
        [action.section]: {
          ...state[action.section],
          questions: {
            ...state[action.section].questions,
            [action.subsection]: filteredQuestions
          }
        }
      };
    }

    case sectionsConfigActionTypes.ADD_SUBSECTION: {
      const section = state[action.section];
      const questions = section ? section.questions : {};

      return {
        ...state,
        [action.section]: {
          ...section,
          questions: {
            ...questions,
            [action.subsection]:
              SECTIONS[action.section].questions[action.subsection]
          }
        }
      };
    }

    case sectionsConfigActionTypes.REMOVE_SUBSECTION: {
      const { [action.subsection]: subsection, ...rest } = state[
        action.section
      ].questions;
      const { [action.section]: section, ...restSections } = state;
      const isEmpty = !Object.keys(rest).length;

      return isEmpty
        ? restSections
        : {
            ...state,
            [action.section]: {
              ...state[action.section],
              questions: rest
            }
          };
    }

    case progressActionTypes.RESET: {
      return INITIAL_STATE;
    }
  }

  return state;
}
