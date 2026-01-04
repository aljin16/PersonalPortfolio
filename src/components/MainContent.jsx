import { motion } from 'framer-motion';
import { MapPin, Calendar, Mail, Send, Users, Award, ArrowUpRight, Briefcase, FileText, Link2, ChevronRight, X } from 'lucide-react';
import { useState } from 'react';
import htmlIcon from '../assets/html-5.png';
import cssIcon from '../assets/css-3.png';
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
    { name: 'HTML5', icon: htmlIcon },
    { name: 'CSS3', icon: cssIcon },
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
  const [selectedExperience, setSelectedExperience] = useState(null);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const handleExperienceClick = (index) => {
    setSelectedExperience(selectedExperience === index ? null : index);
  };

  return (
    <section className="py-6 px-6 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Left Column - About & Tech Stack */}
          <div className="flex-1 flex flex-col gap-3">
            {/* About Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-4 border border-gray-200/60 dark:border-gray-700"
            >
              <div className="flex items-center gap-2 mb-3">
                <FileText size={16} className="text-gray-500 dark:text-gray-400" />
                <h2 className="text-base font-bold text-gray-900 dark:text-white">About</h2>
              </div>

              <div className="space-y-2 text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
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
              className="bg-white dark:bg-gray-800 rounded-xl p-4 border border-gray-200/60 dark:border-gray-700"
            >
              <div className="flex items-center gap-2 mb-3">
                  <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                  <h2 className="text-base font-bold text-gray-900 dark:text-white">Tech Stack</h2>
                </div>

              <div className="space-y-3">
                {Object.entries(techStack).map(([category, skills]) => (
                  <div key={category}>
                    <h3 className="text-xs font-semibold text-gray-900 dark:text-white mb-2">{category}</h3>
                    <div className="flex flex-wrap gap-2">
                      {skills.map((skill) => (
                        <div
                          key={skill.name}
                          className="flex items-center gap-1.5 px-2 py-1 bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-md text-xs font-medium hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                        >
                          {skill.icon && (
                            <img 
                              src={skill.icon} 
                              alt={skill.name}
                              className="w-3 h-3 object-contain"
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
              className="bg-white dark:bg-gray-800 rounded-xl p-4 border border-gray-200/60 dark:border-gray-700"
            >
              <div className="flex items-center gap-2 mb-3">
                  <Award size={16} className="text-gray-500 dark:text-gray-400" />
                  <h2 className="text-base font-bold text-gray-900 dark:text-white">Recent Certifications</h2>
                </div>

              <div className="space-y-2">
                {certifications.map((cert) => (
                  <div
                    key={cert.title}
                    onClick={openModal}
                    className="group flex items-start justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 transition-all"
                  >
                    <div>
                      <h3 className="text-xs font-semibold text-gray-900 dark:text-white">{cert.title}</h3>
                      <p className="text-xs text-gray-500 dark:text-gray-400">{cert.issuer}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-medium text-gray-600 dark:text-gray-300 bg-white dark:bg-gray-800 px-2 py-0.5 rounded-md border border-gray-100 dark:border-gray-600">
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
            className="lg:w-64 shrink-0 flex flex-col gap-3"
          >
            {/* Featured Certification Card */}
            <a
              href="https://www.credly.com/badges/53a65aa4-0b25-44a2-8489-c89bb9b67047/facebook_messenger"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-br from-purple-600 to-indigo-600 rounded-lg p-3 text-white shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer block"
            >
              <div className="flex items-start justify-between mb-2">
                <div className="flex-1">
                  <p className="text-[9px] text-gray-400 mb-1 font-medium tracking-widest uppercase">Certified</p>
                  <h3 className="text-base font-bold mb-0.5 tracking-tight">IT Specialist</h3>
                  <p className="text-xs text-gray-400">HTML and CSS</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <img src={badgeIcon} alt="Credly Badge" className="w-8 h-8 object-contain" />
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-white/10">
                <span className="text-[11px] bg-white/10 px-2.5 py-1 rounded-full font-medium">982/1000</span>
                <span className="text-[11px] bg-white/10 px-2.5 py-1 rounded-full font-medium">Certiport</span>
              </div>

              <div className="flex items-center justify-between mt-2">
                <span className="text-[11px] text-gray-400 flex items-center gap-1">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  View on Credly
                </span>
                <span className="text-[11px] text-gray-400 flex items-center gap-1">
                  Verify
                  <ArrowUpRight size={12} />
                </span>
              </div>
            </a>

            {/* AI Ready ASEAN Card */}
            <div className="group bg-gradient-to-br from-blue-600 to-indigo-700 rounded-lg p-3 text-white shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer block">
              <div className="flex items-start justify-between mb-2">
                <div className="flex-1">
                  <p className="text-[9px] text-blue-200 mb-1 font-medium tracking-widest uppercase">Certified</p>
                  <h3 className="text-base font-bold mb-0.5 tracking-tight">AI Ready</h3>
                  <p className="text-xs text-blue-200">ASEAN</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-sm font-bold text-white">AI</div>
                  </div>
              </div>

              <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-white/10">
                <span className="text-[11px] bg-white/10 px-2.5 py-1 rounded-full font-medium">Verified</span>
                <span className="text-[11px] bg-white/10 px-2.5 py-1 rounded-full font-medium">2024</span>
              </div>

              <div className="flex items-center justify-between mt-2">
                <span className="text-[11px] text-blue-200 flex items-center gap-1">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  View Certificate
                </span>
                <span className="text-[11px] text-blue-300/70">Verify</span>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gradient-to-br from-white via-gray-50/50 to-white dark:from-gray-800 dark:via-gray-800 dark:to-gray-800 rounded-lg p-3 border border-gray-200/60 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow duration-300 flex-1 flex flex-col"
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="p-1.5 bg-gradient-to-br from-gray-900 to-gray-700 rounded-md">
                  <Briefcase size={14} className="text-white" />
                </div>
                <h2 className="text-base font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">Experience & Journey</h2>
              </div>

              <div className="relative flex-1 flex flex-col">
                {/* Animated timeline line */}
                <motion.div 
                  className="absolute left-[9px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-gray-900 via-gray-400 to-gray-200 dark:from-gray-300 dark:via-gray-600 dark:to-gray-700"
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  style={{ originY: 0 }}
                />

                <div className="flex flex-col justify-between flex-1 gap-1.5">
                  {experience.map((exp, index) => (
                    <motion.div 
                      key={index} 
                      className="relative pl-8"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.1 * index }}
                    >
                      {/* Enhanced Timeline dot with pulse effect and click interaction */}
                      <div className="absolute left-0 top-1 flex items-center justify-center">
                        {exp.current && (
                          <motion.div
                            className="absolute w-5 h-5 rounded-full bg-gray-900/20"
                            animate={{ scale: [1, 1.5, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                          />
                        )}
                        <motion.button
                          onClick={() => handleExperienceClick(index)}
                          className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all duration-300 cursor-pointer hover:scale-110 ${
                            selectedExperience === index
                              ? 'bg-gradient-to-br from-blue-600 to-blue-700 border-blue-600 shadow-lg shadow-blue-600/30'
                              : exp.current 
                                ? 'bg-gradient-to-br from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 border-gray-900 dark:border-white shadow-lg shadow-gray-900/30 dark:shadow-white/30' 
                                : 'bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500 hover:bg-gray-50 dark:hover:bg-gray-600'
                          }`}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          {(selectedExperience === index || exp.current) && (
                            <div className={`w-1.5 h-1.5 rounded-full ${
                              selectedExperience === index ? 'bg-white' : 'bg-white dark:bg-gray-900'
                            }`} />
                          )}
                        </motion.button>
                      </div>

                      {/* Content card */}
                      <motion.div 
                        className={`p-2 rounded-lg transition-all duration-300 cursor-pointer ${
                          selectedExperience === index
                            ? 'bg-gradient-to-br from-blue-50 to-blue-100/50 dark:from-blue-900/30 dark:to-blue-800/30 border-2 border-blue-200 dark:border-blue-700 shadow-md'
                            : exp.current 
                              ? 'bg-gradient-to-br from-gray-50 to-gray-100/50 dark:from-gray-700 dark:to-gray-700/50 border border-gray-200 dark:border-gray-600 shadow-md' 
                              : 'bg-gray-50/40 dark:bg-gray-700/40 border border-transparent hover:border-gray-200 dark:hover:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700'
                        }`}
                        whileHover={{ y: -1 }}
                        onClick={() => handleExperienceClick(index)}
                      >
                        <div className="flex items-start justify-between gap-1">
                          <div className="flex-1">
                            <h3 className={`font-semibold text-xs transition-colors duration-300 ${
                              exp.current ? 'text-gray-900 dark:text-white' : 'text-gray-800 dark:text-gray-200'
                            }`}>
                              {exp.title}
                            </h3>
                            <p className={`text-[10px] mt-0.5 transition-colors duration-300 ${
                              exp.current ? 'text-gray-600 dark:text-gray-400' : 'text-gray-500 dark:text-gray-400'
                            }`}>
                              {exp.company}
                            </p>
                            {exp.current && (
                              <motion.span 
                                className="inline-block mt-0.5 px-1.5 py-0.5 bg-gradient-to-r from-gray-900 to-gray-700 text-white text-[9px] font-medium rounded-full"
                                animate={{ opacity: [0.8, 1, 0.8] }}
                                transition={{ duration: 2, repeat: Infinity }}
                              >
                                Current
                              </motion.span>
                            )}
                          </div>
                          <span className={`shrink-0 font-medium text-[10px] transition-colors duration-300 ${
                            exp.current ? 'text-gray-700 dark:text-gray-300' : 'text-gray-400 dark:text-gray-500'
                          }`}>
                            {exp.year}
                          </span>
                        </div>
                      </motion.div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Certification Modal */}
      {isModalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 dark:bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-6"
          onClick={closeModal}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="bg-white dark:bg-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-white dark:bg-gray-800 border-b border-gray-100 dark:border-gray-700 p-6 flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">IT Specialist - HTML and CSS</h2>
                <p className="text-sm text-gray-500 dark:text-gray-400">Certiport Certification</p>
              </div>
              <button
                onClick={closeModal}
                className="p-2 text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            <div className="p-6">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Certificate Image 1 */}
                <div className="space-y-3">
                  <h3 className="text-sm font-medium text-gray-900 dark:text-white">Certificate Overview</h3>
                  <div className="h-80 rounded-xl overflow-hidden bg-gray-50 dark:bg-gray-700 border border-gray-100 dark:border-gray-600 shadow-sm">
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
                  <div className="h-80 rounded-xl overflow-hidden bg-gray-50 dark:bg-gray-700 border border-gray-100 dark:border-gray-600 shadow-sm">
                    <img 
                      src={cert2Icon} 
                      alt="IT Specialist Certificate - Page 2"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-100 dark:border-blue-800">
                <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-2">Skills Validated</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                  <div className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-300">
                    <img src={htmlIcon} alt="HTML5" className="w-4 h-4" />
                    <span>HTML5</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-300">
                    <img src={cssIcon} alt="CSS3" className="w-4 h-4" />
                    <span>CSS3</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-300">
                    <img src={jsIcon} alt="JavaScript" className="w-4 h-4" />
                    <span>JavaScript</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-300">
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
