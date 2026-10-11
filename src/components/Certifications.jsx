import { motion } from 'framer-motion';
import { Award, CheckCircle } from 'lucide-react';

const Certifications = () => {
  return (
    <section id="certifications" className="py-0 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            Certifications
          </h2>
          <p className="text-gray-500 text-center mb-6 max-w-2xl mx-auto">
            Professional certifications validating technical competencies
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="group relative bg-white/90 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-gray-200/60 dark:hover:shadow-3xl transition-all duration-500 overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/40 via-transparent to-blue-50/40 opacity-0 dark:group-hover:opacity-100 transition-opacity duration-500"></div>
          
          <div className="absolute top-8 right-8 w-20 h-20 bg-gradient-to-br from-emerald-400/30 to-blue-400/30 rounded-full blur-2xl dark:group-hover:scale-125 transition-transform duration-700"></div>
          
          <div className="relative flex items-start gap-8">
            <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-emerald-500 to-blue-600 flex items-center justify-center shrink-0 shadow-xl dark:group-hover:scale-110 transition-transform duration-300">
              <Award className="text-white" size={36} />
            </div>

            <div className="flex-1 space-y-6">
              <div className="flex flex-wrap items-center gap-4">
                <h3 className="text-3xl font-bold text-gray-900">
                  Certiport IT Specialist
                </h3>
                <span className="px-4 py-2 bg-emerald-100/90 text-emerald-700 text-sm font-bold rounded-full flex items-center gap-2 backdrop-blur-sm border border-emerald-200/50 shadow-sm">
                  <CheckCircle size={16} />
                  Verified
                </span>
              </div>

              <div className="inline-block px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl border border-blue-100/50">
                <p className="text-xl text-gray-800 font-bold">
                  HTML and CSS
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-4 backdrop-blur-sm border border-gray-200/50 dark:group-hover:shadow-lg transition-all duration-300">
                  <p className="text-sm text-gray-600 mb-2 font-medium">Score</p>
                  <div className="flex items-baseline gap-1">
                    <p className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">982</p>
                    <span className="text-lg font-normal text-gray-500">/ 1000</span>
                  </div>
                  <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full" style={{width: '98.2%'}}></div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-4 backdrop-blur-sm border border-gray-200/50 dark:group-hover:shadow-lg transition-all duration-300">
                  <p className="text-sm text-gray-600 mb-2 font-medium">Percentile</p>
                  <div className="flex items-baseline gap-1">
                    <p className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">98.2%</p>
                  </div>
                  <div className="mt-2 flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className={`h-2 flex-1 rounded-full ${i < 5 ? 'bg-gradient-to-r from-emerald-400 to-blue-400' : 'bg-gray-200'}`}></div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50/50 to-purple-50/50 rounded-2xl p-6 backdrop-blur-sm border border-blue-100/50">
                <p className="text-gray-700 leading-relaxed text-lg">
                  This certification demonstrates strong proficiency in HTML5 and CSS3, validating skills in semantic markup, responsive design, CSS layouts, and modern web development best practices.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <span className="px-4 py-2 bg-blue-50/80 text-blue-700 rounded-xl text-sm font-semibold backdrop-blur-sm border border-blue-100/50">HTML5</span>
                <span className="px-4 py-2 bg-purple-50/80 text-purple-700 rounded-xl text-sm font-semibold backdrop-blur-sm border border-purple-100/50">CSS3</span>
                <span className="px-4 py-2 bg-emerald-50/80 text-emerald-700 rounded-xl text-sm font-semibold backdrop-blur-sm border border-emerald-100/50">Responsive Design</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
