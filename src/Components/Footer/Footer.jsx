import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <p className="footer-name">Mariya Sultana</p>
        <nav className="footer-nav">
          <a href="https://github.com/mariyasf" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/mariyasf/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
