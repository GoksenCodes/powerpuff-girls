import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getEpisodeDetail } from "../../store/episodeDetails/action";
import { selectEpisodeDetails } from "../../store/episodeDetails/selectors";

export default function EpisodeDetailsPage() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const episode = useSelector(selectEpisodeDetails);
  console.log("EPISODE at episodedetailpage", episode);
  const stripHtml = require("string-strip-html");
  const description = episode.summary ? stripHtml(episode.summary) : null;

  useEffect(() => {
    dispatch(getEpisodeDetail(id));
  }, [dispatch, id]);

  return (
    <div className="main">
      <h2 className="main-title">{episode.name}</h2>
      <img
        className="primary-image"
        src={
          episode.image
            ? episode.image.medium
            : "http://static.tvmaze.com/images/no-img/no-img-landscape-text.png"
        }
        alt={episode.image ? episode.title : "no image is available"}
      />

      <div className="body-text">
        <p>
          <strong>Number :</strong> Season {episode.season} Episode{" "}
          {episode.number}
        </p>
        <p>
          <strong>Runtime :</strong> {episode.runtime} minutes{" "}
        </p>
        <p>
          <strong>Episode Summary</strong>
        </p>
        <p>{description}</p>
      </div>
    </div>
  );
}
