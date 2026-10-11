import { Reveal } from './Motion';
import CertificateDialog from './CertificateDialog';
import { Layers } from 'lucide-react';
import { MapPin, Calendar, Mail, Send, Users, Award, ArrowUpRight, Briefcase, FileText, Link2, ChevronRight, X } from 'lucide-react';
import { useState } from 'react';
import htmlIcon from '../assets/html-5.png';
import cssIcon from '../assets/css-3.png';
import jsIcon from '../assets/js.png';
import reactIcon from '../assets/react.png';
import vueIcon from '../assets/vue.png';
import phpIcon from '../assets/php.png';
import mysqlIcon from '../assets/mysql.png';
const gitlabIcon = '/brands/git.svg';
import vscodeIcon from '../assets/vscode.png';
import figmaIcon from '../assets/figma.png';
import tailwindIcon from '../assets/tailwind.png';
import supabaseIcon from '../assets/supabase.png';
import vercelIcon from '../assets/vercel.svg';
import aiIcon from '../assets/ai.png';
import badgeIcon from '../assets/badge.png';
import cert1Icon from '../assets/cert1.png';
import cert1Image from '../assets/cert1.jpg';
import cert2Icon from '../assets/cert2.png';
import downloadIcon from '../assets/download.png';

const experience = [
  {
    title: 'BS Information Technology',
    company: 'NEUST',
    year: '2026',
    current: true,
  },
  {
    title: 'Web-Based POS Developer',
    company: 'Academic Project',
    year: '2025',
    current: false,
  },
  {
    title: 'E-Mekaniko Developer',
    company: 'Academic Project',
    year: '2025',
    current: false,
  },
  {
    title: 'CleanPro Developer',
    company: 'Academic Project',
    year: '2025',
    current: false,
  },
  {
    title: 'FureverCare Developer',
    company: 'Academic Project',
    year: '2025',
    current: false,
  },
];

const techStack = {
  'Frontend Technologies': [
    { name: 'HTML5', icon: htmlIcon },
    { name: 'CSS3', icon: cssIcon },
    { name: 'JavaScript', icon: jsIcon },
    { name: 'Tailwind CSS', icon: tailwindIcon },
  ],
  'JavaScript Frameworks': [
    { name: 'React', icon: reactIcon },
    { name: 'Vue', icon: vueIcon },
  ],
  'Backend & Database': [
    { name: 'PHP', icon: phpIcon },
    { name: 'MySQL', icon: mysqlIcon },
    { name: 'Supabase', icon: supabaseIcon },
    { name: 'Basic Backend', icon: null },
    { name: 'API Integration', icon: null },
  ],
  'Tools & Skills': [
    { name: 'Git', icon: gitlabIcon },
    { name: 'VS Code', icon: vscodeIcon },
    { name: 'Figma', icon: figmaIcon },
    { name: 'Vercel', icon: vercelIcon },
    { name: 'AI', icon: aiIcon },
    { name: 'Responsive Design', icon: null },
    { name: 'RBAC', icon: null },
    { name: 'Wix', icon: '/brands/wix.svg', wide: true },
    { name: 'Wix Studio', icon: '/brands/wix-studio.svg', wide: true },
    { name: 'WordPress', icon: '/brands/wordpress.png' },
    { name: 'GoHighLevel', icon: '/brands/highlevel.svg' },
  ],
};

const certifications = [
  {
    title: 'IT Specialist - HTML and CSS',
    issuer: 'Certiport',
    score: '982 / 1000',
  },
];

