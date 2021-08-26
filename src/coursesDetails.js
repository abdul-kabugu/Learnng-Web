import React from "react";
import { useParams } from "react-router-dom";
import coursesData from "./coursesData";

function CoursesDetails(props) {
  const { serviceData } = useParams();

  const thisService = coursesData.find((data) => data.id === serviceData);

  return (
    <div>
      <h1> its courses details page </h1>
      <div className="s-container">
        <p className="s-name">{thisService.name}</p>
        <p className="s-desc">{thisService.description}</p>
        <p className="s-update">{thisService.updated} </p>
        <p className="s-languege">{thisService.languege}</p>
        <button>add to cart </button>
      </div>
    </div>
  );
}
export default CoursesDetails;
