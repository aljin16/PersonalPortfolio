import { PanelsTopLeft, MousePointer2, RefreshCw, Code2 } from "lucide-react";
import { services } from "../data";

const serviceIcons = [PanelsTopLeft, MousePointer2, RefreshCw, Code2];

export default function Services() {
  return (
    <section
      id="services"
      className="services-section section container"
      tabIndex={-1}
      aria-labelledby="services-title"
    >
      <div className="section-heading" data-reveal>
        <div>
          <p className="section-label">Services</p>
          <h2 id="services-title">How I can help</h2>
        </div>
        <p>Thoughtful design and practical development for your next website.</p>
      </div>
      <div className="service-grid">
        {services.map(([title, description], index) => {
          const Icon = serviceIcons[index];
          return (
            <div className="service-card" key={title} data-reveal>
              <Icon size={24} strokeWidth={1.5} aria-hidden="true" />
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
