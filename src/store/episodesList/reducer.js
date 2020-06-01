import { FETCH_EPISODES_SUCCESS } from "./action";

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_EPISODES_SUCCESS:
      console.log("ACTIONPAYLOAD", action.payload);
      return [...action.payload];
    default:
      return state;
  }
};
