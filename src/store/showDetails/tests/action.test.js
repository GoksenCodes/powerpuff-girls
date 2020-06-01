import axios from "axios";

import {
  FETCH_SHOWDETAILS_SUCCESS,
  fetchShowDetailsSuccess,
  fetchShowDetails
} from "../action";

jest.mock("axios");

describe("#fetchShowDetailsSuccess", () => {
  describe("if given an object of a show", () => {
    test("should return an action object", () => {
      const showDetails = {};
      const expected = {
        type: FETCH_SHOWDETAILS_SUCCESS,
        payload: showDetails
      };

      const action = fetchShowDetailsSuccess(showDetails);

      expect(action).toEqual(expected);
    });
  });
});

describe("#fetchShowDetails", () => {
  describe("when called", () => {
    test("should dispatch an action FETCH_SHOWDETAILS_SUCCESS", async () => {
      const fakeShowDetails = {};
      const response = { data: {} };
      axios.get.mockImplementationOnce(() => Promise.resolve(response));
      const dispatch = jest.fn();
      const getState = jest.fn().mockReturnValueOnce({ showDetails: {} });
      await fetchShowDetails()(dispatch, getState);
      expect(dispatch).toHaveBeenCalledWith(
        fetchShowDetailsSuccess(fakeShowDetails)
      );
    });
  });
});
