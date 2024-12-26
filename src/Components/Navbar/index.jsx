import { useEffect, useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { ChangeToDark, ChangeToLight } from "../../Utils/ChangeDark";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  useEffect(() => {
    const root = document.querySelector(":root");
    if (isDarkMode) {
      ChangeToDark(root);
    } else {
      ChangeToLight(root);
    }
  }, [isDarkMode]);

  return (
    <header>
      <nav className="navbar">
        <div className="logo">Ersin Mutlu</div>
        <div className="links">
          <Link className="link" to="/">
            Home
          </Link>
          <Link className="link" to="/about">
            About
          </Link>
          {/* <Link className="link" to="/projects">
            Projects
          </Link> */}
          <Link className="link" to="/experience">
            Experience
          </Link>
          <Link className="link" to="/blog">
            Blog
          </Link>
          <Link className="link" to="/contact">
            Contact
          </Link>
          <span id="light-dark" onClick={() => setIsDarkMode(!isDarkMode)}>
            {isDarkMode ? "⏾" : "☀︎"}
          </span>
        </div>

        <div className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        {isMenuOpen && (
          <div
            className="hamburger-links show"
            onClick={() => setIsMenuOpen(false)}
          >
            <Link className="link" to="/">
              Home
            </Link>
            <Link className="link" to="/about">
              About
            </Link>
            {/* <Link className="link" to="/projects">
              Projects
            </Link> */}
            <Link className="link" to="/blog">
              Blog
            </Link>
            <Link className="link" to="/experience">
              Experience
            </Link>
            <Link className="link" to="/contact">
              Contact
            </Link>
            <span
              className="pointer"
              id="light-dark"
              onClick={() => setIsDarkMode(!isDarkMode)}
            >
              {isDarkMode ? "⏾" : "☀︎"}
            </span>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Navbar;
