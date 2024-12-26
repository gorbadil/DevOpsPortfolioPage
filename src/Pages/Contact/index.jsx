import { useEffect, useRef } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function Contact() {
  const footerspan = useRef();

  useEffect(() => {
    const y = new Date().getFullYear();
    footerspan.current.innerHTML = y;
  }, []);

  return (
    <section id="contact">
      <h3>
        Contact <span>Me</span>
      </h3>

      <h5 className="contact-touch">Get in Touch</h5>
      <div className="contact-boxes">
        <div className="contact-box">
          <span>
            <a href="mailto:ersin.mutlu@outlook.com.tr">
              <i className="fa-solid fa-envelope"></i>
            </a>
          </span>
          <span>ersin.mutlu@outlook.com.tr</span>
          <div className="line"></div>

          <span>
            <a target="_blank" href="https://www.linkedin.com/in/ersinm">
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </span>
          <span>LinkedIn</span>
        </div>
      </div>
      <footer>
        <div className="footer-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/experience">Experience</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <p>
          © <span ref={footerspan}></span> Ersin Mutlu. All rights reserved.
        </p>
      </footer>
    </section>
  );
}

export default Contact;
