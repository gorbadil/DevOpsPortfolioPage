import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";
import Experience from "./Pages/Experience";
// import Projects from "./Pages/Projects";
import "./assets/styles/style.css";

export default function App() {
  return (
    <Router>
      <Navbar />
      <div className="switch-content">
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/experience">
            <Experience />
          </Route>
          {/* <Route path="/projects">
            <Projects />
          </Route> */}
        </Switch>
      </div>
    </Router>
  );
}
