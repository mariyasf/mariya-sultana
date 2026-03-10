import { useEffect, useState } from "react";
import "./CSS/protfolio.css";
import "./CSS/animations.css";
import ProtfolioCard from "./ProtfolioCard";

const Protfolio = () => {
  const [project, setProject] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        setProject(data);
      });
  }, []);

  const filteredProjects =
    filter === "all"
      ? project
      : project.filter(
          (proj) =>
            proj.filterTags?.includes(filter) ||
            proj.categories?.toLowerCase().includes(filter.toLowerCase()),
        );

  return (
    <div className="portfolio-section" id="portfolio">
      <div className="portfolio-container">
        <div className="portfolio-header animate-fadeInUp">
          <h2>My Portfolio</h2>
          <p>Explore my recent projects and creative works</p>
        </div>

        <div className="filter-buttons animate-slideDown">
          <button
            className={`filter-btn ${filter === "all" ? "active" : ""}`}
            onClick={() => setFilter("all")}
          >
            All Projects
          </button>
          <button
            className={`filter-btn ${filter === "web" ? "active" : ""}`}
            onClick={() => setFilter("web")}
          >
            Web Design
          </button>
          <button
            className={`filter-btn ${filter === "react" ? "active" : ""}`}
            onClick={() => setFilter("react")}
          >
            React
          </button>
          <button
            className={`filter-btn ${filter === "javascript" ? "active" : ""}`}
            onClick={() => setFilter("javascript")}
          >
            JavaScript
          </button>
        </div>

        <div className="portfolio-grid">
          {filteredProjects.map((proj) => (
            <ProtfolioCard key={proj.id} proj={proj}></ProtfolioCard>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="no-projects animate-fadeInUp">
            <p>No projects found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Protfolio;
