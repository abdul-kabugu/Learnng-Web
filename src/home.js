import React from "react";
import { Link } from "react-router-dom";
import Courses from "./courses";

function Home() {
  /*function toCourses(){
  <Link to='/courses'></Link>
  }*/
  return (
    <div className="home">
      <h1>
        courses as low as <span className="price">$13.99 </span>{" "}
      </h1>
      <p className="h-body">
        {" "}
        for extra 10%$13 sales prices, use plus 10 in cart ends Aug 26
      </p>
      <Link to="/courses">
        <button> go to classes </button>{" "}
      </Link>
    </div>
  );
}
export default Home;
