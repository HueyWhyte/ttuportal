const initState = {
  results: [],
  result: {},
};

const resultReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOAD_RESULTS":
      return {
        ...state,
        results: action.payload,
      };
    case "LOAD_RESULT":
      return {
        ...state,
        result: action.payload,
      };
    default:
      return state;
  }
};

export default resultReducer;
