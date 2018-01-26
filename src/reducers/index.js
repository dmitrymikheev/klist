import { combineReducers } from 'redux';
import sectionsConfig from './sectionsConfig';
import progress from './progress';

export default combineReducers({
  sectionsConfig,
  progress,
});
