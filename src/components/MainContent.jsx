import { motion } from 'framer-motion';
import { Briefcase, FileText, Award, Link2, ChevronRight, X } from 'lucide-react';
import { useState } from 'react';

// Import images
import html5Icon from '../assets/html-5.png';
import css3Icon from '../assets/css-3.png';
import jsIcon from '../assets/js.png';
import reactIcon from '../assets/react.png';
import vueIcon from '../assets/vue.png';
import phpIcon from '../assets/php.png';
import mysqlIcon from '../assets/mysql.png';
import gitlabIcon from '../assets/gitlab.png';
import vscodeIcon from '../assets/vscode.png';
import figmaIcon from '../assets/figma.png';
import badgeIcon from '../assets/badge.png';
import cert1Icon from '../assets/cert1.png';
import cert2Icon from '../assets/cert2.png';

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
    { name: 'HTML5', icon: html5Icon },
    { name: 'CSS3', icon: css3Icon },
    { name: 'JavaScript', icon: jsIcon },
  ],
  'JavaScript Frameworks': [
    { name: 'React', icon: reactIcon },
    { name: 'Vue', icon: vueIcon },
  ],
  'Backend & Database': [
    { name: 'PHP', icon: phpIcon },
    { name: 'MySQL', icon: mysqlIcon },
    { name: 'Basic Backend', icon: null },
    { name: 'API Integration', icon: null },
  ],
  'Tools & Skills': [
    { name: 'Git', icon: gitlabIcon },
    { name: 'VS Code', icon: vscodeIcon },
    { name: 'Figma', icon: figmaIcon },
    { name: 'Responsive Design', icon: null },
    { name: 'RBAC', icon: null },
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
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <section className="py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Left Column - About & Tech Stack */}
          <div className="flex-1 space-y-5">
            {/* About Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl p-6 border border-gray-200/60"
            >
              <div className="flex items-center gap-2.5 mb-5">
                <FileText size={18} className="text-gray-500" />
                <h2 className="text-lg font-bold text-gray-900">About</h2>
              </div>

              <div className="space-y-4 text-gray-600 text-[15px] leading-relaxed">
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
            </motion.div>

            {/* Tech Stack Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-2xl p-6 border border-gray-200/60"
            >
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-2.5">
                  <svg className="w-[18px] h-[18px] text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                  <h2 className="text-lg font-bold text-gray-900">Tech Stack</h2>
                </div>
                <a href="#skills" className="text-sm text-gray-500 hover:text-gray-700 flex items-center gap-1">
                  View All <ChevronRight size={14} />
                </a>
              </div>

              <div className="space-y-5">
                {Object.entries(techStack).map(([category, skills]) => (
                  <div key={category}>
                    <h3 className="text-sm font-semibold text-gray-900 mb-3">{category}</h3>
                    <div className="flex flex-wrap gap-2">
                      {skills.map((skill) => (
                        <div
                          key={skill.name}
                          className="flex items-center gap-2 px-3 py-2 bg-gray-50 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors"
                        >
                          {skill.icon && (
                            <img 
                              src={skill.icon} 
                              alt={skill.name}
                              className="w-4 h-4 object-contain"
                            />
                          )}
                          <span>{skill.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Certifications Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-2xl p-6 border border-gray-200/60"
            >
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-2.5">
                  <Award size={18} className="text-gray-500" />
                  <h2 className="text-lg font-bold text-gray-900">Recent Certifications</h2>
                </div>
                <a href="#" className="text-sm text-gray-500 hover:text-gray-700 flex items-center gap-1">View All <ChevronRight size={14} /></a>
              </div>

              <div className="space-y-3">
                {certifications.map((cert) => (
                  <div
                    key={cert.title}
                    onClick={openModal}
                    className="group flex items-start justify-between p-4 bg-gray-50 rounded-xl cursor-pointer hover:bg-gray-100 transition-all"
                  >
                    <div>
                      <h3 className="text-sm font-semibold text-gray-900">{cert.title}</h3>
                      <p className="text-sm text-gray-500">{cert.issuer}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium text-gray-600 bg-white px-2 py-1 rounded-md border border-gray-100">
                        {cert.score}
                      </span>
                      <div className="flex items-center gap-1 text-xs text-blue-600 font-medium group-hover:text-blue-700 transition-colors">
                        <span>View</span>
                        <ChevronRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column - Featured Card & Experience */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:w-72 shrink-0 space-y-5"
          >
            {/* Featured Certification Card */}
            <a
              href="https://www.credly.com/badges/53a65aa4-0b25-44a2-8489-c89bb9b67047/facebook_messenger"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-5 text-white shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer block"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <p className="text-[10px] text-gray-400 mb-1.5 font-medium tracking-widest uppercase">Certified</p>
                  <h3 className="text-xl font-bold mb-0.5 tracking-tight">IT Specialist</h3>
                  <p className="text-sm text-gray-400">HTML and CSS</p>
                </div>
                <div className="relative">
                  <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <img src={badgeIcon} alt="Credly Badge" className="w-11 h-11 object-contain" />
                  </div>
                  <div className="absolute -top-0.5 -right-0.5 w-5 h-5 bg-white rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-1.5 pt-3 border-t border-white/10">
                <span className="text-[11px] bg-white/10 px-2.5 py-1 rounded-full font-medium">982/1000</span>
                <span className="text-[11px] bg-white/10 px-2.5 py-1 rounded-full font-medium">Certiport</span>
              </div>

              <div className="flex items-center justify-between mt-3">
                <span className="text-[11px] text-gray-400 flex items-center gap-1">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  View on Credly
                </span>
                <span className="text-[11px] text-gray-500">Verify →</span>
              </div>
            </a>

            {/* AI Ready ASEAN Card */}
            <div className="group bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl p-5 text-white shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer block">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <p className="text-[10px] text-blue-200 mb-1.5 font-medium tracking-widest uppercase">Certified</p>
                  <h3 className="text-xl font-bold mb-0.5 tracking-tight">AI Ready</h3>
                  <p className="text-sm text-blue-200">ASEAN</p>
                </div>
                <div className="relative">
                  <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <div className="w-11 h-11 rounded-full bg-white/20 flex items-center justify-center text-lg font-bold text-white">AI</div>
                  </div>
                  <div className="absolute -top-0.5 -right-0.5 w-5 h-5 bg-white rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-1.5 pt-3 border-t border-white/10">
                <span className="text-[11px] bg-white/10 px-2.5 py-1 rounded-full font-medium">Verified</span>
                <span className="text-[11px] bg-white/10 px-2.5 py-1 rounded-full font-medium">2024</span>
              </div>

              <div className="flex items-center justify-between mt-3">
                <span className="text-[11px] text-blue-200 flex items-center gap-1">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  View Certificate
                </span>
                <span className="text-[11px] text-blue-300/70">Verify →</span>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-200/60">
              <div className="flex items-center gap-2.5 mb-5">
                <Briefcase size={18} className="text-gray-500" />
                <h2 className="text-lg font-bold text-gray-900">Experience</h2>
              </div>

              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-[5px] top-2 bottom-2 w-px bg-gray-100 h-[10px]"></div>

                <div className="space-y-5">
                  {experience.map((exp, index) => (
                    <div key={index} className="relative pl-6">
                      {/* Timeline dot */}
                      <div className={`absolute left-0 top-1.5 w-3 h-3 rounded-full border-2 ${
                        exp.current 
                          ? 'bg-gray-900 border-gray-900' 
                          : 'bg-white border-gray-300'
                      }`}></div>

                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <h3 className="text-sm font-medium text-gray-900">{exp.title}</h3>
                          <p className="text-sm text-gray-500">{exp.company}</p>
                        </div>
                        <span className="text-sm text-gray-400 shrink-0">{exp.year}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Certification Modal */}
      {isModalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-6"
          onClick={closeModal}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-white border-b border-gray-100 p-6 flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold text-gray-900">IT Specialist - HTML and CSS</h2>
                <p className="text-sm text-gray-500">Certiport Certification</p>
              </div>
              <button
                onClick={closeModal}
                className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            <div className="p-6">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Certificate Image 1 */}
                <div className="space-y-3">
                  <h3 className="text-sm font-medium text-gray-900">Certificate Overview</h3>
                  <div className="h-80 rounded-xl overflow-hidden bg-gray-50 border border-gray-100 shadow-sm">
                    <img 
                      src={cert1Icon} 
                      alt="IT Specialist Certificate - Page 1"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>

                {/* Certificate Image 2 */}
                <div className="space-y-3">
                  <h3 className="text-sm font-medium text-gray-900">Score Details</h3>
                  <div className="h-80 rounded-xl overflow-hidden bg-gray-50 border border-gray-100 shadow-sm">
                    <img 
                      src={cert2Icon} 
                      alt="IT Specialist Certificate - Page 2"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              <div className="p-4 bg-blue-50 rounded-xl border border-blue-100">
                <h3 className="text-sm font-medium text-gray-900 mb-2">Skills Validated</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                  <div className="flex items-center gap-2 text-xs text-gray-600">
                    <img src={html5Icon} alt="HTML5" className="w-4 h-4" />
                    <span>HTML5</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-600">
                    <img src={css3Icon} alt="CSS3" className="w-4 h-4" />
                    <span>CSS3</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-600">
                    <img src={jsIcon} alt="JavaScript" className="w-4 h-4" />
                    <span>JavaScript</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-600">
                    <span className="w-4 h-4 bg-gray-300 rounded flex items-center justify-center text-[8px]">+</span>
                    <span>More</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default MainContent;
