import { createSelector } from "reselect";

const resultsSelector = state => state.progress.results;

export default createSelector([resultsSelector], results => results);
