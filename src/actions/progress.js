import actionTypes from "./../actionTypes/progress";

export const start = sections => ({
  type: actionTypes.START,
  sections
});

export const selectSection = section => ({
  type: actionTypes.SELECT_SECTION,
  section
});

export const selectAnswer = ({ section, subsection, question, answer }) => ({
  type: actionTypes.SELECT_ANSWER,
  section,
  subsection,
  question,
  answer
});

export const goToNextQuestion = () => ({
  type: actionTypes.NEXT_QUESTION
})
