import { combineReducers } from "redux";
import auth from "./auth";
import news from "./news";
import message from "./message";
import result from "./result";
import payment from "./payment";
import assessment from "./assessment";

const rootReducer = combineReducers({
  news,
  auth,
  result,
  payment,
  message,
  assessment,
});

export default rootReducer;
