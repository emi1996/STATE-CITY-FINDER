import React from "react";
import { useLocation } from "react-router-dom";

const Result = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const selectedCityName = searchParams.get("selectedCityName");
  const selectedStateName = searchParams.get("selectedStateName");

  return (
    <div>
      <h1>You Have selected {selectedCityName}, {selectedStateName}</h1>
    </div>
  );
};

export default Result;
