import { useEffect } from "react";
import { projects, personal } from "../data";
import useReveal from "../hooks/useReveal";
import "./Projects.css";

export default function Projects() {
  const pageRef = useReveal();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main ref={pageRef} style={{ marginTop: "60px" }}>

      <div className="projects-hero">
        <p className="projects-eyebrow reveal">Selected Work</p>
        <h1 className="projects-heading reveal">
          Projects &amp;<br />Experiments
        </h1>
      </div>

      <div className="projects-list">
        {projects.map((project) => (
          <div className="project-item reveal" key={project.num}>
            <span className="project-num">{project.num}</span>
            <div className="project-body">
              <h2 className="project-name">{project.name}</h2>
              <p className="project-desc">{project.desc}</p>
              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span className="project-tag" key={tag}>{tag}</span>
                ))}
              </div>
            </div>
            <a
              className="project-link"
              href={project.github}
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>
          </div>
        ))}
      </div>

      <footer className="page-footer">
        <span className="footer-text">© 2026 {personal.name}</span>
        <div className="footer-links">
          <a className="footer-link" href={personal.github} target="_blank" rel="noreferrer">GitHub</a>
          <a className="footer-link" href={`mailto:${personal.email}`}>Email</a>
          <a className="footer-link" href={personal.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </footer>

    </main>
  );
}
