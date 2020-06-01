import { combineReducers } from "redux";
import appState from "./appState/reducer";
import showDetails from "./showDetails/reducer";

export default combineReducers({
  appState,
  showDetails
});
