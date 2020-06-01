import axios from "axios";

function fetchShowDetailsSuccess(data) {
  return { type: "FETCHED_SHOWDETAILS_SUCCESS", payload: data };
}

export function fetchShowDetails() {
  return async function(dispatch, getState) {
    const response = await axios.get("http://api.tvmaze.com/shows/6771");

    console.log(response);
    const action = fetchShowDetailsSuccess(response.data);
    dispatch(action);
  };
}
