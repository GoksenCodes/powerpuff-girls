import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchShowDetails } from "../../store/showDetails/action";
import { selectShowDetails } from "../../store/showDetails/selectors";

import EpisodeList from "./EpisodeList";
import { selectEpisodes } from "../../store/episodesList/selectors";
import { fetchEpisodes } from "../../store/episodesList/action";

export default function ShowPage() {
  const dispatch = useDispatch();
  const showDetails = useSelector(selectShowDetails);

  const stripHtml = require("string-strip-html");
  const description = showDetails.summary
    ? stripHtml(showDetails.summary)
    : null;

  const episodes = useSelector(selectEpisodes);

  const allEpisodes = episodes.sort(function(a, b) {
    a = a.id;
    b = b.id;
    return a > b ? -1 : a < b ? 1 : 0;
  });

  const seasonThreeEpisodes = episodes.filter(episode => episode.season === 3);

  const lastEpisodesNoOrder = seasonThreeEpisodes.slice(0, 4);

  const lastEpisodes = lastEpisodesNoOrder.sort(function(a, b) {
    a = a.number;
    b = b.number;
    return a > b ? -1 : a < b ? 1 : 0;
  });

  const [toggle, setToggle] = useState(false);

  const clickHandler = () => {
    setToggle(!toggle);
  };

  useEffect(() => {
    dispatch(fetchShowDetails());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchEpisodes());
  }, [dispatch, showDetails]);

  return (
    <div className="main">
      <h1 className="main-title">{showDetails.name}</h1>
      <img
        className="primary-image"
        src={showDetails.image ? showDetails.image.medium : null}
        alt={showDetails.title}
      />
      <div className="body-text">
        <p>
          <strong>About the Show</strong>
        </p>
        <p>{description}</p>
      </div>
      <div className="table">
        <h2>Previous Episodes</h2>
        <div>
          <table>
            <thead>
              <tr>
                <th>Episode</th>
                <th>Name</th>
                <th>Airdate</th>
              </tr>
            </thead>
            <tbody>
              {toggle
                ? allEpisodes.map((episode, num) => {
                    return (
                      <EpisodeList
                        key={num}
                        id={episode.id}
                        season={episode.season}
                        episodeNumber={episode.number}
                        airDate={episode.airdate}
                        title={episode.name}
                      />
                    );
                  })
                : lastEpisodes.map((episode, num) => {
                    return (
                      <EpisodeList
                        key={num}
                        id={episode.id}
                        season={episode.season}
                        episodeNumber={episode.number}
                        airDate={episode.airdate}
                        title={episode.name}
                      />
                    );
                  })}
            </tbody>
          </table>
        </div>
      </div>
      <div>
        <button className="primary-button" onClick={clickHandler}>
          {!toggle ? "View full episode list" : "Show less"}
        </button>
      </div>
    </div>
  );
}
