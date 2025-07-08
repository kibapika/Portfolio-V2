import "./App.css";
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Exp from "./components/Exp";
import Tech from "./components/Tech";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import SideNav from "./components/SideNav";
import STA from "./components/STA";
import blueStack from "./img/blueStack.jpg";

function fadeOutOnScroll(element) {
  if (!element || element.length === 0) {
    return;
  }

  var distanceToTop =
    window.pageYOffset + element[0].getBoundingClientRect().top;
  var elementHeight = element[0].offsetHeight;
  var scrollTop = document.documentElement.scrollTop;

  var opacity = 1;

  if (scrollTop > distanceToTop) {
    opacity = 1 - (scrollTop - distanceToTop) / elementHeight;
  }

  if (opacity >= 0) {
    element[0].style.opacity = opacity;
  }
}

function scrollHandler() {
  var header = document.getElementsByClassName("background");
  fadeOutOnScroll(header);
}

window.addEventListener("scroll", scrollHandler);

function App() {
  return (
    <Router>
      <div className="w-[100dvw] flex flex-col justify-between">
        <STA />
        <section
          id="home"
          className="background h-[100dvh] justify-center bg-no-repeat bg-cover bg-center"
          style={{ backgroundImage: `url(${blueStack})` }}
        >
          <Header />
        </section>
        <SideNav />
        <section id="about" className="h-[100dvh]">
          <About />
        </section>
        <section id="exp" className="h-[100dvh]">
          <Exp />
        </section>
        <section id="tech" className="h-[100dvh]">
          <Tech />
        </section>
        <section id="projects" className="h-[145dvh]">
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
