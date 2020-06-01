import { FETCH_SHOWDETAILS_SUCCESS } from "./action";

const initialState = {};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_SHOWDETAILS_SUCCESS:
      return { ...state, ...payload };

    default:
      return state;
  }
};
