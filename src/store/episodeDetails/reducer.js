import { GET_EPISODE_SUCCESS } from "./action";

const initialState = {};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_EPISODE_SUCCESS:
      return { ...state, ...payload };

    default:
      return state;
  }
};
