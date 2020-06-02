import axios from "axios";

import {
  GET_EPISODE_SUCCESS,
  getEpisodeSuccess,
  getEpisodeDetail
} from "../action";

jest.mock("axios");

describe("#getEpisodeSuccess", () => {
  describe("if given an object of an episode ", () => {
    test("should return an action object", () => {
      const episodeDetails = {};
      const expected = {
        type: GET_EPISODE_SUCCESS,
        payload: episodeDetails
      };

      const action = getEpisodeSuccess(episodeDetails);

      expect(action).toEqual(expected);
    });
  });
});

describe("#getEpisodeDetail", () => {
  describe("when called", () => {
    test("should dispatch an action GET_EPISODE_SUCCESS", async () => {
      const fakeEpisodeDetails = {};
      const response = { data: {} };
      axios.get.mockImplementationOnce(() => Promise.resolve(response));
      const dispatch = jest.fn();
      const getState = jest.fn().mockReturnValueOnce({ episodeDetails: {} });
      await getEpisodeDetail()(dispatch, getState);
      expect(dispatch).toHaveBeenCalledWith(
        getEpisodeSuccess(fakeEpisodeDetails)
      );
    });
  });
});
