import { motion } from 'framer-motion';
import { Users, Link2, Mic, Mail, Calendar, MessageSquare, Linkedin, Github, Instagram, ChevronRight, GraduationCap, ExternalLink } from 'lucide-react';

const memberships = [
  {
    name: 'IT Students Organization',
    link: '#',
  },
];

const socialLinks = [
  { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com' },
  { name: 'GitHub', icon: Github, href: 'https://github.com' },
  { name: 'Instagram', icon: Instagram, href: 'https://instagram.com' },
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
    <section className="py-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Four Column Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* A member of */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="bg-white rounded-2xl p-5 border border-gray-200/60"
          >
            <div className="flex items-center gap-2.5 mb-4">
              <Users size={16} className="text-gray-500" />
              <h3 className="text-base font-bold text-gray-900">A member of</h3>
            </div>

            <div className="space-y-2">
              {memberships.map((item) => (
                <a
                  key={item.name}
                  href={item.link}
                  className="flex items-center justify-between p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors group"
                >
                  <span className="text-sm text-gray-700">{item.name}</span>
                  <ExternalLink size={12} className="text-gray-400 group-hover:text-gray-600" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="bg-white rounded-2xl p-5 border border-gray-200/60"
          >
            <div className="flex items-center gap-2.5 mb-4">
              <Link2 size={16} className="text-gray-500" />
              <h3 className="text-base font-bold text-gray-900">Social Links</h3>
            </div>

            <div className="space-y-2">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                >
                  <link.icon size={16} className="text-gray-600" />
                  <span className="text-sm text-gray-700">{link.name}</span>
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
            className="bg-white rounded-2xl p-5 border border-gray-200/60"
          >
            <div className="flex items-center gap-2.5 mb-4">
              <GraduationCap size={16} className="text-gray-500" />
              <h3 className="text-base font-bold text-gray-900">Education</h3>
            </div>

            <div className="space-y-4">
              {education.map((edu) => (
                <div key={edu.degree}>
                  <p className="text-sm font-semibold text-gray-900 mb-0.5">{edu.degree}</p>
                  <p className="text-sm text-gray-500">{edu.institution}</p>
                  <p className="text-sm text-gray-400 mt-1">{edu.period}</p>
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
            className="bg-white rounded-2xl p-5 border border-gray-200/60"
          >
            <div className="space-y-2">
              <a
                href="mailto:aljean.sinohin@email.com"
                className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
              >
                <Mail size={16} className="text-gray-600" />
                <div>
                  <p className="text-sm font-semibold text-gray-900">Email</p>
                  <p className="text-sm text-gray-500">aljean.sinohin@email.com</p>
                </div>
              </a>

              <a
                href="#"
                className="flex items-center justify-between p-3 bg-orange-50 rounded-xl hover:bg-orange-100 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <Calendar size={16} className="text-orange-600" />
                  <p className="text-sm font-semibold text-gray-900">Let's Talk</p>
                </div>
                <ChevronRight size={14} className="text-gray-400 group-hover:text-gray-600" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BottomSection;
