import React from "react";
import coursesData from "./coursesData";
import { Link } from "react-router-dom";

function Courses() {
  const allCourses = coursesData.map((course) => {
    return (
      <div className="c-container" key={course.id}>
        <div className="c-img">
          <p className="img-title"> course image here</p>
        </div>
        <h3 className="c-name"> {course.name} </h3>
        <p className="c-sudents"> {course.students} </p>
        <Link to={`/allCourses/${course.id}`}>
          <button>enroll now </button>
        </Link>
      </div>
    );
  });

  return (
    <div className="courses">
      <h1> it and software courses </h1>
      <div className="container">{allCourses}</div>
    </div>
  );
}

export default Courses;
