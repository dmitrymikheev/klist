import actionTypes from "./../actionTypes/sectionsConfig";

export const addSection = section => ({
  type: actionTypes.ADD_SECTION,
  section
});

export const removeSection = section => ({
  type: actionTypes.REMOVE_SECTION,
  section
});

export const addQuestion = ({ section, question }) => ({
  type: actionTypes.ADD_QUESTION,
  section,
  question
});

export const removeQuestion = ({ section, question }) => ({
  type: actionTypes.REMOVE_QUESTION,
  section,
  question
});

export const addQuestionInSubsection = ({ section, question, subsection }) => ({
  type: actionTypes.ADD_QUESTION_IN_SUBSECTION,
  section,
  question,
  subsection
});

export const removeQuestionInSubsection = ({
  section,
  question,
  subsection
}) => ({
  type: actionTypes.REMOVE_QUESTION_IN_SUBSECTION,
  section,
  question,
  subsection
});

export const addSubsection = ({ section, subsection }) => ({
  type: actionTypes.ADD_SUBSECTION,
  section,
  subsection
});

export const removeSubsection = ({ section, subsection }) => ({
  type: actionTypes.REMOVE_SUBSECTION,
  section,
  subsection
});
