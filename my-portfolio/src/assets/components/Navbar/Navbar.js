import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from 'react-i18next';
import { toggleTheme } from "../../redux/themeSlice";
import { FaMoon, FaSun } from "react-icons/fa";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import "./Navbar.css";

function Navbar({ onScrollToSection, activeSection }) {
  const dispatch = useDispatch();
  const { darkMode } = useSelector((state) => state.theme);
  const { t } = useTranslation();

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
              {t('navbar.home')}
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
              {t('navbar.about')}
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
              {t('navbar.projects')}
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
              {t('navbar.skills')}
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
              {t('navbar.contact')}
            </a>
          </li>
        </ul>

        <div className="navbar-actions">
          <LanguageSwitcher />
          
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