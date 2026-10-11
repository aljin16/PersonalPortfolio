import { ArrowDown, ArrowUpRight, Asterisk } from "lucide-react";
import { platforms } from "../data";
import ProjectImage from "./ProjectImage";
export default function Hero() {
  return (
    <>
      <section
        id="home"
        className="hero container"
        aria-labelledby="hero-title"
      >
        <div className="hero-copy">
          <p className="eyebrow hero-enter">
            Aljean Sinohin · Web Designer &amp; Developer
          </p>
          <h1 id="hero-title" className="hero-enter">
            Thoughtful websites.
            <br />
            <span>Built for your business.</span>
          </h1>
          <p className="hero-description hero-enter">
            I design and build responsive websites that make your services
            clear, your brand credible, and the next step easy for your
            customers.
          </p>
          <div className="hero-actions hero-enter">
            <a className="button" href="#work">
              Explore My Work <ArrowDown size={18} aria-hidden="true" />
            </a>
            <a className="button button-outline" href="#contact">
              Let’s Talk <ArrowUpRight size={18} aria-hidden="true" />
            </a>
          </div>
          <p className="location hero-enter">
            <span aria-hidden="true" />
            Based in the Philippines · Working with clients remotely
          </p>
        </div>
        <div
          className="hero-art hero-enter"
          aria-label="A preview of my website projects"
        >
          <div className="art-label">
            <span>DESIGN WITH PURPOSE</span>
            <Asterisk size={35} strokeWidth={1.4} aria-hidden="true" />
          </div>
          <div className="hero-preview preview-main">
            <div className="browser-bar" aria-hidden="true">
              <i />
              <i />
              <i />
              <span>cleanpro · service website</span>
              <ArrowUpRight size={12} />
            </div>
            <ProjectImage
              name="cleanpro"
              alt="Actual CleanPro website preview."
              eager
            />
          </div>
          <div className="hero-preview preview-secondary">
            <div className="browser-bar" aria-hidden="true">
              <i />
              <i />
              <i />
              <span>e-mekaniko</span>
            </div>
            <ProjectImage
              name="mekaniko"
              alt="Actual E-Mekaniko automotive website preview."
              eager
              sizes="(max-width: 768px) 55vw, 320px"
            />
          </div>
          <div className="art-caption">
            <span>
              Clear design.
              <br />
              Practical development.
            </span>
            <span className="art-plus" aria-hidden="true">
              ↗
            </span>
          </div>
        </div>
      </section>
      <div className="platform-strip">
        <div className="container platform-inner">
          <p>
            THE RIGHT TOOLS
            <br />
            <span>FOR YOUR NEXT WEBSITE</span>
          </p>
          <ul aria-label="Website platforms">
            {platforms.map((platform) => (
              <li key={platform}>{platform}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
