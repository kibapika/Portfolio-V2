import "./App.css";
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Exp from "./components/Exp";
import Tech from "./components/Tech";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import STA from "./components/STA";

function App() {
  return (
    <Router>
      <div className="w-[100dvw] flex flex-col">
        <STA />
        <Header />
        <section>
          <Home id="home" />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="exp">
          <Exp />
        </section>
        <section id="tech">
          <Tech />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <Contact />
        </section>
        <Footer />
      </div>
      {/* <Routes>
        <Route path="/" component={Home} />
        <Route path="/home" component={Home}  />
        <Route path="/about" component={About}  />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/experience" element={<Exp />} />
      </Routes> */}
    </Router>
  );
}

export default App;
