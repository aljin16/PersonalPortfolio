import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

const educationData = [
  {
    degree: 'Bachelor of Science in Information Technology',
    institution: 'Nueva Ecija University of Science and Technology',
    period: '2022 - 2026',
    status: 'In Progress',
  },
  {
    degree: 'Senior High School',
    institution: 'Zaragoza National High School',
    period: '2020 - 2022',
    status: 'Completed',
  },
];

const Education = () => {
  return (
    <section id="education" className="py-20 px-6 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 text-center">
            Education
          </h2>
          <p className="text-lg text-gray-500 text-center mb-12 max-w-2xl mx-auto">
            Academic background and qualifications
          </p>
        </motion.div>

        <div className="relative">
          <div
            className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-gray-200 dark:bg-gray-700 pointer-events-none z-0"
          ></div>

          <div className="space-y-8">
            {educationData.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-10 md:pl-16 z-10"
              >
                <span
                  className={`absolute left-[14px] md:left-7 top-3 w-2.5 h-2.5 rounded-full border flex items-center justify-center z-20 ${
                    edu.status === 'In Progress'
                      ? 'bg-gray-900 border-gray-900 dark:bg-white dark:border-white'
                      : 'bg-white border-gray-300 text-transparent dark:bg-gray-800 dark:border-gray-600'
                  }`}
                >
                  <span
                    className={`block w-1.5 h-1.5 rounded-full ${
                      edu.status === 'In Progress'
                        ? 'bg-white dark:bg-gray-900'
                        : 'bg-transparent'
                    }`}
                  />
                </span>

                <div className="hidden md:flex absolute left-0 w-12 h-12 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 items-center justify-center z-20 overflow-hidden transition-transform duration-300">
                  <GraduationCap className="text-gray-700 dark:text-gray-200" size={22} />
                </div>

                <div className="group relative bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200/60 dark:border-gray-700 transition-all duration-300 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-800 dark:via-gray-800 dark:to-gray-900 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative space-y-3">
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1.5">
                          {edu.degree}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">{edu.institution}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs font-semibold text-gray-500 dark:text-gray-400">{edu.period}</p>
                        <span className="inline-flex items-center gap-1 px-3 py-1 mt-1 text-[11px] font-semibold rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-gray-600">
                          {edu.status}
                        </span>
                      </div>
                    </div>
                    
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                      {edu.status === 'In Progress'
                        ? 'Advancing core IT foundations with a focus on web technologies and applied projects.'
                        : 'Completed foundational studies with emphasis on STEM and digital literacy.'}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
