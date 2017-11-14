import progressActionTypes from "./../actionTypes/progress";

export default store => next => action => {
  if (progressActionTypes.RESET) {
    window.history.replaceState(undefined, undefined, '/');
  }

  next(action);

  const state = store.getState();

  localStorage.setItem("state", JSON.stringify(state));

  if (store.getState().progress.status.finished) {
    const state = JSON.stringify(store.getState());
    const base64 = btoa(state);

    window.history.replaceState(undefined, undefined, "#result="+btoa(state))
  }
};
