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
          className="bg-white rounded-2xl p-8 md:p-10 shadow-sm border border-gray-100 text-center"
        >
          <div className="w-16 h-16 mx-auto rounded-full bg-gray-100 flex items-center justify-center mb-6">
            <Mail className="text-gray-600" size={28} />
          </div>

          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Let's Work Together
          </h3>

          <p className="text-gray-600 mb-6 max-w-md mx-auto">
            I am always interested in hearing about new projects and opportunities. Send me a message and I will get back to you as soon as possible.
          </p>

          <a
            href="mailto:johndoe@email.com"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors shadow-md mb-8"
          >
            <Send size={18} />
            Send Email
          </a>

          <div className="pt-6 border-t border-gray-100">
            <p className="text-sm text-gray-500 mb-4">Or connect with me on</p>
            <div className="flex items-center justify-center gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-200 hover:text-gray-900 transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-200 hover:text-gray-900 transition-colors"
              >
                <Github size={20} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
