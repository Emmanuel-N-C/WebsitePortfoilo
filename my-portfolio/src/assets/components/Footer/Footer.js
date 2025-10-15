import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "./Footer.css";

function Footer({ onScrollToSection }) {
  // Function to scroll to contact section and prefill subject
  const handleServiceClick = (service) => {
    if (onScrollToSection?.contact) {
      onScrollToSection.contact(); // Smooth scroll to contact section
    }

    // Optionally, you could trigger a subject field fill via global state or EmailJS template logic
    console.log(`Inquiry about ${service}`);
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* LEFT SECTION */}
        <div className="footer-about">
          <h3>Nwanganga Emmanuel</h3>
          <p>
            Full-Stack Software Engineer & Software Test Engineer specializing in
            building scalable, high-performance web applications and ensuring
            software quality through automated testing and CI/CD best practices.
          </p>
          <br />
          <p>Bern, Switzerland</p>
          <div className="footer-socials">
            <a
              href="https://github.com/Emmanuel-N-C"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/emmanuel-nwanganga-4940ab2a5"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            <a href="mailto:nwangangaemmanuel2@gmail.com">
              <FaEnvelope />
            </a>
          </div>
        </div>

        {/* MIDDLE SECTION - QUICK LINKS */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li onClick={onScrollToSection?.home}>Home</li>
            <li onClick={onScrollToSection?.about}>About</li>
            <li onClick={onScrollToSection?.projects}>Projects</li>
            <li onClick={onScrollToSection?.skills}>Skills</li>
            <li onClick={onScrollToSection?.contact}>Contact</li>
          </ul>
        </div>

        {/* RIGHT SECTION - SERVICES */}
        <div className="footer-services">
          <h4>Services</h4>
          <ul>
            <li onClick={() => handleServiceClick("Web Development")}>
              Web Development
            </li>
            <li onClick={() => handleServiceClick("API Development")}>
              API Development
            </li>
            <li onClick={() => handleServiceClick("Database Design")}>
              Database Design
            </li>
            <li onClick={() => handleServiceClick("Software Testing")}>
              Software Testing
            </li>
            <li onClick={() => handleServiceClick("Test Automation")}>
              Test Automation
            </li>
            <li onClick={() => handleServiceClick("CI/CD Integration")}>
              CI/CD Integration
            </li>
          </ul>
        </div>

        {/* CONTACT SECTION */}
        <div className="footer-contact">
          <h4>Contact</h4>
          <p>
            <a href="mailto:nwangangachinedu@gmail.com">
              nwangangachinedu@gmail.com
            </a>
          </p>
          <p>
            <a
              href="https://github.com/Emmanuel-N-C"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/Emmanuel-N-C
            </a>
          </p>
          <p>
            <a
              href="https://www.linkedin.com/in/emmanuel-nwanganga-4940ab2a5"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/emmanuel-nwanganga-4940ab2a5
            </a>
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Nwanganga Emmanuel. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
