import { useDispatch, useSelector } from "react-redux";
import { apiUrl } from "../../config/constants";
import axios from "axios";

export const GET_EPISODE_SUCCESS = "GET_EPISODE_SUCCESS";

export const getEpisodeSuccess = episode => ({
  type: GET_EPISODE_SUCCESS,
  payload: episode
});

export const getEpisodeDetail = id => {
  return async (dispatch, getState) => {
    const response = await axios.get(`http://api.tvmaze.com/episodes/${id}`);
    console.log(response.data);
    dispatch(getEpisodeSuccess(response.data));
  };
};
