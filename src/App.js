import "./styles.css";
import Home from "./home";
import Courses from "./courses";
import { Link, Switch, Route } from "react-router-dom";
import CoursesDetails from "./coursesDetails";

export default function App() {
  return (
    <div className="App">
      <Link to="/">
        <button>home </button>
      </Link>
      <Link to="/Courses">
        <button> courses </button>
      </Link>

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/courses">
          <Courses />
        </Route>
        <Route path="/allcourses/:serviceData">
          <CoursesDetails />
        </Route>
      </Switch>
    </div>
  );
}
