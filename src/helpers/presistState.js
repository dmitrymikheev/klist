const getPresistStateFromStorage = () => {
  try {
    const state = localStorage.getItem("state");

    if (!state) {
      return undefined;
    }

    return JSON.parse(state);
  } catch (e) {
    return undefined;
  }
};

export default () => {
  const state = getPresistStateFromStorage();
  const hashResults = window.location.hash.replace("#result=", "");

  if (state) {
    return state;
  }

  if (hashResults.length) {
    return JSON.parse(atob(hashResults));
  }

  return undefined;
};
