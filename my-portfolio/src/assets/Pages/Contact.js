import React, { useState } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import "./Contact.css";

function Contact() {
  const { t } = useTranslation();
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
        <h1>{t('contact.title')}</h1>
        <p className="subtitle">{t('contact.subtitle')}</p>

        <div className="contact-grid">
          {/* LEFT SIDE */}
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3>{t('contact.leftSide.title')}</h3>
            <p>{t('contact.leftSide.description')}</p>
            <div className="contact-icons">
              <a
                href="mailto:nwangangaemmanuel2@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaEnvelope />
              </a>
              <a
                href="https://www.linkedin.com/in/emmanuel-nwanganga-4940ab2a5"
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
                placeholder={t('contact.form.name')}
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder={t('contact.form.email')}
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="subject"
                placeholder={t('contact.form.subject')}
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder={t('contact.form.message')}
                rows="6"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="send-btn">
              {status === "sending" ? "Sending..." : t('contact.form.send')}
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