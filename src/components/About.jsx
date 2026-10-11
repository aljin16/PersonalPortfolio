import { ArrowUpRight, Award } from "lucide-react";
import { platforms } from "../data";
import certificate from "../assets/cert1.png";
import score from "../assets/cert2.png";
import aiCertificate from "../assets/cert1.jpg";
export default function About() {
  return (
    <section
      id="about"
      className="section about-section container"
      tabIndex={-1}
      aria-labelledby="about-title"
    >
      <div className="about-layout">
        <div className="portrait-column" data-reveal>
          <div className="portrait-frame">
            <img
              src="/images/aljean.webp"
              alt="Aljean Sinohin"
              width="720"
              height="900"
              loading="lazy"
              decoding="async"
            />
            <span className="portrait-tag">
              A little about the person
              <br />
              behind the pixels.
            </span>
          </div>
          <div className="portrait-caption">
            <span>Aljean Sinohin</span>
            <span>Nueva Ecija, PH ↗</span>
          </div>
        </div>
        <div className="about-copy" data-reveal>
          <p className="eyebrow section-kicker">
            03 / Design meets development
          </p>
          <h2 id="about-title">
            Thoughtful by design.
            <br />
            <span className="teal">Practical by nature.</span>
          </h2>
          <p>
            I’m Aljean, a web designer and developer based in the Philippines. I
            help businesses create clear, professional websites with practical
            functionality and a consistent experience across devices.
          </p>
          <p>
            My work includes business websites, landing pages, website
            improvements, and custom web applications. I focus on thoughtful
            layouts, straightforward navigation, and details that make a website
            easier to use and maintain.
          </p>
          <div className="skill-groups">
            <div>
              <h3>Platforms</h3>
              <p>{platforms.join(" · ")}</p>
            </div>
            <div>
              <h3>Development</h3>
              <p>
                HTML &amp; CSS · JavaScript · React · Vue · Tailwind CSS · PHP ·
                MySQL · Supabase
              </p>
            </div>
            <div>
              <h3>Design &amp; workflow</h3>
              <p>Figma · Responsive Design · Git · API Integration · Vercel</p>
            </div>
          </div>
        </div>
      </div>
      <div className="credentials" data-reveal>
        <div className="credential-main">
          <Award size={30} strokeWidth={1.4} aria-hidden="true" />
          <div>
            <p className="eyebrow">Certiport IT Specialist</p>
            <h3>HTML and CSS</h3>
            <div className="credential-links">
              <a
                className="text-link"
                href="https://www.credly.com/badges/53a65aa4-0b25-44a2-8489-c89bb9b67047/facebook_messenger"
                target="_blank"
                rel="noopener noreferrer"
              >
                View credential <ArrowUpRight size={15} aria-hidden="true" />
              </a>
              <a href={certificate} target="_blank" rel="noopener noreferrer">
                Certificate
              </a>
              <a href={score} target="_blank" rel="noopener noreferrer">
                Score report
              </a>
            </div>
          </div>
          <div className="credential-score">
            <strong>
              982<span>/1000</span>
            </strong>
            <span>Certification score</span>
          </div>
        </div>
        <div className="education">
          <p className="eyebrow">Education</p>
          <h3>BS Information Technology</h3>
          <p>
            Nueva Ecija University of Science and Technology
            <br />
            2022–2026 studies
          </p>
          <a
            className="text-link"
            href={aiCertificate}
            target="_blank"
            rel="noopener noreferrer"
          >
            AI Ready ASEAN · Certificate{" "}
            <ArrowUpRight size={15} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
