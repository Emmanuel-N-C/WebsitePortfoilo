import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "./Home.css";
import profilePic from "../../assets/images/myPhoto.jpeg"; 

function Home({ onScrollToSection }) {
  const { t } = useTranslation();
  
  const titles = [
    t('home.titles.fullstack'),
    t('home.titles.tester'),
    t('home.titles.automation'),
    t('home.titles.cicd'),
  ];
  const [currentTitle, setCurrentTitle] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitle((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [titles.length]);

  return (
    <section className="home-section">
      <div className="home-container">
        {/* Left Text Section */}
        <motion.div
          className="home-text"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="intro">{t('home.intro')}</p>
          <h1 className="name">{t('home.name')}</h1>
          <h2 className="animated-role">{titles[currentTitle]}</h2>

          <p className="description">
            {t('home.description')}
          </p>

          {/* Buttons */}
          <div className="home-buttons">
            <button
              className="btn-primary"
              onClick={() => onScrollToSection.projects()}
            >
              {t('home.buttons.viewProjects')}
            </button>
            <button
              className="btn-outline"
              onClick={() => onScrollToSection.contact()}
            >
              {t('home.buttons.getInTouch')}
            </button>
          </div>

          {/* Social Icons */}
          <div className="home-socials">
            <a
              href="https://github.com/Emmanuel-N-C"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/emmanuel-nwanganga-4940ab2a5"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:nwangangachinedu@gmail.com"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>
          </div>
        </motion.div>

        {/* Right Image Section */}
        <motion.div
          className="home-image"
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <img src={profilePic} alt="Nwanganga Emmanuel" />
        </motion.div>
      </div>
    </section>
  );
}

export default Home;