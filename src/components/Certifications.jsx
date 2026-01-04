import { motion } from 'framer-motion';
import { Award, CheckCircle } from 'lucide-react';

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 px-6">
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
          <p className="text-gray-500 text-center mb-12 max-w-2xl mx-auto">
            Professional certifications validating technical competencies
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100"
        >
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 rounded-xl bg-gray-900 flex items-center justify-center shrink-0">
              <Award className="text-white" size={28} />
            </div>

            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <h3 className="text-xl font-semibold text-gray-900">
                  Certiport IT Specialist
                </h3>
                <span className="px-2.5 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-md flex items-center gap-1">
                  <CheckCircle size={12} />
                  Verified
                </span>
              </div>

              <p className="text-lg text-gray-700 font-medium mb-3">
                HTML and CSS
              </p>

              <div className="flex flex-wrap gap-6 mb-4">
                <div>
                  <p className="text-sm text-gray-500">Score</p>
                  <p className="text-2xl font-bold text-gray-900">982 <span className="text-base font-normal text-gray-500">/ 1000</span></p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Percentile</p>
                  <p className="text-2xl font-bold text-gray-900">98.2%</p>
                </div>
              </div>

              <p className="text-gray-600 text-sm">
                This certification demonstrates strong proficiency in HTML5 and CSS3, validating skills in semantic markup, responsive design, CSS layouts, and modern web development best practices.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
