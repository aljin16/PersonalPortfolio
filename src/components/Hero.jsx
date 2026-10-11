import { ArrowDown, ArrowUpRight, MapPin } from "lucide-react";
import { platforms } from "../data";

export default function Hero() {
  return (
    <>
      <section id="home" className="hero container" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="hero-introduction">Hi, I’m Aljean Sinohin <span aria-hidden="true">↗</span></p>
          <p className="eyebrow hero-role">Web Designer &amp; Developer</p>
          <h1 id="hero-title">
            I design &amp; build<br />
            <span>thoughtful websites.</span>
          </h1>
          <p className="hero-description">
            Clean design, clear navigation, and practical development.
            I create websites that look good and make everyday interactions feel easy.
          </p>
          <div className="hero-actions">
            <a className="button" href="#work">
              View my work <ArrowDown size={17} aria-hidden="true" />
            </a>
            <a className="text-link" href="#contact">
              Get in touch <ArrowUpRight size={17} aria-hidden="true" />
            </a>
          </div>
        </div>
        <figure className="hero-portrait">
          <div className="portrait-frame">
            <img src="/images/aljean.webp" alt="Aljean Sinohin" width="720" height="900" fetchPriority="high" decoding="async" />
          </div>
          <figcaption>
            <span className="portrait-name">A designer who codes.</span>
            <span className="portrait-location"><MapPin size={13} aria-hidden="true" /> Based in the Philippines</span>
          </figcaption>
        </figure>
      </section>
      <div className="platform-strip container">
        <p>Platforms I work with</p>
        <ul aria-label="Website platforms">
          {platforms.map((platform) => <li key={platform}>{platform}</li>)}
        </ul>
      </div>
    </>
  );
}
