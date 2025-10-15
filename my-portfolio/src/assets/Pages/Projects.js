import React from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import "./Projects.css";

//  import screenshots
import lmsImage from "../../assets/images/lmsHomepage.png";
import redditverseImage from "../../assets/images/Redditverse.png";
import trackstackImage from "../../assets/images/trackstack.png";
import flightImage from "../../assets/images/Flightbooking.png";
import eteeImage from "../../assets/images/EteElementsautomation.png";

function Projects() {
  const softwareProjects = [
    {
      title: "Leave Management System",
      description:
        "A full-stack web application built with ASP.NET Core and Entity Framework for managing employee leave requests, approvals, and allocations.",
      tech: ["C#", ".NET Core", "Entity Framework", "SQL Server", "Bootstrap"],
      link: "https://github.com/Emmanuel-N-C/LeaveManagementSystem",
      image: lmsImage,
    },
    {
      title: "RedditVerse",
      description:
        "A social web application inspired by Reddit, enabling users to create posts, comment, and upvote/downvote content. Focused on backend logic and clean UI.",
      tech: ["Java", "Spring Boot", "React", "MySQL"],
      link: "https://github.com/Emmanuel-N-C/RedditVerse",
      image: redditverseImage,
    },
    {
      title: "Track Stack",
      description:
        "A developer-oriented productivity tracker app integrating task management and skill progression tracking, supporting RESTful APIs and persistent data storage.",
      tech: ["React", "Node.js", "Express", "MongoDB"],
      link: "https://github.com/Emmanuel-N-C/TrackStack-React",
      image: trackstackImage,
    },
  ];

  const testingProjects = [
    {
      title: "Flight Booking Automation",
      description:
        "End-to-end automated test suite using Selenium and TestNG for a flight booking web app, verifying search, booking, and confirmation workflows.",
      tech: ["Java", "Selenium", "TestNG", "Maven"],
      link: "https://github.com/Emmanuel-N-C/FlightBookingAutomation",
      image: flightImage,
    },
    {
      title: "ETEE Elements Automation",
      description:
        "Automated UI regression testing framework for verifying form interactions and elements visibility across pages using Selenium and TestNG.",
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
          <FaGithub /> View on GitHub
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
        <h1>Featured Projects</h1>
        <p className="subtitle">
          A showcase of my most impactful software engineering and testing work.
        </p>

        <h2>💻 Software Engineering Projects</h2>
        <div className="projects-grid">
          {softwareProjects.map((project, index) =>
            renderProjectCard(project, index)
          )}
        </div>

        <h2>🧪 Software Testing Projects</h2>
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
