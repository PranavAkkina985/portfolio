import { useEffect } from "react";
import { Link } from "react-router-dom";
import { personal, researchInterests, skills } from "../data";
import useReveal from "../hooks/useReveal";
import profileImg from "../assets/profile.jpg";
import "./Home.css";

export default function Home() {
  const pageRef = useReveal();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main ref={pageRef}>
      {/* HERO  */}
      <section className="hero">
        <div className="hero-text">
          <div className="hero-label">{personal.tagline}</div>
          <h1 className="hero-name">
            {personal.name.split(" ")[0]}
            <br />
            <em>{personal.name.split(" ")[1]}</em>
          </h1>
          <p className="hero-role">{personal.role}</p>
          <p className="hero-bio">{personal.bio}</p>
          <div className="hero-cta-row">
            <Link to="/projects" className="btn-primary">
              View Projects
            </Link>
          </div>
        </div>

        <div className="hero-visual">
          <div className="profile-frame">
            <div className="profile-corner tl" />
            <div className="profile-corner tr" />
            <div className="profile-corner bl" />
            <div className="profile-corner br" />
            <div className="profile-img-wrap">
              <img src={profileImg} alt={personal.name} className="profile-img" />
            </div>
          </div>
        </div>
      </section>

      {/*ABOUT*/}
      <section className="section" id="about">
        <div className="section-header reveal">
          <span className="section-num">01</span>
          <h2 className="section-title">About Me</h2>
          <div className="section-line" />
        </div>

        <div className="about-grid">
          <div className="about-text reveal">
            {personal.bioParagraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <div className="about-details reveal">
            {[
              ["Name", personal.name],
              ["Phone", personal.phone],
              ["Email", personal.email],
              ["College", personal.college],
              ["Location", personal.location],
              ["Degree", personal.degree],
            ].map(([label, value]) => (
              <div className="detail-row" key={label}>
                <span className="detail-label">{label}</span>
                <span className="detail-value">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/*RESEARCH INTERESTS*/}
      <section className="section" id="research">
        <div className="section-header reveal">
          <span className="section-num">02</span>
          <h2 className="section-title">Research Interests</h2>
          <div className="section-line" />
        </div>

        <div className="research-grid reveal">
          {researchInterests.map((item) => (
            <div className="research-card" key={item.num}>
              <div className="research-num">{item.num}</div>
              <h3 className="research-title">{item.title}</h3>
              <p className="research-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/*SKILLS*/}
      <section className="section" id="skills">
        <div className="section-header reveal">
          <span className="section-num">03</span>
          <h2 className="section-title">Skills</h2>
          <div className="section-line" />
        </div>

        <div className="skills-wrap reveal">
          {skills.map((s) => (
            <span className="skill-tag" key={s}>
              {s}
            </span>
          ))}
        </div>
      </section>

      <footer className="page-footer">
        <span className="footer-text">© 2026 {personal.name}</span>
        <div className="footer-links">
          <a
            className="footer-link"
            href={personal.github}
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a className="footer-link" href={`mailto:${personal.email}`}>
            Email
          </a>
          <a
            className="footer-link"
            href={personal.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </footer>
    </main>
  );
}
