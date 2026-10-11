import { motion } from 'framer-motion';
import { Users, Link2, Mic, Mail, Calendar, MessageSquare, Linkedin, Github, Instagram, ChevronRight, GraduationCap, ExternalLink } from 'lucide-react';

const memberships = [
  {
    name: 'IT Students Organization',
    link: '#',
  },
];

const socialLinks = [
  { name: 'LinkedIn', icon: Linkedin, href: 'https://ph.linkedin.com/in/aljean-sinohin-08a496217' },
  { name: 'GitHub', icon: Github, href: 'https://github.com/aljin16' },
  { name: 'Instagram', icon: Instagram, href: 'https://www.instagram.com/_aljinnn?igsh=aXNkdWZ3c20yNWxu' },
];

const education = [
  {
    degree: 'Bachelor of Science in Information Technology',
    institution: 'Nueva Ecija University of Science and Technology',
    period: '2022 - 2026',
  },
  {
    degree: 'Senior High School',
    institution: 'Zaragoza National High School',
    period: '2020 - 2022',
  },
];

const BottomSection = () => {
  return (
    <section className="py-4 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        {/* Four Column Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="bg-white dark:bg-gray-800 rounded-xl p-3 border border-gray-200/60 dark:border-gray-700"
          >
            <div className="flex items-center gap-2 mb-3">
              <Link2 size={14} className="text-gray-500 dark:text-gray-400" />
              <h3 className="text-sm font-bold text-gray-900 dark:text-white">Social Links</h3>
            </div>

            <div className="space-y-1.5">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-2 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                >
                  <link.icon size={14} className="text-gray-600 dark:text-gray-300" />
                  <span className="text-xs text-gray-700 dark:text-gray-200">{link.name}</span>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="bg-white dark:bg-gray-800 rounded-xl p-3 border border-gray-200/60 dark:border-gray-700"
          >
            <div className="flex items-center gap-2 mb-3">
              <GraduationCap size={14} className="text-gray-500 dark:text-gray-400" />
              <h3 className="text-sm font-bold text-gray-900 dark:text-white">Education</h3>
            </div>

            <div className="space-y-3">
              {education.map((edu) => (
                <div key={edu.degree}>
                  <p className="text-xs font-semibold text-gray-900 dark:text-white mb-0.5">{edu.degree}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{edu.institution}</p>
                  <p className="text-xs text-gray-400 dark:text-gray-500 mt-0.5">{edu.period}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
            id="contact"
            className="bg-white dark:bg-gray-800 rounded-xl p-3 border border-gray-200/60 dark:border-gray-700"
          >
            <div className="space-y-1.5">
              <a
                href="mailto:aljeansinohin16@gmail.com"
                className="flex items-center gap-2 p-2 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
              >
                <Mail size={14} className="text-gray-600 dark:text-gray-300" />
                <div>
                  <p className="text-xs font-semibold text-gray-900 dark:text-white">Email</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">aljeansinohin16@gmail.com</p>
                </div>
              </a>

              <a
                href="#"
                className="flex items-center justify-between p-2 bg-orange-50 dark:bg-orange-900/20 rounded-lg hover:bg-orange-100 dark:hover:bg-orange-900/30 transition-colors group"
              >
                <div className="flex items-center gap-2">
                  <Calendar size={14} className="text-orange-600 dark:text-orange-400" />
                  <p className="text-xs font-semibold text-gray-900 dark:text-white">Let's Talk</p>
                </div>
                <ChevronRight size={14} className="text-gray-400 dark:text-gray-500 group-hover:text-gray-600 dark:group-hover:text-gray-300" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BottomSection;
