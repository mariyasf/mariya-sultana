import React from "react";
import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import "./CSS/Header.css";
import "./CSS/animations.css";

const Header = () => {
  return (
    <div className="header-container">
      <div className="hero-section" id="header">
        <div className="hero-content">
          <div className="hero-text animate-fadeInLeft">
            <p className="hero-greeting">WELCOME TO MY WORLD ✨</p>
            <h1 className="hero-name">
              <span className="hero-name-big">Hi</span>
              <span className="hero-name-small">, I'm Mariya Sultana</span>
            </h1>
            <h2 className="hero-title">
              <span className="title-magenta">Software</span> Engineer
            </h2>
            <p className="hero-subtitle">mPair Technologies Ltd.</p>
            <p className="hero-description">
              I build end-to-end SaaS products — designing intuitive frontends,
              developing robust backends with GraphQL & REST APIs, and managing
              servers and CI/CD for smooth deployment and performance.
            </p>
          </div>

          <div className="hero-actions animate-fadeInRight">
            <div className="hero-buttons">
              <a className="btn-hero btn-my-projects" href="#portfolio">
                My Projects
              </a>
              <a
                className="btn-hero btn-download-cv"
                href="/Mariya-Sultana.pdf"
                download
              >
                Download CV
              </a>
            </div>
            <div className="social-links">
              <a href="#" className="social-icon" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="#" className="social-icon" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="#" className="social-icon" aria-label="X">
                <FaXTwitter />
              </a>
              <a href="#" className="social-icon" aria-label="Facebook">
                <FaFacebook />
              </a>
            </div>
          </div>
        </div>
        {/* <div className="hero-image-container animate-fadeInRight">
          <img
            src="/images/hero-illustration.png"
            alt="Mariya Sultana"
            className="hero-image"
          />
        </div> */}
        <a href="#education" className="scroll-indicator" aria-label="Scroll down">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 5v14M19 12l-7 7-7-7" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Header;
