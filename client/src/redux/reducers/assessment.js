const initState = {
  payments: [],
  payment: {},
};

const paymentReducer = (state = initState, action) => {
  switch (action.type) {
    case "NEW_ASSESSMENT":
      return {
        ...state,
        payments: action.payload,
      };
    case "UPDATE_ASSESSMENT":
      return {
        ...state,
        payment: action.payload,
      };
    default:
      return state;
  }
};

export default paymentReducer;
