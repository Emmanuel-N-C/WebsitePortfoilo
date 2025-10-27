import React, { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { FaGlobe, FaMapMarkerAlt } from "react-icons/fa";
import "./About.css";

function About() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState("background");

  const renderContent = () => {
    switch (activeTab) {
      case "background":
        return (
          <motion.div
            key="background"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p>{t('about.background.text1')}</p>
            <p>{t('about.background.text2')}</p>
            <p>{t('about.background.text3')}</p>
          </motion.div>
        );

      case "education":
        return (
          <motion.div
            key="education"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3>{t('about.education.title')}</h3>
            <ul>
              <li>
                <strong>{t('about.education.degree')}</strong>
                <br />
                {t('about.education.university')}{" "}
                <em>{t('about.education.gpa')}</em>
              </li>
            </ul>

            <h3>{t('about.education.certifications')}</h3>
            <ul>
              <li>
                <strong>{t('about.education.istqb')}</strong>
                <br />
                {t('about.education.istqbOrg')}
              </li>
              <li>
                <strong>{t('about.education.bootcamp')}</strong>
                <br />
                {t('about.education.bootcampDesc')}
              </li>
              <li>
                <strong>{t('about.education.aspnet')}</strong>
                <br />
                {t('about.education.aspnetDesc')}
              </li>
              <li>
                <strong>{t('about.education.cloud')}</strong>
                <br />
                {t('about.education.cloudDesc')}
              </li>
              <li>
                <strong>{t('about.education.java')}</strong>
                <br />
                {t('about.education.javaDesc')}
              </li>
            </ul>
          </motion.div>
        );

      case "experience":
        return (
          <motion.div
            key="experience"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h4>{t('about.experience.testing')}</h4>
            <ul>
              <li>
                <strong>{t('about.experience.dss')}</strong>
                <br />
                <em>{t('about.experience.dssLocation')}</em>
                <br />
                {t('about.experience.dssDesc')}
              </li>
              <li>
                <strong>{t('about.experience.proofit')}</strong>
                <br />
                <em>{t('about.experience.proofitLocation')}</em>
                <br />
                {t('about.experience.proofitDesc')}
              </li>
            </ul>

            <h4>{t('about.experience.engineering')}</h4>
            <ul>
              <li>
                <strong>{t('about.experience.africsmart')}</strong>
                <br />
                <em>{t('about.experience.africsmartLocation')}</em>
                <br />
                {t('about.experience.africsmartDesc')}
              </li>
              <li>
                <strong>{t('about.experience.freelance')}</strong>
                <br />
                <em>{t('about.experience.freelanceLocation')}</em>
                <br />
                {t('about.experience.freelanceDesc')}
              </li>
            </ul>
          </motion.div>
        );

      default:
        return null;
    }
  };

  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <motion.div
          className="about-header"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2>{t('about.title')}</h2>
          <p>{t('about.subtitle')}</p>
        </motion.div>

        <div className="about-content">
          {/* LEFT CARD */}
          <motion.div
            className="about-info-card"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3>{t('about.personalInfo.title')}</h3>
            <ul>
              <li>
                <strong>{t('about.personalInfo.name')}</strong> Nwanganga Emmanuel
              </li>
              <li>
                <strong>{t('about.personalInfo.basedIn')}</strong> Bern, {t('about.personalInfo.switzerland')}
              </li>
              <li>
                <strong>{t('about.personalInfo.languages')}</strong>
                <br />
                <FaGlobe /> {t('about.personalInfo.english')}
                <br />
                <FaGlobe /> {t('about.personalInfo.german')}
              </li>
              <li>
                <strong>{t('about.personalInfo.location')}</strong>
                <br />
                <FaMapMarkerAlt /> {t('about.personalInfo.switzerland')}
              </li>
            </ul>
          </motion.div>

          {/* RIGHT TAB CONTENT */}
          <motion.div
            className="about-tabs"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="tab-buttons">
              <button
                className={activeTab === "background" ? "active" : ""}
                onClick={() => setActiveTab("background")}
              >
                {t('about.tabs.background')}
              </button>
              <button
                className={activeTab === "education" ? "active" : ""}
                onClick={() => setActiveTab("education")}
              >
                {t('about.tabs.education')}
              </button>
              <button
                className={activeTab === "experience" ? "active" : ""}
                onClick={() => setActiveTab("experience")}
              >
                {t('about.tabs.experience')}
              </button>
            </div>
            <div className="tab-content">{renderContent()}</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;