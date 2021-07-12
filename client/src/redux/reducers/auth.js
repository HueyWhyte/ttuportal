let initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: false,
  isLoading: false,
  student: {},
  mates: [],
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "USER_LOADING":
      return {
        ...state,
        isAuthenticated: false,
        isLoading: true,
      };
    case "USER_LOADED":
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        student: action.payload,
      };
    case "LOAD_MATES":
      return {
        ...state,
        mates: action.payload,
      };
    case "LOGIN":
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        student: action.payload.student,
        token: action.payload.token,
      };
    case "REGISTER":
      return {
        ...state,
        // student: action.payload,
      };
    case "UPDATE":
      return {
        ...state,
        // student: action.payload,
      };
    case "LOGOUT":
      localStorage.removeItem("token");
      return {
        ...state,
        user: false,
        isAuthenticated: false,
      };
    default:
      return state;
  }
};

export default authReducer;
