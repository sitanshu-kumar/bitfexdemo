import { combineReducers } from "redux";
import ping from "./notification";
import admin from "./user";

const rootReducer = combineReducers({
  user: admin,
  notify: ping,
});

export default rootReducer;
