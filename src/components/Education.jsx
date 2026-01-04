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
    <section id="education" className="py-20 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            Education
          </h2>
          <p className="text-gray-500 text-center mb-12 max-w-2xl mx-auto">
            Academic background and qualifications
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-200 hidden md:block"></div>

          <div className="space-y-6">
            {educationData.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative md:pl-16"
              >
                <div className="hidden md:flex absolute left-0 w-12 h-12 rounded-full bg-gray-900 items-center justify-center z-10">
                  <GraduationCap className="text-white" size={20} />
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {edu.degree}
                    </h3>
                    <span className={`px-2.5 py-1 text-xs font-medium rounded-md ${
                      edu.status === 'In Progress' 
                        ? 'bg-blue-100 text-blue-700' 
                        : 'bg-gray-100 text-gray-600'
                    }`}>
                      {edu.status}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-1">{edu.institution}</p>
                  <p className="text-sm text-gray-500">{edu.period}</p>
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
