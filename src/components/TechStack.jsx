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
    <section id="skills" className="py-6 px-6">
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
          <p className="text-gray-500 text-center mb-6 max-w-2xl mx-auto">
            Technologies and tools I work with to build web applications
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-3"
        >
          {techCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="bg-white dark:bg-gray-800 rounded-xl p-4 border border-gray-200/60 dark:border-gray-700"
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="w-4 h-4 rounded bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                  <span className="text-white font-bold text-xs">
                    {category.title.charAt(0)}
                  </span>
                </div>
                <h3 className="text-sm font-bold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, index) => (
                  <span
                    key={skill}
                    className="flex items-center gap-1.5 px-2 py-1 bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-md text-xs font-medium hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                  >
                    <span>{skill}</span>
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
