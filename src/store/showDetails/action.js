import axios from "axios";

export const FETCH_SHOWDETAILS_SUCCESS = "FETCH_SHOWDETAILS_SUCCESS";

export const fetchShowDetails = () => {
  return async (dispatch, getState) => {
    const response = await axios.get("http://api.tvmaze.com/shows/6771");
    console.log(response.data);
    dispatch({ type: "FETCH_SHOWDETAILS_SUCCESS", payload: response.data });
  };
};
