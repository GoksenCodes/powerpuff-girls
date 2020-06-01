import reducer from "../reducer";
import { FETCH_SHOWDETAILS_SUCCESS } from "../action";

describe("showDetailsReducer", () => {
  const initialState = {};

  describe("if given no state and a random action", () => {
    test("returns the inital state", () => {
      const newState = reducer(undefined, { type: "ANY" });
      expect(newState).toEqual(initialState);
    });
  });

  describe("when given a FETCH_HOMEPAGE_SUCCESS action type", () => {
    test("returns a new state with the payload object included", () => {
      const showDetails = {};
      const action = {
        type: FETCH_SHOWDETAILS_SUCCESS,
        payload: showDetails
      };
      const newState = reducer(initialState, action);
      expect(newState).toEqual(showDetails);
    });
  });
});
