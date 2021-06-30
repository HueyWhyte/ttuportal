const initState = {
  code: null,
  message: null,
};

const errorReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOAD_ERROR":
      return {
        ...state,
        code: action.payload,
      };
    case "CLEAR_ERROR":
      return {
        ...state,
        code: action.payload,
      };
    default:
      return state;
  }
};

export default errorReducer;
