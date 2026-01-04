import { motion } from 'framer-motion';
import { FolderOpen, ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'Web-Based POS for Rice Store',
    year: '2025',
    url: 'http://ricepos.42web.io/Captone-Project-RicePos/public/?i=2',
    description: 'A comprehensive point-of-sale system designed for rice retail businesses, featuring complete inventory and delivery management capabilities.',
    features: [
      'Inventory management with stock tracking',
      'Delivery scheduling and route management',
      'Real-time order tracking system',
      'Role-based access control (Admin, Sales, Delivery)',
      'Automated notifications system',
    ],
    tags: ['Full-Stack', 'RBAC', 'Real-Time'],
  },
  {
    title: 'E-Mekaniko',
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

const Projects = () => {
  return (
    <section id="projects" className="py-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-5"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <FolderOpen size={18} className="text-gray-500" />
              <h2 className="text-lg font-bold text-gray-900">Recent Projects</h2>
            </div>
            <a href="#" className="text-sm text-gray-500 hover:text-gray-700 flex items-center gap-1">View All <ArrowUpRight size={14} /></a>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-4">
          {projects.map((project, index) => (
            <motion.a
              key={project.title}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-white rounded-2xl p-6 border border-gray-200/60 hover:border-gray-300 transition-all duration-200"
            >
              {/* Arrow Icon */}
              <div className="absolute top-6 right-6 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 group-hover:bg-gray-900 group-hover:text-white transition-all duration-200">
                <ArrowUpRight size={16} />
              </div>

              {/* Project Info */}
              <div className="pr-10">
                <h3 className="text-base font-bold text-gray-900 mb-1 group-hover:text-gray-700 transition-colors">
                  {project.title}
                </h3>
                <div className="flex items-center gap-1.5 text-sm text-gray-400 mb-2">
                  <span>{project.year}</span>
                  <span className="w-0.5 h-0.5 rounded-full bg-gray-300"></span>
                  <span className="text-emerald-600 font-medium">Live</span>
                </div>
              </div>

              <p className="text-[15px] text-gray-500 mb-4 leading-relaxed line-clamp-2">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 bg-gray-50 text-gray-600 text-sm rounded-lg font-mono"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Features */}
              <div className="pt-4 border-t border-gray-100">
                <ul className="space-y-1">
                  {project.features.slice(0, 2).map((feature) => (
                    <li key={feature} className="flex items-start gap-1.5 text-sm text-gray-500">
                      <div className="w-1 h-1 rounded-full bg-gray-300 mt-1.5 shrink-0"></div>
                      <span className="line-clamp-1">{feature}</span>
                    </li>
                  ))}
                  {project.features.length > 2 && (
                    <li className="text-sm text-gray-400 pl-2.5">
                      +{project.features.length - 2} more features
                    </li>
                  )}
                </ul>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
