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
          className="grid md:grid-cols-2 gap-6"
        >
          {techCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors"
                  >
                    {skill}
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
