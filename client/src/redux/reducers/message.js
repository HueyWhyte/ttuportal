const initState = {
  code: "",
  message: "",
};

const errorReducer = (state = initState, action) => {
  switch (action.type) {
    case "SUCCESS":
      return {
        ...state,
        code: action.payload.status,
        message: action.payload.data?.message,
      };
    case "ERROR":
      return {
        ...state,
        code: action.payload.status,
        message: action.payload.data?.message,
      };
    case "CLEAR":
      return {
        ...state,
        code: "",
        message: "",
      };
    default:
      return state;
  }
};

export default errorReducer;
