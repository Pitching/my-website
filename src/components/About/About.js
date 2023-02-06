import Description from "./Description"
import TechStack from "./TechStack";
import { Link } from "react-router-dom";
import './About.scss';

function About() {
  return (
    <div class="AboutContainer">
      <Description />
      <TechStack />
      <div class="text-center">
      <Link to="/projects" class="mb-4 btn btn-lg btn-light fw-bold border-white bg-white">Check out some of my projects</Link>
      </div>
    </div>
  )
}

export default About;