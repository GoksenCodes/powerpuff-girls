import axios from "axios";
import { apiUrl } from "../../config/constants";

export const FETCH_EPISODES_SUCCESS = "FETCH_EPISODES_SUCCESS";

export const fetchEpisodesSuccess = episodes => ({
  type: FETCH_EPISODES_SUCCESS,
  payload: episodes
});

export const fetchEpisodes = () => {
  return async (dispatch, getState) => {
    const response = await axios.get(`${apiUrl}/episodes`);

    dispatch(fetchEpisodesSuccess(response.data));
  };
};
