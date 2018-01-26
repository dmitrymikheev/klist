import actionTypes from './../actionTypes/sectionsConfig';

const setOption = selectedOption => ({
  type: actionTypes.SET_OPTION,
  selectedOption,
});

export default setOption;
