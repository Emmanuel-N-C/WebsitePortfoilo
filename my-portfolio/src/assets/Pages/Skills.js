import React from "react";
import { motion } from "framer-motion";
import "./Skills.css";

function Skills() {
  const backendSkills = [
    { name: "Java", level: 90 },
    { name: "Spring Boot", level: 85 },
    { name: "C#", level: 80 },
    { name: ".NET Core", level: 75 },
    { name: "Node.js", level: 85 },
  ];

  const frontendSkills = [
    { name: "JavaScript", level: 90 },
    { name: "React.js", level: 85 },
    { name: "HTML5", level: 95 },
    { name: "CSS3", level: 90 },
    { name: "Bootstrap", level: 85 },
  ];

  const testingSkills = [
    { name: "Selenium", level: 90 },
    { name: "Playwright", level: 85 },
    { name: "Cucumber", level: 80 },
    { name: "Postman", level: 85 },
    { name: "Cypress", level: 70 },
  ];

  const testingConcepts = [
    { name: "Regression Testing", level: 90 },
    { name: "System-Level Testing", level: 85 },
    { name: "Integration Testing", level: 80 },
    { name: "ISO 26262", level: 85 },
    { name: "EN 50128, EN 50657", level: 85 },
  ];


  const toolsSkills = [
    { name: "Git & GitHub", level: 90 },
    { name: "CI/CD (GitHub Actions)", level: 80 },
    { name: "VS Code / IntelliJ / Eclipse", level: 85 },
    { name: "SQL / MySQL", level: 80 },
    { name: "MongoDB", level: 75 },
  ];

  const cloudSkills = [
    { name: "Azure", level: 70 },
    { name: "AWS", level: 65 },
    { name: "Docker", level: 60 },
    { name: "Linux / Ubuntu", level: 75 },
  ];

  const renderSkillBar = (skill, index) => (
    <motion.div
      className="skill-bar"
      key={index}
      initial={{ opacity: 0, width: 0 }}
      whileInView={{ opacity: 1, width: `${skill.level}%` }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <span className="skill-name">{skill.name}</span>
      <div className="skill-progress">
        <motion.div
          className="progress-fill"
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          transition={{ duration: 1 }}
        ></motion.div>
      </div>
      <span className="skill-percent">{skill.level}%</span>
    </motion.div>
  );

  return (
    <section className="skills-section">
      <motion.div
        className="skills-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1>Skills & Technologies</h1>
        <p className="subtitle">
          A comprehensive overview of my technical skills and proficiencies.
        </p>

        <div className="skills-grid">
          <div className="skill-category">
            <h3>Backend Development</h3>
            {backendSkills.map(renderSkillBar)}
          </div>

          <div className="skill-category">
            <h3>Frontend Development</h3>
            {frontendSkills.map(renderSkillBar)}
          </div>

          <div className="skill-category">
            <h3>Software Automated Testing</h3>
            {testingSkills.map(renderSkillBar)}
          </div>

          <div className="skill-category">
            <h3>Software Testing concepts</h3>
            {testingConcepts.map(renderSkillBar)}
          </div>

          <div className="skill-category">
            <h3>Tools & DevOps</h3>
            {toolsSkills.map(renderSkillBar)}
          </div>

          <div className="skill-category">
            <h3>Cloud & OS</h3>
            {cloudSkills.map(renderSkillBar)}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Skills;
