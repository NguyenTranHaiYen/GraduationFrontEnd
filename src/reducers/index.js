import { combineReducers } from "redux";
import auth from "./auth";
import message from "./message";
import mainRecucer from './mainReducer';

export default combineReducers({
  auth,
  message,
  mainRecucer
});
