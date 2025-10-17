import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../redux/themeSlice";
import { FaMoon, FaSun } from "react-icons/fa";
import "./Navbar.css";

function Navbar({ onScrollToSection, activeSection }) {
  const dispatch = useDispatch();
  const { darkMode } = useSelector((state) => state.theme);

  return (
    <nav className={`navbar ${darkMode ? "dark" : "light"}`}>
      <div className="navbar-container">
        <div className="navbar-logo">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              onScrollToSection.home();
            }}
          >
            Nwanganga Emmanuel
          </a>
        </div>

        <ul className="navbar-links">
          <li>
            <a
              href="#home"
              className={activeSection === "home" ? "active" : ""}
              onClick={(e) => {
                e.preventDefault();
                onScrollToSection.home();
              }}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className={activeSection === "about" ? "active" : ""}
              onClick={(e) => {
                e.preventDefault();
                onScrollToSection.about();
              }}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className={activeSection === "projects" ? "active" : ""}
              onClick={(e) => {
                e.preventDefault();
                onScrollToSection.projects();
              }}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className={activeSection === "skills" ? "active" : ""}
              onClick={(e) => {
                e.preventDefault();
                onScrollToSection.skills();
              }}
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className={activeSection === "contact" ? "active" : ""}
              onClick={(e) => {
                e.preventDefault();
                onScrollToSection.contact();
              }}
            >
              Contact
            </a>
          </li>
        </ul>

        <div className="navbar-actions">
          

          <button
            className="theme-toggle"
            onClick={() => dispatch(toggleTheme())}
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
