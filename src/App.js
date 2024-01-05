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

function App() {

  return (
    <Router>
      <div className="w-[100dvw] flex flex-col justify-between">
        <STA />
        <section id="home">
          <Header />
        </section>
        <SideNav />
        <section className="h-[85dvh]">
          <Home />
        </section>
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
