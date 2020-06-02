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
    <div>
      <div>
        <h2>{episode.name}</h2>
        <div>
          <img
            src={episode.image ? episode.image.medium : null}
            alt={episode.image ? episode.title : null}
          />
        </div>

        <div>{description}</div>
      </div>
    </div>
  );
}
