import { ArrowUpRight, Database, Package, ReceiptText } from "lucide-react";
import { projects } from "../data";
import ProjectImage from "./ProjectImage";

function ProjectCover({ project }) {
  if (!project.url) {
    return (
      <div className="project-visual system-cover" aria-label="Illustrated cover for the Rice Store POS project">
        <div className="system-symbol" aria-hidden="true"><Database size={32} strokeWidth={1.3} /></div>
        <span className="system-wordmark">Rice<span>POS</span></span>
        <p>Sales &amp; inventory, simplified.</p>
        <div className="system-features" aria-hidden="true">
          <span><ReceiptText size={15} /> Sales</span><span><Package size={15} /> Inventory</span>
        </div>
      </div>
    );
  }
  return (
    <a className={`project-visual ${project.id}-visual`} href={project.url} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.name} project (opens in a new tab)`}>
      <div className="project-window">
        <div className="browser-bar" aria-hidden="true"><i /><i /><i /><span>{project.name}</span></div>
        <ProjectImage name={project.image} alt={project.alt} sizes="(max-width: 768px) 90vw, 540px" />
      </div>
      <span className="visual-arrow" aria-hidden="true"><ArrowUpRight size={19} /></span>
    </a>
  );
}

export default function Projects() {
  return (
    <section id="work" className="work-section section container" tabIndex={-1} aria-labelledby="work-title">
      <span id="projects" className="anchor-alias" aria-hidden="true" />
      <div className="section-heading" data-reveal>
        <div><p className="section-label">Portfolio</p><h2 id="work-title">Selected work</h2></div>
        <p>A few websites and applications<br className="desktop-break" /> I’ve helped bring to life.</p>
      </div>
      <div className="project-grid">
        {projects.map((project, index) => (
          <article className="project-card" key={project.id} data-reveal data-delay={index % 2 * 0.06}>
            <ProjectCover project={project} />
            <div className="project-info">
              <p className="project-category">{project.category}</p>
              <div className="project-title-row">
                <h3>{project.name}</h3>
                <span className="project-year">2025</span>
              </div>
              <p className="project-description">{project.description}</p>
              <ul className="tags" aria-label={`${project.name} technologies`}>
                {project.technologies.map((tag) => <li key={tag}>{tag}</li>)}
              </ul>
              <div className="project-bottom">
                <p>Academic project<span>{project.contribution}</span></p>
                {project.url ? (
                  <a className="text-link" href={project.url} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.name} project (opens in a new tab)`}>
                    View site <ArrowUpRight size={16} aria-hidden="true" />
                  </a>
                ) : <span className="demo-unavailable">Demo unavailable</span>}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
