export const saveStateToLocalStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('todoList', serializedState);
  } catch (error) {
    console.error("Could not save state", error);
  }
};

export const loadStateFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem('todoList');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (error) {
    console.error("Could not load state", error);
    return undefined;
  }
};
