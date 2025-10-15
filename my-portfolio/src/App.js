import React, { useRef } from "react";
import { useSelector } from "react-redux";
import Navbar from "./assets/components/Navbar/Navbar";
import Footer from "./assets/components/Footer/Footer";
import Home from "./assets/Pages/Home";
import About from "./assets/Pages/About";
import Projects from "./assets/Pages/Projects";
import Skills from "./assets/Pages/Skills";
import Contact from "./assets/Pages/Contact";
import ScrollToTopButton from "./assets/components/ScrollToTopButton/ScrollToTopButton";
import "./assets/styles/App.css";

function App() {
  const { darkMode } = useSelector((state) => state.theme);

  // Section Refs
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={darkMode ? "app dark-mode" : "app light-mode"}>
      {/* Navbar - uses smooth scroll */}
      <Navbar
        onScrollToSection={{
          home: () => scrollToSection(homeRef),
          about: () => scrollToSection(aboutRef),
          projects: () => scrollToSection(projectsRef),
          skills: () => scrollToSection(skillsRef),
          contact: () => scrollToSection(contactRef),
        }}
      />

      {/* ✅ Pass scroll handlers to Home */}
      <section ref={homeRef} id="home">
        <Home
          onScrollToSection={{
            projects: () => scrollToSection(projectsRef),
            contact: () => scrollToSection(contactRef),
          }}
        />
      </section>

      <section ref={aboutRef} id="about">
        <About />
      </section>

      <section ref={projectsRef} id="projects">
        <Projects />
      </section>

      <section ref={skillsRef} id="skills">
        <Skills />
      </section>

      <section ref={contactRef} id="contact">
        <Contact />
      </section>

      <Footer
        onScrollToSection={{
          home: () => scrollToSection(homeRef),
          about: () => scrollToSection(aboutRef),
          projects: () => scrollToSection(projectsRef),
          skills: () => scrollToSection(skillsRef),
          contact: () => scrollToSection(contactRef),
        }}
      />
      <ScrollToTopButton />
    </div>
  );
}

export default App;
