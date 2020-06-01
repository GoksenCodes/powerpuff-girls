import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchShowDetails } from "../../store/showDetails/action";
import { selectShowDetails } from "../../store/showDetails/selectors";

export default function ShowPage() {
  const dispatch = useDispatch();
  const showDetails = useSelector(selectShowDetails);
  console.log("show details at showpage", showDetails);
  const stripHtml = require("string-strip-html");
  const description = showDetails.summary
    ? stripHtml(showDetails.summary)
    : null;

  useEffect(() => {
    dispatch(fetchShowDetails());
  }, [dispatch]);

  return (
    <div>
      <h1>{showDetails.name}</h1>
      <div>
        <div>
          <img
            src={showDetails.image ? showDetails.image.medium : null}
            alt={showDetails.title}
          />
        </div>
        <div>{description}</div>
      </div>
    </div>
  );
}
