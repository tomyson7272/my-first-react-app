const ActionTypes = {
  Add: "increment",
  Subtract: "decrement",
  Reset: "reset",
};

const countReducer = (state, action) => {
  switch (action.type) {
    case ActionTypes.Add:
      return state + 1;
    case ActionTypes.Subtract:
      return state - 1;
    case ActionTypes.Reset:
      return 0;
    default:
      return state;
  }
};

export default countReducer;
