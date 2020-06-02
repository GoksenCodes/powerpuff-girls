import axios from "axios";
import { apiUrl } from "../../config/constants";

export const FETCH_SHOWDETAILS_SUCCESS = "FETCH_SHOWDETAILS_SUCCESS";

export const fetchShowDetailsSuccess = showDetails => ({
  type: FETCH_SHOWDETAILS_SUCCESS,
  payload: showDetails
});

export const fetchShowDetails = () => {
  return async (dispatch, getState) => {
    const response = await axios.get(`${apiUrl}`);
    dispatch(fetchShowDetailsSuccess(response.data));
  };
};
