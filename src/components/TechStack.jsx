import { motion } from 'framer-motion';

const techCategories = [
  {
    title: 'Frontend',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
  },
  {
    title: 'Backend / Systems',
    skills: ['Basic Backend Concepts', 'Role-Based Access Control (RBAC)', 'API Integration', 'Database Management'],
  },
  {
    title: 'Development Tools',
    skills: ['Git', 'VS Code', 'Chrome DevTools', 'Figma'],
  },
  {
    title: 'Other Skills',
    skills: ['UI/UX Implementation', 'Quality Testing', 'Project Management Basics', 'Hardware Troubleshooting'],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const TechStack = () => {
  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            Tech Stack
          </h2>
          <p className="text-gray-500 text-center mb-12 max-w-2xl mx-auto">
            Technologies and tools I work with to build web applications
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          {techCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="group relative bg-white/90 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-gray-200/60 hover:shadow-3xl transition-all duration-500 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/40 via-transparent to-purple-50/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="absolute top-6 right-6 w-20 h-20 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
              
              <div className="relative space-y-6">
                <div className="flex items-center gap-4 pb-4 border-b border-gray-200/50">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-lg">
                      {category.title.charAt(0)}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {category.title}
                  </h3>
                </div>
                
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, index) => (
                    <span
                      key={skill}
                      className="px-4 py-2.5 bg-gradient-to-r from-gray-50 to-gray-100 text-gray-700 rounded-xl text-sm font-medium hover:from-blue-500 hover:to-purple-600 hover:text-white hover:shadow-lg hover:scale-105 transition-all duration-300 backdrop-blur-sm border border-gray-200/50"
                      style={{
                        transitionDelay: `${index * 50}ms`
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
