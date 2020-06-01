import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchShowDetails } from "../../store/showDetails/action";

export default function ShowPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchShowDetails());
  }, [dispatch]);

  return <div>The Powerpuff Girls</div>;
}
