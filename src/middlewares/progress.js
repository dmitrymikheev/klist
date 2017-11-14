export default store => next => action => {
  next(action);

  const state = store.getState();

  localStorage.setItem("state", JSON.stringify(state));
};
