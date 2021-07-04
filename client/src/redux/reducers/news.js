let initailState = {
  allNews: [],
  news: {},
};

const newsReucer = (state = initailState, action) => {
  switch (action.type) {
    case "GET_ALL_NEWS":
      return {
        ...state,
        allNews: action.payload,
      };
    case "GET_NEWS":
      return {
        ...state,
        news: action.payload,
      };
    default:
      return state;
  }
};
export default newsReucer;
