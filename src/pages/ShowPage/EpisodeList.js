import React from "react";
import { NavLink } from "react-router-dom";

export default function EpisodeList(props) {
  const originalDate = props.airDate;
  const date = new Date(originalDate);
  const dateTimeFormat = new Intl.DateTimeFormat("en", {
    year: "numeric",
    month: "short",
    day: "2-digit"
  });
  const [
    { value: month },
    ,
    { value: day },
    ,
    { value: year }
  ] = dateTimeFormat.formatToParts(date);
  const airDate = `${month} ${day}, ${year}`;

  return (
    <tr>
      <td>
        {props.season}x{props.episodeNumber}
      </td>
      <td>
        <NavLink to={`/episodes/${props.id}`} exact={true}>
          {props.title}
        </NavLink>
      </td>
      <td>{airDate}</td>
    </tr>
  );
}
