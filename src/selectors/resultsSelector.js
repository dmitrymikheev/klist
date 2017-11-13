import { createSelector } from "reselect";

const resultsSelector = state => state.progress.results;
const selectedSectionsSelector = state => state.progress.selectedSectionsArray;

export default createSelector(
  [resultsSelector, selectedSectionsSelector],
  (results, selectedSectionsArray) => ({
    results,
    selectedSectionsArray
  })
);
