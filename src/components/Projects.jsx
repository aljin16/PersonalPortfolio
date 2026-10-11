import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Reveal } from './Motion';
import { FolderOpen, ArrowUpRight, Monitor } from 'lucide-react';
import './Projects.css';

const ProjectLink = motion.a;

const projects = [
  {
    title: 'Enviro Cleanse',
    year: '2026',
    client: true,
    thumbnail: '/projects/enviro-cleanse.webp',
    url: 'https://www.envirocleanse.com.au/',
    description: 'A modern, SEO-focused Wix Studio website for a Sydney-based commercial and strata cleaning company, designed to showcase property services, improve local search visibility, and convert potential clients into qualified enquiries.',
    tags: ['Wix Studio', 'Local SEO', 'UI/UX', 'Lead Generation'],
    features: [
      'Responsive website with optimized service navigation and enquiry-focused design.',
      'Local SEO-focused service pages supporting visibility across Sydney.',
      'Dedicated commercial, strata, and property cleaning service information.',
      'Streamlined quote enquiries with prominent calls to action.',
      'Mobile-friendly layouts and clear customer navigation.',
    ],
  },
  {
    title: 'Mrs. Brand Advisor',
    year: '2026',
    client: true,
    thumbnail: '/projects/mrs-brand-advisor.webp',
    url: 'https://www.mrsbrandadvisor.com/',
    description: 'A professional, conversion-focused consulting website designed to strengthen brand credibility, showcase business growth and strategy services, and guide entrepreneurs and business owners toward personalized consultations.',
    tags: ['Wix', 'UI/UX', 'Brand Strategy', 'Conversion Design'],
    features: [
      'Responsive website presenting consulting services and strategic business solutions.',
      'Consultation booking pathways with prominent calls to action.',
      'Professional brand presentation and intuitive user navigation.',
      'Trust-building website content and client testimonials.',
      'Clear service information supporting potential client enquiries.',
    ],
  },
  {
    title: 'E-Mekaniko',
    thumbnail: '/projects/e-mekaniko.webp',
    year: '2025',
    url: 'https://e-mekaniko-qqz9.vercel.app/',
    description: 'A professional web platform for auto-mechanic services, connecting vehicle owners with reliable repair and maintenance solutions.',
    features: [
      'Service landing page with booking capabilities',
      'Admin dashboard for business management',
      'Service catalog and pricing management',
      'Appointment scheduling system',
    ],
    tags: ['Landing Page', 'Dashboard', 'Booking'],
  },
  {
    title: 'CleanPro',
    thumbnail: '/projects/cleanpro.webp',
    year: '2025',
    url: 'https://clean-pro-navy.vercel.app/',
    description: 'A cleaning service management platform that connects customers with professional cleaning services.',
    features: [
      'Service booking and scheduling system',
      'Administrative dashboard',
      'Staff management module',
      'Service package configuration',
    ],
    tags: ['Service Platform', 'Booking', 'Management'],
  },
  {
    title: 'FureverCare',
    thumbnail: '/projects/furevercare.webp',
    year: '2025',
    url: 'https://furever-care-eight.vercel.app/',
    description: 'A pet shop and services landing page designed to showcase pet care offerings and facilitate service bookings.',
    features: [
      'Modern, pet-friendly UI design',
      'Service showcase and information',
      'Booking-focused user interface',
      'Contact and inquiry system',
    ],
    tags: ['Landing Page', 'UI/UX', 'Pet Services'],
  },
];

function ProjectPreview({ project }) {
  const [failed, setFailed] = useState(false);
  return <div className="project-preview">
    {failed ? <div className="project-preview-fallback" role="img" aria-label={project.title + ' website preview unavailable'}>
      <Monitor size={32} aria-hidden="true" />
      <strong>{project.title}</strong>
      <span>Preview unavailable · View the live website below</span>
    </div> : <img src={project.thumbnail} alt={project.title + ' homepage showing its navigation and main website content'} width="1440" height="900" loading="lazy" decoding="async" onError={() => setFailed(true)} />}
  </div>;
}

export default function Projects() {
  const reduced = useReducedMotion();
  return <section id="projects" className="py-0 px-4 bg-white dark:bg-gray-900">
    <div className="max-w-6xl mx-auto">
      <Reveal className="portfolio-card projects-panel">
        <div className="flex items-center gap-2.5 mb-1">
          <FolderOpen size={16} className="text-gray-500 dark:text-gray-400" aria-hidden="true" />
          <h2 className="text-lg font-extrabold text-gray-900 dark:text-white">Recent Projects</h2>
        </div>
        <div className="project-grid grid md:grid-cols-2">
          {projects.map(project => <Reveal key={project.title} className="project-reveal">
            <ProjectLink href={project.url} target="_blank" rel="noopener noreferrer"
              aria-label={'View ' + project.title + ' website (opens in a new tab)'}
              className={'project-card' + (project.client ? ' project-card--client' : '')}
              initial={false} whileHover={reduced ? undefined : { y: -4 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}>
              <ProjectPreview project={project} />
              <div className="project-content">
                <div className="project-heading">
                  <h3>{project.title}</h3>
                  <span className="project-arrow" aria-hidden="true"><ArrowUpRight size={18} /></span>
                </div>
                <div className="project-meta">
                  <span className="project-year">{project.year}{project.client && <span className="project-client-label">Client work</span>}</span>
                  <span className="project-status"><span aria-hidden="true" />Live Project</span>
                </div>
                <p>{project.description}</p>
                <div className="project-tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
                <div className="project-feature-block">
                  <ul className="project-features">{project.features.slice(0, 2).map(feature => <li key={feature}>{feature}</li>)}</ul>
                  {project.features.length > 2 && <span className="project-more-features">+{project.features.length - 2} more features</span>}
                </div>
                <span className="project-action">View Project<ArrowUpRight size={16} aria-hidden="true" /></span>
              </div>
            </ProjectLink>
          </Reveal>)}
        </div>
      </Reveal>
    </div>
  </section>;
}
