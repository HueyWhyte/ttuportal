import { combineReducers } from "redux";
import auth from "./auth";
import news from "./news";
import error from "./error";
import result from "./result";
import payment from "./payment";

const rootReducer = combineReducers({
  auth,
  payment,
  error,
  result,
  news,
});

export default rootReducer;
