import { combineReducers } from 'redux';
import sections from './sections'
import progress from './progress'

export default combineReducers({
  sections,
  progress
})
