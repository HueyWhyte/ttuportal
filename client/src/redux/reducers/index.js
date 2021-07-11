import { combineReducers } from "redux";
import auth from "./auth";
import news from "./news";
import message from "./message";
import result from "./result";
import payment from "./payment";

const rootReducer = combineReducers({
  auth,
  payment,
  message,
  result,
  news,
});

export default rootReducer;
