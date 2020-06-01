import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchShowDetails } from "../../store/showDetails/action";
import { selectShowDetails } from "../../store/showDetails/selectors";
import ShowDetails from "../../components/ShowDetails";

export default function ShowPage() {
  const dispatch = useDispatch();
  const showDetails = useSelector(selectShowDetails);
  console.log("show details at showpage", showDetails);
  useEffect(() => {
    dispatch(fetchShowDetails());
  }, [dispatch]);

  return (
    <div>
      <ShowDetails
        id={showDetails.id}
        title={showDetails.name}
        description={showDetails.summary}
        image={showDetails.image ? showDetails.image.medium : null}
      />
    </div>
  );
}
