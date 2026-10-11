import { ArrowUpRight } from "lucide-react";
import { services } from "../data";
export default function Services() {
  return (
    <section
      id="services"
      className="services-section section"
      tabIndex={-1}
      aria-labelledby="services-title"
    >
      <div className="container services-layout">
        <div className="services-intro" data-reveal>
          <p className="eyebrow section-kicker">02 / What I can help with</p>
          <h2 id="services-title">
            Web design with a <span className="teal">practical purpose.</span>
          </h2>
          <p>
            From a first impression to the next step, every detail has a job to
            do.
          </p>
          <a href="#contact" className="text-link">
            Let’s find the right approach{" "}
            <ArrowUpRight size={18} aria-hidden="true" />
          </a>
        </div>
        <div className="service-list">
          {services.map(([title, description], index) => (
            <div
              className="service-row"
              key={title}
              data-reveal
              data-delay={index * 0.05}
            >
              <span className="service-number">0{index + 1}</span>
              <div>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
              <ArrowUpRight
                className="service-arrow"
                size={22}
                strokeWidth={1.4}
                aria-hidden="true"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
