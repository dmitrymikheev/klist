import sectionsConfigActionTypes from '../actionTypes/sectionsConfig';
import progressActionTypes from '../actionTypes/progress';
import CONFIG_OPTIONS from '../constants/configOptions';

const INITIAL_STATE = {
  selectedOption: CONFIG_OPTIONS.ALL,
};

export default function sectionsConfig(state = INITIAL_STATE, action) {
  switch (action.type) {
    case sectionsConfigActionTypes.SET_OPTION: {
      return {
        selectedOption: action.selectedOption,
      };
    }
    case progressActionTypes.RESET: {
      return INITIAL_STATE;
    }

    default:
      return state;
  }
}
