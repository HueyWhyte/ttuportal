const initState = {
  assessments: [],
  assessment: {},
};

const assessmentReducer = (state = initState, action) => {
  switch (action.type) {
    case "NEW_ASSESSMENT":
      return {
        ...state,
        assessment: action.payload,
      };
    case "LOAD_ASSESSMENTS":
      return {
        ...state,
        assessments: action.payload,
      };
    case "UPDATE_ASSESSMENT":
      return {
        ...state,
        assessment: action.payload,
      };
    case "DELETE_ASSESSMENT":
      return {
        ...state,
        assessments: state.assessments.filter(
          (assessment) => assessment._id !== action.payload
        ),
      };
    default:
      return state;
  }
};

export default assessmentReducer;
