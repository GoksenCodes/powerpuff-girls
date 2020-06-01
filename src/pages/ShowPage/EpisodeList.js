import React from "react";

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
    <div>
      <div>
        <table>
          <tr>
            <th>Episode</th>
            <th>Name</th>
            <th>Airdate</th>
          </tr>
          <tr>
            <td>
              {props.season}x{props.episodeNumber}
            </td>
            <td>{props.title}</td>
            <td>{airDate}</td>
          </tr>
        </table>
      </div>
    </div>
  );
}
