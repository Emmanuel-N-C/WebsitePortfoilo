import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../redux/themeSlice";
import { FaMoon, FaSun } from "react-icons/fa";
import "./Navbar.css";

function Navbar({ onScrollToSection }) {
  const dispatch = useDispatch();
  const { darkMode } = useSelector((state) => state.theme);

  return (
    <nav className={`navbar ${darkMode ? "dark" : "light"}`}>
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              onScrollToSection.home();
            }}
          >
            Nwanganga Emmanuel<span>.</span>
          </a>
        </div>

        {/* Navigation Links */}
        <ul className="navbar-links">
          <li>
            <a
              href="#home"
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
              onClick={(e) => {
                e.preventDefault();
                onScrollToSection.contact();
              }}
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Actions (Resume, Upload, Theme Toggle) */}
        <div className="navbar-actions">
          <button
            className="btn-resume"
            onClick={() => window.open(process.env.PUBLIC_URL + '/NWANGANGA-EMMANUEL-CV.pdf', '_blank')}
          >
            Resume
          </button>
          

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
