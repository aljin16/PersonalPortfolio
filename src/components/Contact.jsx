import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            Get In Touch
          </h2>
          <p className="text-gray-500 text-center mb-12 max-w-2xl mx-auto">
            I am currently open to new opportunities and collaborations. Whether you have a project in mind or just want to connect, feel free to reach out.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="group relative bg-white/90 backdrop-blur-xl rounded-3xl p-10 shadow-2xl border border-gray-200/60 hover:shadow-3xl transition-all duration-500 text-center overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/40 via-transparent to-purple-50/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
          <div className="absolute bottom-10 left-10 w-24 h-24 bg-gradient-to-tr from-emerald-400/20 to-blue-400/20 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-700"></div>
          
          <div className="relative space-y-8">
            <div className="w-24 h-24 mx-auto rounded-3xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
              <Mail className="text-white" size={40} />
            </div>

            <div className="space-y-4">
              <h3 className="text-3xl font-bold text-gray-900">
                Let's Work Together
              </h3>

              <p className="text-gray-700 max-w-2xl mx-auto text-lg leading-relaxed">
                I am always interested in hearing about new projects and opportunities. Send me a message and I will get back to you as soon as possible.
              </p>
            </div>

            <div className="flex flex-col items-center gap-6">
              <a
                href="mailto:johndoe@email.com"
                className="group/btn inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-bold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
              >
                <Send size={22} />
                <span>Send Email</span>
              </a>

              <div className="text-sm text-gray-500 font-medium">
                or reach out via social platforms
              </div>
            </div>

            <div className="pt-8 border-t border-gray-200/60">
              <p className="text-sm text-gray-600 mb-6 font-bold uppercase tracking-wide">Connect With Me</p>
              <div className="flex items-center justify-center gap-6">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/social w-14 h-14 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center text-gray-600 hover:from-blue-500 hover:to-blue-600 hover:text-white transition-all duration-300 backdrop-blur-sm border border-gray-200/50 hover:shadow-xl hover:scale-110"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/social w-14 h-14 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center text-gray-600 hover:from-gray-700 hover:to-gray-900 hover:text-white transition-all duration-300 backdrop-blur-sm border border-gray-200/50 hover:shadow-xl hover:scale-110"
                >
                  <Github size={24} />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
