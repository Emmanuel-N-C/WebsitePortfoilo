import React, { useState } from "react";
import { motion } from "framer-motion";
import "./About.css";

function About() {
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
              <p>
              I’m a Full-Stack Software Engineer and Software Test Engineer
            passionate about building responsive, high-performance web
            applications and ensuring end-to-end software quality. Proficient in
            Java, JavaScript, React, and modern databases, I develop scalable
            solutions backed by clean, testable code.
            <br />
            As an ISTQB-certified tester, I also specialize in automated testing,
            CI/CD integration, and continuous quality assurance across
            development pipelines.
            </p>
            <p>
              I’m passionate about delivering high-quality, maintainable software by 
              combining development and test automation practices. Experienced in Test automation, I ensure that 
              every feature I build or test is robust, efficient, and production-ready.
            </p>
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
            <h3>🎓 Education</h3>
<ul>
  <li>
    <strong>BSc in Computer Science Engineering (Software Technology)</strong><br />
    University of Dunaújváros, Hungary — 
    <em>Graduated with a GPA of 4.79 / 5.0</em>
  </li>
</ul>

<h3>💻 Technical Certifications</h3>
<ul>
  <li>
    <strong>ISTQB Certified Tester Foundation Level (CTFL)</strong><br />
    International Software Testing Qualifications Board
  </li>
  <li>
    <strong>Software Testing Bootcamp</strong><br />
    Focused on QA methodologies, automation frameworks, and test management using Jira, Selenium, and TestNG
  </li>
  <li>
    <strong>ASP.NET Core and Entity Framework Development</strong><br />
    Comprehensive training in backend development with C#, .NET Core, and database integration
  </li>
  <li>
    <strong>Cloud Foundations Certification</strong><br />
    Introduction to cloud architecture, services, and deployment principles (AWS / Azure fundamentals)
  </li>
  <li>
    <strong>Java Spring Boot Developer Certification</strong><br />
    Advanced concepts in Java, RESTful APIs, Spring Boot, and full-stack application development
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
            <h4>🧪 Software Testing Experience</h4>
<ul>
  <li>
    Software Test Engineer — DSS Consulting<br />
    <em>Budapest, Hungary | 09/2023 – 04/2025</em><br />
    Designed and executed functional, integration, and regression tests 
    for safety-critical software components. Built and maintained automation frameworks 
    using Selenium, Python/Java, TestNG, and Ranorex, improving regression coverage by 25%.<br />
    Reviewed and validated Software Requirements Specifications (SRS), 
    ensuring complete test traceability and compliance. Performed system and Factory Acceptance Tests (FAT), 
    supported defect root cause analysis, and contributed to test reporting via Allure and Xray.<br />
    Actively participated in continuous improvement initiatives enhancing test coverage 
    for safety-critical, real-time systems.
  </li>
  <li>
    Functional Tester (Intern) — ProofIT<br />
    <em>Budapest, Hungary | 08/2022 – 01/2023</em><br />
    Performed functional, exploratory, and integration testing on web, mobile, 
    and Linux desktop applications. Conducted cross-platform regression cycles 
    and collaborated with developers and testers in Agile sprints using Jira.<br />
    Prepared and executed automated test scripts with Selenium and JUnit, 
    maintaining regression suites and improving test efficiency.
  </li>
</ul>

<h4>💻 Software Engineering Experience</h4>
<ul>
  <li>
    Full-Stack Software Engineer — Africsmart International Ltd<br />
    <em>Remote | 2021 – 2022</em><br />
    Designed, developed, and maintained scalable web applications using 
    Java, Spring Boot, React, and RESTful APIs. Integrated frontend and backend 
    systems to deliver performant, user-friendly digital solutions. Implemented authentication, 
    database models, and responsive UI components to improve business efficiency.<br />
    Collaborated remotely with cross-functional teams, performed code reviews, 
    and contributed to continuous delivery through CI/CD pipelines.
  </li>
  <li>
    Front-End Web Developer (Freelance)<br />
    <em>Remote | Ongoing</em><br />
    Developed and customized responsive websites and single-page applications using 
    HTML, CSS, JavaScript, and React. Focused on crafting clean user interfaces, 
    optimizing performance, and ensuring accessibility. Worked with clients to translate 
    design concepts into functional, visually engaging web experiences.
  </li>
</ul>

          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    <section className="about-section">
      <motion.div
        className="about-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1>Get to Know Me Better</h1>
        <p className="subtitle">
          A passionate software engineer with a focus on quality-driven development and testing.
        </p>

        {/* Tabs */}
        <div className="tabs">
          <button
            className={activeTab === "background" ? "active" : ""}
            onClick={() => setActiveTab("background")}
          >
            Background
          </button>
          <button
            className={activeTab === "education" ? "active" : ""}
            onClick={() => setActiveTab("education")}
          >
            Education
          </button>
          <button
            className={activeTab === "experience" ? "active" : ""}
            onClick={() => setActiveTab("experience")}
          >
            Experience
          </button>
        </div>

        {/* Dynamic Content */}
        <div className="tab-content">{renderContent()}</div>
      </motion.div>
    </section>
  );
}

export default About;
