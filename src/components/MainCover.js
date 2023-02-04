import './MainCover.scss';

function MainCover() {
  return (
    <main class="d-flex flex-column justify-content-center align-items-start px-3 text-bg-dark MainWrapper">
      <div class="d-flex flex-column align-items-start DivContainer">
        <h1 class="display-2"><strong>Hey, I'm Andrei.</strong></h1>
        <br />
        <p class="lead text-start">I am a motivated full-stack web developer with proficiency in Javascript, React, NodeJS, and Express 
        <br />and am looking for a role where I can apply my knowledge and expertise as a QA Analyst to streamline 
        <br />my development process to avoid testing headaches down the road. I am passionate about learning 
        <br />various technologies to add to my tech stack and have no trouble staying up to date on the latest tech.</p>
        <br />
        <a href="#" class="btn btn-lg btn-light fw-bold border-white bg-white">Check out some of my projects</a>
      </div>
    </main>
  )
}

export default MainCover;