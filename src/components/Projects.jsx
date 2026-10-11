import { ArrowUpRight, ArrowRight } from "lucide-react";
import { projects } from "../data";
import ProjectImage from "./ProjectImage";
function ProjectInfo({ project, index }) {
  return (
    <div className="project-info">
      <p className="eyebrow project-category">
        <span>0{index + 1}</span>
        {project.category}
      </p>
      <h3>{project.name}</h3>
      <p className="project-description">{project.description}</p>
      <p className="project-role">
        <span>My contribution</span>
        {project.contribution}
      </p>
      <ul className="tags" aria-label={`${project.name} technologies`}>
        {project.technologies.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
      <div className="project-bottom">
        <span>Academic project · 2025</span>
        {project.url ? (
          <a
            className="text-link"
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${project.name} project (opens in a new tab)`}
          >
            View Project <ArrowUpRight size={18} aria-hidden="true" />
          </a>
        ) : (
          <span className="demo-unavailable">Live demo unavailable</span>
        )}
      </div>
    </div>
  );
}
export default function Projects() {
  return (
    <section
      id="work"
      className="work-section section container"
      tabIndex={-1}
      aria-labelledby="work-title"
    >
      <span id="projects" className="anchor-alias" aria-hidden="true" />
      <div className="section-heading" data-reveal>
        <div>
          <p className="eyebrow section-kicker">01 / Selected projects</p>
          <h2 id="work-title">
            Selected work<span className="teal">.</span>
          </h2>
        </div>
        <p>
          A closer look at the websites
          <br className="desktop-break" /> and tools I’ve worked on.
        </p>
      </div>
      <article className="project project-featured" data-reveal>
        <a
          className="project-visual cleanpro-visual"
          href={projects[0].url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View CleanPro project (opens in a new tab)"
        >
          <div className="project-window">
            <div className="browser-bar" aria-hidden="true">
              <i />
              <i />
              <i />
              <span>clean-pro-navy.vercel.app</span>
            </div>
            <ProjectImage
              name="cleanpro"
              alt={projects[0].alt}
              sizes="(max-width: 768px) 90vw, 780px"
            />
          </div>
          <span className="visual-caption">
            A clearer path from browsing to booking.
          </span>
          <span className="visual-arrow" aria-hidden="true">
            <ArrowUpRight />
          </span>
        </a>
        <ProjectInfo project={projects[0]} index={0} />
      </article>
      <div className="project-grid">
        {projects.slice(1, 3).map((project, index) => (
          <article
            key={project.id}
            className="project project-standard"
            data-reveal
            data-delay={index * 0.08}
          >
            <a
              href={project.url}
              className={`project-visual ${project.id}-visual`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.name} project (opens in a new tab)`}
            >
              <div className="project-window">
                <ProjectImage name={project.image} alt={project.alt} />
              </div>
              <span className="visual-arrow" aria-hidden="true">
                <ArrowUpRight />
              </span>
            </a>
            <ProjectInfo project={project} index={index + 1} />
          </article>
        ))}
      </div>
      <article className="project project-system" data-reveal>
        <div
          className="system-cover"
          aria-label="Typographic cover for the Rice Store POS project"
        >
          <p className="eyebrow">Custom application / 2025</p>
          <span className="system-wordmark">
            Rice<span>POS</span>
            <span className="system-dot">.</span>
          </span>
          <div className="system-cover-bottom">
            <span>Sales. Stock. Deliveries.</span>
            <ArrowRight size={30} strokeWidth={1} aria-hidden="true" />
          </div>
        </div>
        <ProjectInfo project={projects[3]} index={3} />
      </article>
    </section>
  );
}
