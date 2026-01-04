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
    <section id="projects" className="py-4 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-2"
        >
          <div className="flex items-center gap-2.5">
            <FolderOpen size={16} className="text-gray-500 dark:text-gray-400" />
            <h2 className="text-base font-bold text-gray-900 dark:text-white">Recent Projects</h2>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-2">
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
              className="group relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-2xl p-4 border border-gray-200/60 dark:border-gray-700/60 hover:bg-white dark:hover:bg-gray-800 hover:shadow-2xl transition-all duration-500 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/40 dark:from-blue-900/40 via-transparent to-purple-50/40 dark:to-purple-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="absolute top-3 right-3 w-10 h-10 rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 flex items-center justify-center text-gray-600 dark:text-gray-300 group-hover:from-blue-500 group-hover:to-purple-600 group-hover:text-white transition-all duration-500 shadow-lg group-hover:scale-110">
                <ArrowUpRight size={18} />
              </div>

              <div className="relative space-y-3">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400 mb-3">
                      <div className="flex items-center gap-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                        <span>{project.year}</span>
                      </div>
                      <span className="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-600"></span>
                      <span className="text-emerald-600 dark:text-emerald-400 font-bold">Live Project</span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-300 leading-relaxed line-clamp-2 text-sm">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-600 text-gray-700 dark:text-gray-300 text-xs rounded-lg font-medium backdrop-blur-sm border border-gray-200/50 dark:border-gray-600/50 hover:from-blue-50 dark:hover:from-blue-900 hover:to-purple-50 dark:hover:to-purple-900 hover:text-blue-700 dark:hover:text-blue-300 hover:border-blue-200/50 dark:hover:border-blue-700/50 transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="pt-3 border-t border-gray-100/60 dark:border-gray-700/60">
                  <div className="space-y-1">
                    {project.features.slice(0, 2).map((feature) => (
                      <div key={feature} className="flex items-start gap-2 text-xs text-gray-600 dark:text-gray-400">
                        <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 mt-1.5 shrink-0"></div>
                        <span className="line-clamp-1">{feature}</span>
                      </div>
                    ))}
                    {project.features.length > 2 && (
                      <div className="text-xs text-gray-400 dark:text-gray-500 pl-3.5 font-medium">
                        +{project.features.length - 2} more features
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs text-blue-600 dark:text-blue-400 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span>View Project</span>
                  <ArrowUpRight size={14} />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
