import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "./Home.css";
import profilePic from "../../assets/images/myPhoto.jpeg"; 

function Home({ onScrollToSection }) {
  const titles = [
    "Full-Stack Software Engineer",
    "Software Test Engineer",
    "Automation Specialist",
    "CI/CD Integrator",
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
          <p className="intro">Hello, I’m</p>
          <h1 className="name">Nwanganga Emmanuel</h1>
          <h2 className="animated-role">{titles[currentTitle]}</h2>

          <p className="description">
            Transforming ideas into elegant, high-performing solutions with a
            strong focus on scalability, quality, and user experience.
          </p>

          {/* Buttons */}
          <div className="home-buttons">
            <button
              className="btn-primary"
              onClick={() => onScrollToSection.projects()}
            >
              View Projects
            </button>
            <button
              className="btn-outline"
              onClick={() => onScrollToSection.contact()}
            >
              Get in Touch
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
