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
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-300 via-purple-300 to-blue-300 hidden md:block shadow-lg"></div>

          <div className="space-y-8">
            {educationData.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative md:pl-20"
              >
                <div className="hidden md:flex absolute left-0 w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 border-4 border-white shadow-xl items-center justify-center z-10 overflow-hidden group hover:scale-110 transition-transform duration-300">
                  <GraduationCap className="text-white" size={28} />
                </div>

                <div className="group relative bg-white/90 backdrop-blur-xl rounded-3xl p-7 shadow-2xl border border-gray-200/60 hover:shadow-3xl transition-all duration-500 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/40 via-transparent to-purple-50/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
                  
                  <div className="relative space-y-4">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                          {edu.degree}
                        </h3>
                        <p className="text-lg text-gray-700 font-medium">{edu.institution}</p>
                      </div>
                      <span className={`px-4 py-2 text-sm font-bold rounded-full backdrop-blur-sm border transition-all duration-300 ${
                        edu.status === 'In Progress' 
                          ? 'bg-blue-100/90 text-blue-700 border-blue-200/50 shadow-sm' 
                          : 'bg-gray-100/90 text-gray-600 border-gray-200/50'
                      }`}>
                        {edu.status}
                      </span>
                    </div>
                    
                    <div className="flex items-center gap-3 pt-2 border-t border-gray-200/50">
                      <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center">
                        <span className="text-xs font-bold text-gray-600">📅</span>
                      </div>
                      <p className="text-gray-600 font-medium">{edu.period}</p>
                    </div>

                    {edu.status === 'In Progress' && (
                      <div className="mt-4 p-3 bg-blue-50/50 rounded-2xl border border-blue-100/50">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
                          <p className="text-sm text-blue-700 font-medium">Currently enrolled</p>
                        </div>
                      </div>
                    )}
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
