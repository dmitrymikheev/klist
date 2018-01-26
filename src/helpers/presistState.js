const getPresistStateFromStorage = () => {
  try {
    const state = localStorage.getItem('state');

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
  const hashResults = window.location.hash.replace('#result=', '');

  if (hashResults.length) {
    const results = JSON.parse(atob(hashResults));

    return {
      progress: {
        results,
        status: {
          finished: true,
        },
      },
    };
  }

  if (state) {
    return state;
  }

  return undefined;
};
