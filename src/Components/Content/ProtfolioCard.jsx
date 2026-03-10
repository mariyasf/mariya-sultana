import { FaEye, FaLink, FaGithub } from "react-icons/fa";
import "./CSS/protfolio.css";
import "./CSS/animations.css";

const ProtfolioCard = ({ proj }) => {
  const { image, live_link, title, github_link, categories } = proj;

  return (
    <div className="portfolio-card hover-lift">
      <div className="card-image-container">
        <img src={image} alt={title} className="card-image" loading="lazy" width="350" height="250" />
        <div className="card-overlay">
          <div className="card-actions">
            <a
              href={live_link}
              className="action-btn preview-btn btn-hover-slide"
              target="_blank"
              rel="noopener noreferrer"
              title="Live Preview"
            >
              <FaEye />
              <span>Preview</span>
            </a>
            <a
              href={github_link}
              className="action-btn github-btn btn-hover-slide"
              target="_blank"
              rel="noopener noreferrer"
              title="View Code"
            >
              <FaGithub />
              <span>Code</span>
            </a>
          </div>
        </div>
      </div>

      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        {categories && (
          <div className="card-categories">
            {categories.split(",").map((category, index) => (
              <span key={index} className="category-tag">
                {category.trim()}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProtfolioCard;
