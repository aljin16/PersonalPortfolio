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
      <div className="section-heading" data-reveal>
        <div>
          <p className="section-label">About</p>
          <h2 id="about-title">A little about me</h2>
        </div>
      </div>
      <div className="about-layout">
        <div className="about-copy" data-reveal>
          <p>
            I’m Aljean, a web designer and developer based in the Philippines. I
            create clear, professional websites with practical functionality and
            a consistent experience across devices.
          </p>
          <p>
            My work includes business websites, landing pages, website
            improvements, and custom web applications. I focus on thoughtful
            layouts and straightforward navigation that make websites easier to
            use and maintain.
          </p>
        </div>
        <div className="about-details" data-reveal>
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
        <div className="credential-card">
          <div className="credential-main">
            <Award size={24} strokeWidth={1.5} aria-hidden="true" />
            <div>
              <p className="section-label">Certiport IT Specialist</p>
              <h3>HTML and CSS</h3>
            </div>
            <div className="credential-score">
              <strong>
                982<span>/1000</span>
              </strong>
              <span>Certification score</span>
            </div>
          </div>
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
        <div className="credential-card education">
          <p className="section-label">Education</p>
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
            AI Ready ASEAN · Certificate of participation
            <ArrowUpRight size={15} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
