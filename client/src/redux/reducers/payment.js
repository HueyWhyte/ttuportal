const initState = {
  payments: [],
  payment: {},
};

const paymentReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOAD_PAYMENTS":
      return {
        ...state,
        payments: action.payload,
      };
    case "LOAD_PAYMENT":
      return {
        ...state,
        payment: action.payload,
      };
    default:
      return state;
  }
};

export default paymentReducer;
