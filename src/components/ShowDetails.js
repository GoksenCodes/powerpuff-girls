import React from "react";
import { Link } from "react-router-dom";
import stripHtml from "string-strip-html";

export default function showDetails(props) {
  const stripHtml = require("string-strip-html");
  const description = props.description ? stripHtml(props.description) : null;
  console.log(description);

  return (
    <div>
      <h1>{props.title}</h1>
      <div>
        <img src={props.image} alt={props.title} />
      </div>
      {description}
    </div>
  );
}
