import React from "react";
import { useTranslation } from "react-i18next";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "./Footer.css";

function Footer({ onScrollToSection }) {
  const { t } = useTranslation();

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
          <p>{t('footer.description')}</p>
          <br />
          <p>{t('footer.location')}</p>
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
          <h4>{t('footer.quickLinks')}</h4>
          <ul>
            <li onClick={onScrollToSection?.home}>{t('navbar.home')}</li>
            <li onClick={onScrollToSection?.about}>{t('navbar.about')}</li>
            <li onClick={onScrollToSection?.projects}>{t('navbar.projects')}</li>
            <li onClick={onScrollToSection?.skills}>{t('navbar.skills')}</li>
            <li onClick={onScrollToSection?.contact}>{t('navbar.contact')}</li>
          </ul>
        </div>

        {/* RIGHT SECTION - SERVICES */}
        <div className="footer-services">
          <h4>{t('footer.services')}</h4>
          <ul>
            <li onClick={() => handleServiceClick("Web Development")}>
              {t('footer.servicesItems.webDev')}
            </li>
            <li onClick={() => handleServiceClick("API Development")}>
              {t('footer.servicesItems.apiDev')}
            </li>
            <li onClick={() => handleServiceClick("Database Design")}>
              {t('footer.servicesItems.dbDesign')}
            </li>
            <li onClick={() => handleServiceClick("Software Testing")}>
              {t('footer.servicesItems.testing')}
            </li>
            <li onClick={() => handleServiceClick("Test Automation")}>
              {t('footer.servicesItems.automation')}
            </li>
            <li onClick={() => handleServiceClick("CI/CD Integration")}>
              {t('footer.servicesItems.cicd')}
            </li>
          </ul>
        </div>

        {/* CONTACT SECTION */}
        <div className="footer-contact">
          <h4>{t('footer.contact')}</h4>
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
        <p>© {new Date().getFullYear()} Nwanganga Emmanuel. {t('footer.rights')}</p>
      </div>
    </footer>
  );
}

export default Footer;