import { useState } from "react";
import { FaUser } from "react-icons/fa";
import "./CSS/contact.css";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";

const FORM_ENDPOINT = "https://getform.io/f/pbmqgjvb";

const Contact = () => {
  const [submitStatus, setSubmitStatus] = useState(null); // null | 'sending' | 'success' | 'error'

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    setSubmitStatus("sending");
    try {
      const formData = new FormData(form);
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setSubmitStatus("success");
        form.reset();
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    }
  };

  return (
    <section className="contact scroll-reveal" id="contact">
      <div className="contact-bg" />
      <div className="contact-inner">
        <header className="contact-header">
          <h2>Contact</h2>
          <p className="contact-header__subtitle">Get in touch with me</p>
        </header>

        <div className="contact-grid">
          <div className="contact-info-block">
            <h3 className="contact-block-title">Contact Info</h3>
            <div className="contact-info">
              <p className="contact-info__row">
                <span className="contact-info__icon"><FaUser /></span>
                <span>Mariya Sultana</span>
              </p>
               {/*
  <p className="contact-info__row">
    <span className="contact-info__icon"><IoCall /></span>
    <span>+880 1717638616</span>
  </p>
  */}
              <p className="contact-info__row">
                <span className="contact-info__icon"><MdEmail /></span>
                <span>mariasultanafahmida@gmail.com</span>
              </p>
              <p className="contact-info__row">
                <span className="contact-info__icon"><FaLocationDot /></span>
                <span>B-Block, Halishahar, Chittagong</span>
              </p>
            </div>
          </div>

          <div className="contact-form-block">
            <h3 className="contact-block-title">Contact Me</h3>
            <form className="contact-form" onSubmit={handleSubmit} method="POST">
              <input type="hidden" name="form-name" value="contact" />
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="contact-name" className="sr-only">Your Name</label>
                  <input id="contact-name" type="text" name="name" className="form-control" placeholder="Your Name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="contact-email" className="sr-only">Your Email</label>
                  <input id="contact-email" type="email" name="email" className="form-control" placeholder="Your Email" required />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="contact-subject" className="sr-only">Subject</label>
                <input id="contact-subject" type="text" name="subject" className="form-control" placeholder="Subject" />
              </div>
              <div className="form-group">
                <label htmlFor="contact-message" className="sr-only">Message</label>
                <textarea id="contact-message" className="form-control" rows="5" name="message" placeholder="Message" required></textarea>
              </div>
              {submitStatus === "success" && (
                <p className="form-message form-message--success" role="status">Message sent successfully. I'll get back to you soon.</p>
              )}
              {submitStatus === "error" && (
                <p className="form-message form-message--error" role="alert">Something went wrong. Please try again or email directly.</p>
              )}
              <button type="submit" className="contact-btn" disabled={submitStatus === "sending"}>
                {submitStatus === "sending" ? "Sending…" : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
