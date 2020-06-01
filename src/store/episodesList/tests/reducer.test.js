import reducer from "../reducer";
import { FETCH_EPISODES_SUCCESS } from "../action";

describe("homepageReducer", () => {
  const initialState = [];

  describe("if given no state and a random action", () => {
    test("returns the inital state", () => {
      const newState = reducer(undefined, { type: "ANY" });
      expect(newState).toEqual(initialState);
    });
  });

  describe("when given a FETCH_HOMEPAGE_SUCCESS action type", () => {
    test("returns a new state with the payload array included", () => {
      const episodes = [{}, {}];
      const action = { type: FETCH_EPISODES_SUCCESS, payload: episodes };
      const newState = reducer(initialState, action);
      expect(newState).toHaveLength(episodes.length);
      expect(newState).toEqual(episodes);
    });
  });
});
