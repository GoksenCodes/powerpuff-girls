import { combineReducers } from "redux";
import appState from "./appState/reducer";
import showDetails from "./showDetails/reducer";
import episodesList from "./episodesList/reducer";
import episodeDetails from "./episodeDetails/reducer";

export default combineReducers({
  appState,
  showDetails,
  episodesList,
  episodeDetails
});
