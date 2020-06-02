import reducer from "../reducer";
import { GET_EPISODE_SUCCESS } from "../action";

describe("episodeDetailsReducer", () => {
  const initialState = {};

  describe("if given no state and a random action", () => {
    test("returns the inital state", () => {
      const newState = reducer(undefined, { type: "ANY" });
      expect(newState).toEqual(initialState);
    });
  });

  describe("when given a GET_EPISODE_SUCCESS action type", () => {
    test("returns a new state with the payload object included", () => {
      const episodeDetails = {};
      const action = {
        type: GET_EPISODE_SUCCESS,
        payload: episodeDetails
      };
      const newState = reducer(initialState, action);
      expect(newState).toEqual(episodeDetails);
    });
  });
});
