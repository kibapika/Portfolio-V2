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
import SideNav from "./components/SideNav";
import STA from "./components/STA";

import blueStack from "./img/bluestack.jpg";

function App() {
  return (
    <Router>
      <div className="w-[100dvw] flex flex-col justify-between">
        <STA />
        <SideNav />
        <div
          id="home"
          className="justify-center bg-no-repeat bg-cover bg-center"
          style={{ backgroundImage: `url(${blueStack})` }}
        >
          <section>
            <Header />
          </section>
          <section className="h-[86dvh]">
            <Home />
          </section>
        </div>
        <section id="about" className="h-[100dvh]">
          <About />
        </section>
        <section id="exp" className="h-[100dvh]">
          <Exp />
        </section>
        <section id="tech" className="h-[100dvh]">
          <Tech />
        </section>
        <section id="projects" className="h-[100dvh]">
          <Projects />
        </section>
        <section id="contact" className="h-[90dvh]">
          <Contact />
        </section>
        <Footer />
      </div>
      {/* <Routes>
        <Route path="/#home" element={<Header />} />
        <Route path="/#about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/tech" element={<Tech />} />
        <Route path="/experience" element={<Exp />} />
      </Routes> */}
    </Router>
  );
}

export default App;
