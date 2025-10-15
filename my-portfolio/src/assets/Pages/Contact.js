import React, { useState } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .send(
        "service_ogkj263",     
        "template_72vbhh7",    
        formData,
        "NjFZVilmIfs6wQWkM"      
      )
      .then(
        () => {
          setStatus("success");
          setFormData({ name: "", email: "", subject: "", message: "" });
        },
        () => {
          setStatus("error");
        }
      );
  };

  return (
    <section className="contact-section">
      <motion.div
        className="contact-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1>Contact Me</h1>
        <p className="subtitle">
          Have a question, collaboration idea, or opportunity? Let’s connect.
        </p>

        <div className="contact-grid">
          {/* LEFT SIDE */}
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3>Let's Connect</h3>
            <p>
              I’m open to software development, testing, or freelance opportunities.
              Feel free to reach out or connect via any of the platforms below.
            </p>
            <div className="contact-icons">
              <a
                href="mailto:nwangangaemmanuel2@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaEnvelope />
              </a>
              <a
                href="https://www.linkedin.com/in/nwanganga-emmanuel"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/Emmanuel-N-C"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
            </div>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.form
            className="contact-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="send-btn">
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>

            {status === "success" && (
              <p className="success-msg">✅ Message sent successfully!</p>
            )}
            {status === "error" && (
              <p className="error-msg">❌ Something went wrong. Try again later.</p>
            )}
          </motion.form>
        </div>
      </motion.div>
    </section>
  );
}

export default Contact;
