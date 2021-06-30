import { combineReducers } from "redux";
import auth from "./auth";
import error from "./error";
import result from "./result";
import payment from "./payment";

const rootReducer = combineReducers({ auth, payment, error, result });

export default rootReducer;
