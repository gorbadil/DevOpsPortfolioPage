import AboutPic from "../../assets/pictures/about.jpeg";

function About() {
  return (
    <section id="about">
      <h3>
        About <span>Me</span>
      </h3>
      <div className="about-container">
        <div className="about-img">
          <img src={AboutPic} alt="" />
        </div>
        <div className="about-content">
          <div className="about-boxes">
            <div className="about-box">
              <span>
                <i className="fa-solid fa-wand-magic-sparkles"></i>
              </span>
              <span>Skills</span>
              <ul>
                <li>GitHub Actions</li>
                <li>Jenkins</li>
                <li>Azure DevOps</li>
                <li>Terraform</li>
                <li>Bash</li>
                <li>Python</li>
                <li>Docker</li>
                <li>Docker Swarm</li>
                <li>Kubernetes</li>
                <li>Linux</li>
                <li>Git</li>
                <li>Github</li>
              </ul>
            </div>
          </div>

          <p>
            I am a motivated Cloud & DevOps Engineer intern with hands-on
            experience in container orchestration (Kubernetes, Docker), cloud
            infrastructure (Azure), and CI/CD tools (Jenkins, Terraform). With a
            strong foundation in Linux and Bash scripting, I am eager to
            contribute to innovative cloud projects and streamline workflows
            through automation and scalable infrastructure solutions.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