const MainContent = () => {
  const [certificate, setCertificate] = useState(null);
  const [selectedExperience, setSelectedExperience] = useState(null);
  return <section className="main-content px-6">
    <div className="max-w-6xl mx-auto">
      <div className="main-columns flex flex-col lg:flex-row">
        <div className="main-left flex-1 min-w-0 flex flex-col">
          <Reveal className="portfolio-card about-card">
            <div className="card-heading"><FileText size={20} /><h2>About</h2></div>
            <div className="about-body">
                <p>
                  I am a motivated and growth-focused web developer with a strong foundation in front-end technologies and a genuine passion for creating clean, user-centered digital experiences. Currently completing my Bachelor of Science in Information Technology, I have developed practical skills through academic projects and hands-on development work.
                </p>
                <p>
                  My approach to development emphasizes clean code practices, intuitive UI/UX implementation, and building systems that solve real-world problems. I have experience working on full-stack web applications including point-of-sale systems, service booking platforms, and admin dashboards with role-based access control.
                </p>
                <p>
                  I am actively seeking opportunities to contribute to a professional development team where I can apply my skills, continue learning from experienced developers, and grow into a well-rounded software engineer.
                </p>
              </div>
          </Reveal>
          <Reveal className="portfolio-card tech-card">
            <div className="card-heading"><Layers size={20} /><h2>Tech Stack</h2></div>
            <div className="tech-groups">
              {Object.entries(techStack).map(([category, skills]) => <div key={category}>
                <h3>{category}</h3>
                <div className="tech-chips">{skills.map(skill => <div className="tech-chip" key={skill.name}>
                  {skill.icon && <span className={`tech-logo ${skill.wide ? 'tech-logo-wide' : ''}`}>
                    <img src={skill.icon} alt="" width={skill.wide ? 70 : 22} height="22" onError={event => { event.currentTarget.style.visibility = 'hidden'; }} />
                  </span>}
                  <span>{skill.name}</span>
                </div>)}</div>
              </div>)}
            </div>
          </Reveal>
          <Reveal className="portfolio-card">
            <div className="card-heading"><Award size={20} /><h2>Recent Certifications</h2></div>
            {certifications.map(cert => <button key={cert.title} className="cert-summary" onClick={() => setCertificate('it')} aria-label={`View ${cert.title} certificate details`}>
              <span><strong>{cert.title}</strong><span className="secondary block">{cert.issuer}</span></span>
              <span className="cert-summary-actions"><span className="score-chip">{cert.score}</span><span className="accent flex items-center gap-1">View <ChevronRight size={15} /></span></span>
            </button>)}
          </Reveal>
        </div>
        <aside className="main-sidebar lg:w-64 shrink-0 flex flex-col" aria-label="Certifications and experience">
          <Reveal as="a" lift href="https://www.credly.com/badges/53a65aa4-0b25-44a2-8489-c89bb9b67047/facebook_messenger" target="_blank" rel="noopener noreferrer" className="featured-certificate certificate-purple">
            <div className="certificate-top"><div><p className="certificate-label">Certified</p><h3>IT Specialist</h3><p>HTML and CSS</p></div><img src={badgeIcon} alt="" width="44" height="44" /></div>
            <div className="certificate-chips"><span>982/1000</span><span>Certiport</span></div>
            <div className="certificate-actions"><span>View on Credly</span><span>Verify <ArrowUpRight size={14} /></span></div>
          </Reveal>
          <Reveal as="button" lift type="button" className="featured-certificate certificate-blue" onClick={() => setCertificate('ai')} aria-label="View AI Ready ASEAN certificate">
            <div className="certificate-top"><div><p className="certificate-label">Certified</p><h3>AI Ready</h3><p>ASEAN</p></div><img src={downloadIcon} alt="" width="44" height="44" /></div>
            <div className="certificate-chips"><span>Verified</span><span>2024</span></div>
            <div className="certificate-actions"><span>View Certificate</span><span>Verify <ArrowUpRight size={14} /></span></div>
          </Reveal>
          <Reveal className="portfolio-card journey-card">
            <div className="card-heading"><Briefcase size={20} /><h2>Experience &amp; Journey</h2></div>
            <ol className="journey-list">{experience.map((exp, index) => <li key={exp.title}>
              <span className={`timeline-marker ${exp.current || selectedExperience === index ? 'is-current' : ''}`} aria-hidden="true" />
              <button className="journey-entry" onClick={() => setSelectedExperience(selectedExperience === index ? null : index)} aria-pressed={selectedExperience === index} aria-label={`Highlight ${exp.title}, ${exp.year}`}>
                <span><strong>{exp.title}</strong><span className="secondary block">{exp.company}</span></span><span className="journey-year">{exp.year}</span>
              </button>
            </li>)}</ol>
          </Reveal>
        </aside>
      </div>
    </div>
    {certificate && <CertificateDialog title={certificate === 'ai' ? 'AI Ready ASEAN Certificate' : 'IT Specialist - HTML and CSS'} onClose={() => setCertificate(null)}>
      {certificate === 'ai' ? <img src={cert1Image} alt="AI Ready ASEAN certificate" /> : <>
        <div className="certificate-documents">
          <div><h3>Certificate Overview</h3><a href={cert1Icon} target="_blank" rel="noopener noreferrer"><img src={cert1Icon} alt="IT Specialist HTML and CSS certificate" /></a></div>
          <div><h3>Score Details</h3><a href={cert2Icon} target="_blank" rel="noopener noreferrer"><img src={cert2Icon} alt="IT Specialist certificate score details" /></a></div>
        </div>
        <div className="validated-skills"><h3>Skills Validated</h3><p>HTML5 · CSS3 · JavaScript · More</p></div>
      </>}
    </CertificateDialog>}
  </section>;
};
export default MainContent;
