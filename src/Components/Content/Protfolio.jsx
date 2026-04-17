import { useEffect, useMemo, useState } from "react";
import "./CSS/protfolio.css";
import "./CSS/animations.css";
import ProtfolioCard from "./ProtfolioCard";

const hasTag = (proj, tag) =>
  Array.isArray(proj.filterTags) && proj.filterTags.includes(tag);

const Protfolio = () => {
  const [project, setProject] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    fetch("/data.json", { cache: "no-store" })
      .then((res) => {
        if (!res.ok) throw new Error(`Failed to load projects (${res.status})`);
        return res.json();
      })
      .then((data) => setProject(Array.isArray(data) ? data : []))
      .catch(() => setProject([]));
  }, []);

  /** Client projects first so they stay visible without scrolling past 18+ cards */
  const orderedProjects = useMemo(() => {
    return [...project].sort((a, b) => {
      const aClient = hasTag(a, "client");
      const bClient = hasTag(b, "client");
      if (aClient !== bClient) return aClient ? -1 : 1;
      return (a.id ?? 0) - (b.id ?? 0);
    });
  }, [project]);

  const filteredProjects =
    filter === "all"
      ? orderedProjects
      : orderedProjects.filter(
          (proj) =>
            hasTag(proj, filter) ||
            proj.categories?.toLowerCase().includes(filter.toLowerCase()),
        );

  return (
    <div className="portfolio-section scroll-reveal" id="portfolio">
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
            className={`filter-btn ${filter === "client" ? "active" : ""}`}
            onClick={() => setFilter("client")}
          >
            Client project
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
