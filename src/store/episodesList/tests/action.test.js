import axios from "axios";

import {
  FETCH_EPISODES_SUCCESS,
  fetchEpisodesSuccess,
  fetchEpisodes
} from "../action";

jest.mock("axios");

describe("#fetchEpisodesSuccess", () => {
  describe("if given an array of episodes", () => {
    test("should return an action object", () => {
      const episodesList = [{}, {}];
      const expected = {
        type: FETCH_EPISODES_SUCCESS,
        payload: episodesList
      };

      const action = fetchEpisodesSuccess(episodesList);

      expect(action).toEqual(expected);
    });
    test("the payload of whats returned should have the same length as the episodes array", () => {
      const episodesList = [{}, {}];
      const action = fetchEpisodesSuccess(episodesList);
      expect(action.payload).toHaveLength(episodesList.length);
    });
  });
});

describe("#fetchEpisodes", () => {
  describe("when called", () => {
    test("should dispatch an action FETCH_EPISODES_SUCCESS", async () => {
      const fakeEpisodes = [{}, {}];
      const response = { data: [{}, {}] };
      axios.get.mockImplementationOnce(() => Promise.resolve(response));
      const dispatch = jest.fn();
      const getState = jest.fn().mockReturnValueOnce({ episodes: [] });
      await fetchEpisodes()(dispatch, getState);
      expect(dispatch).toHaveBeenCalledWith(fetchEpisodesSuccess(fakeEpisodes));
    });
  });
});
