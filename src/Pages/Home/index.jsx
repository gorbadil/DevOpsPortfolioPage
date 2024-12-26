import ProfilePic from "../../assets/pictures/profile.jpeg";

function Home() {
  return (
    <section id="home">
      <div className="home-container">
        <div className="home-content">
          <h5>Hi, I&apos;m</h5>
          <h1>Ersin Mutlu</h1>
          <p>Cloud & DevOps Engineer</p>
          <div className="home-buttons">
            <a href="#" className="btn">
              CV
            </a>
            <a href="#" className="btn">
              Medium
            </a>
          </div>
          <div className="home-icons">
            <a href="#" className="btn">
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="#" className="btn">
              <i className="fa-brands fa-github"></i>
            </a>
          </div>
        </div>
        <div className="home-image">
          <img src={ProfilePic} alt="hero" />
        </div>
      </div>
    </section>
  );
}

export default Home;
