import React, { useRef, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Navbar from "./assets/components/Navbar/Navbar";
import Footer from "./assets/components/Footer/Footer";
import Home from "./assets/Pages/Home";
import About from "./assets/Pages/About";
import Projects from "./assets/Pages/Projects";
import Skills from "./assets/Pages/Skills";
import Contact from "./assets/Pages/Contact";
import ScrollToTopButton from "./assets/components/ScrollToTopButton/ScrollToTopButton";
import { initializeLanguage } from "./assets/redux/languageSlice";
import i18n from "./i18n";
import "./assets/styles/App.css";

function App() {
  const dispatch = useDispatch();
  const { darkMode } = useSelector((state) => state.theme);
  const { currentLanguage } = useSelector((state) => state.language);

  useEffect(() => {
    dispatch(initializeLanguage());
  }, [dispatch]);

  useEffect(() => {
    if (currentLanguage && i18n.language !== currentLanguage) {
      i18n.changeLanguage(currentLanguage);
    }
  }, [currentLanguage]);

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);

  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const sections = [
      { id: "home", ref: homeRef },
      { id: "about", ref: aboutRef },
      { id: "projects", ref: projectsRef },
      { id: "skills", ref: skillsRef },
      { id: "contact", ref: contactRef },
    ];

    const observerOptions = { root: null, rootMargin: "0px", threshold: 0.4 };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActiveSection(entry.target.id);
      });
    }, observerOptions);

    sections.forEach((section) => {
      if (section.ref.current) observer.observe(section.ref.current);
    });

    return () => {
      sections.forEach((section) => {
        if (section.ref.current) observer.unobserve(section.ref.current);
      });
    };
  }, []);

  return (
    <div className={darkMode ? "app dark-mode" : "app light-mode"}>
      <Navbar
        activeSection={activeSection}
        onScrollToSection={{
          home: () => scrollToSection(homeRef),
          about: () => scrollToSection(aboutRef),
          projects: () => scrollToSection(projectsRef),
          skills: () => scrollToSection(skillsRef),
          contact: () => scrollToSection(contactRef),
        }}
      />

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