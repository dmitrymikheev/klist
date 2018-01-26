import progressActionTypes from './../actionTypes/progress';

export default store => next => (action) => {
  if (action.type === progressActionTypes.RESET) {
    window.history.replaceState(undefined, undefined, '/');
  }

  next(action);

  const state = store.getState();

  localStorage.setItem('state', JSON.stringify(state));

  if (store.getState().progress.status.finished) {
    const results = JSON.stringify(store.getState().progress.results);

    window.history.replaceState(undefined, undefined, `#result=${btoa(results)}`);
  }
};
