import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { FaGithub } from "react-icons/fa";
import "./Projects.css";

//  import screenshots
import lmsImage from "../../assets/images/lmsHomepage.png";
import redditverseImage from "../../assets/images/RedditVersee.png";
import trackstackImage from "../../assets/images/trackstack.png";
import flightImage from "../../assets/images/Flightbooking.png";
import eteeImage from "../../assets/images/EteElementsautomation.png";

function Projects() {
  const { t } = useTranslation();

  const softwareProjects = [
    {
      title: t('projects.softwareProjects.lms.title'),
      description: t('projects.softwareProjects.lms.description'),
      tech: ["C#", ".NET Core", "Entity Framework", "SQL Server", "Bootstrap"],
      link: "https://github.com/Emmanuel-N-C/LeaveManagementSystem",
      image: lmsImage,
    },
    {
      title: t('projects.softwareProjects.redditverse.title'),
      description: t('projects.softwareProjects.redditverse.description'),
      tech: ["Java", "Spring Boot", "React", "MySQL"],
      link: "https://github.com/Emmanuel-N-C/RedditVerse",
      image: redditverseImage,
    },
    {
      title: t('projects.softwareProjects.trackstack.title'),
      description: t('projects.softwareProjects.trackstack.description'),
      tech: ["React", "Node.js", "Express", "MongoDB"],
      link: "https://github.com/Emmanuel-N-C/TrackStack-React",
      image: trackstackImage,
    },
  ];

  const testingProjects = [
    {
      title: t('projects.testingProjects.flight.title'),
      description: t('projects.testingProjects.flight.description'),
      tech: ["Java", "Selenium", "TestNG", "Maven"],
      link: "https://github.com/Emmanuel-N-C/FlightBookingAutomation",
      image: flightImage,
    },
    {
      title: t('projects.testingProjects.etee.title'),
      description: t('projects.testingProjects.etee.description'),
      tech: ["Java", "Selenium", "TestNG"],
      link: "https://github.com/Emmanuel-N-C/ETEElementsAutomation",
      image: eteeImage,
    },
  ];

  const renderProjectCard = (project, index) => (
    <motion.div
      className="project-card"
      key={index}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <div className="project-image">
        <img src={project.image} alt={project.title} loading="lazy" />
      </div>
      <div className="project-content">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="tech-stack">
          {project.tech.map((t, i) => (
            <span key={i}>{t}</span>
          ))}
        </div>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="github-link"
        >
          <FaGithub /> {t('projects.viewOnGithub')}
        </a>
      </div>
    </motion.div>
  );

  return (
    <section className="projects-section" id="projects">
      <motion.div
        className="projects-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1>{t('projects.title')}</h1>
        <p className="subtitle">{t('projects.subtitle')}</p>

        <h2>{t('projects.softwareEngineering')}</h2>
        <div className="projects-grid">
          {softwareProjects.map((project, index) =>
            renderProjectCard(project, index)
          )}
        </div>

        <h2>{t('projects.softwareTesting')}</h2>
        <div className="projects-grid">
          {testingProjects.map((project, index) =>
            renderProjectCard(project, index)
          )}
        </div>
      </motion.div>
    </section>
  );
}

export default Projects;