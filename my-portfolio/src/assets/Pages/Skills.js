import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import {
  FaJava,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaServer,
  FaCloud,
  FaBug,
  FaCogs,
} from "react-icons/fa";
import {
  SiSpringboot,
  SiDotnet,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiSelenium,
  SiPostman,
  SiCypress,
  SiDocker,
  SiAwsamplify,
  SiPostgresql,
  SiBootstrap,
  SiHtml5,
  SiCss3,
} from "react-icons/si";
import "./Skills.css";

function Skills() {
  const { t } = useTranslation();

  const categories = [
    {
      title: "Backend Development",
      icon: <FaServer />,
      color: "#2563eb",
      skills: [
        { name: "Java", level: 90, icon: <FaJava /> },
        { name: "Spring Boot", level: 85, icon: <SiSpringboot /> },
        { name: "C#", level: 80, icon: <SiDotnet /> },
        { name: ".NET Core", level: 75, icon: <SiDotnet /> },
        { name: "Node.js", level: 85, icon: <FaNodeJs /> },
      ],
    },
    {
      title: "Frontend Development",
      icon: <FaReact />,
      color: "#9333ea",
      skills: [
        { name: "JavaScript", level: 90, icon: <SiJavascript /> },
        { name: "React.js", level: 85, icon: <FaReact /> },
        { name: "HTML5", level: 95, icon: <SiHtml5 /> },
        { name: "CSS3", level: 90, icon: <SiCss3 /> },
        { name: "Bootstrap", level: 85, icon: <SiBootstrap /> },
      ],
    },
    {
      title: "Database Management",
      icon: <FaDatabase />,
      color: "#16a34a",
      skills: [
        { name: "MySQL", level: 90, icon: <SiMysql /> },
        { name: "MongoDB", level: 80, icon: <SiMongodb /> },
        { name: "PostgreSQL", level: 80, icon: <SiPostgresql /> },
      ],
    },
    {
      title: "Software Automated Testing",
      icon: <FaBug />,
      color: "#0ea5e9",
      skills: [
        { name: "Selenium", level: 90, icon: <SiSelenium /> },
        { name: "Postman", level: 85, icon: <SiPostman /> },
        { name: "Cypress", level: 80, icon: <SiCypress /> },
        { name: "Playwright", level: 90},
      ],
    },
    {
      title: "DevOps & Tools",
      icon: <FaCloud />,
      color: "#f97316",
      skills: [
        { name: "Git & GitHub", level: 90, icon: <FaCogs /> },
        { name: "Docker", level: 85, icon: <SiDocker /> },
        { name: "AWS", level: 75, icon: <SiAwsamplify /> },
        { name: "Azure", level: 70},
      ],
    },
    {
      title: "Testing Standards",
      icon: <FaCogs />,
      color: "#334155",
      skills: [
        { name: "Regression Testing", level: 90 },
        { name: "System-Level Testing", level: 85 },
        { name: "Integration Testing", level: 80 },
        { name: "ISO 26262", level: 85 },
        { name: "EN 50128, EN 50657", level: 85 },
      ],
    },
  ];

  const renderSkill = (skill, color) => (
    <div className="skill-item" key={skill.name}>
      <div className="skill-info">
        <div className="skill-icon">{skill.icon}</div>
        <span className="skill-name">{skill.name}</span>
        <span className="skill-percent">{skill.level}%</span>
      </div>
      <div className="progress-bar">
        <motion.div
          className="progress-fill"
          style={{ backgroundColor: color }}
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          transition={{ duration: 1 }}
        />
      </div>
    </div>
  );

  return (
    <section className="skills-section" id="skills">
      <motion.div
        className="skills-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1>{t('skills.title')}</h1>
        <p className="subtitle">{t('skills.subtitle')}</p>

        <div className="skills-grid">
          {categories.map((cat, i) => (
            <motion.div
              className="skill-card"
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="card-header" style={{ color: cat.color }}>
                <span className="header-icon">{cat.icon}</span>
                <h3>{cat.title}</h3>
              </div>
              {cat.skills.map((s) => renderSkill(s, cat.color))}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Skills;