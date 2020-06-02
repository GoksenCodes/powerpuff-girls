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
  console.log("show details at showpage", showDetails);
  const stripHtml = require("string-strip-html");
  const description = showDetails.summary
    ? stripHtml(showDetails.summary)
    : null;

  const episodes = useSelector(selectEpisodes);
  console.log("episodes at showpage", episodes);

  const allEpisodes = episodes.sort(function(a, b) {
    a = new Date(a.airdate);
    b = new Date(b.airdate);
    return a > b ? -1 : a < b ? 1 : 0;
  });

  const lastEpisodes = allEpisodes.slice(0, 3);
  console.log("LAST3 EPISODES", lastEpisodes);

  console.log("ALL EPISODES IN ORDER", allEpisodes);

  const [toggle, setToggle] = useState(false);

  const clickHandler = () => {
    console.log("VIEW FULL EPISODE LIST CLIKCED!");
    setToggle(!toggle);
  };

  useEffect(() => {
    dispatch(fetchShowDetails());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchEpisodes());
  }, [showDetails]);

  return (
    <div className="main">
      <h1 className="main-title">{showDetails.name}</h1>
      <img
        className="primary-image"
        src={showDetails.image ? showDetails.image.medium : null}
        alt={showDetails.title}
      />
      <div className="body-text">{description}</div>
      <div className="table">
        <h2>Previous Episodes</h2>
        <div>
          <table>
            <tr>
              <th>Episode</th>
              <th>Name</th>
              <th>Airdate</th>
            </tr>
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
