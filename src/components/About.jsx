import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            About Me
          </h2>

          <div className="group relative bg-white/90 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-gray-200/60 hover:shadow-3xl transition-all duration-500 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/40 via-transparent to-purple-50/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-emerald-400/20 to-blue-400/20 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-700"></div>
            
            <div className="relative space-y-8">
              <div className="flex items-center gap-4 pb-4 border-b border-gray-200/50">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-lg">A</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">About Me</h3>
                  <p className="text-sm text-gray-500">Web Developer & IT Student</p>
                </div>
              </div>
              
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <div className="group/item">
                  <p className="text-lg leading-relaxed hover:text-gray-900 transition-colors duration-300">
                    I am a motivated and growth-focused web developer with a strong foundation in front-end technologies and a genuine passion for creating clean, user-centered digital experiences. Currently completing my Bachelor of Science in Information Technology, I have developed practical skills through academic projects and hands-on development work.
                  </p>
                </div>

                <div className="group/item">
                  <p className="text-lg leading-relaxed hover:text-gray-900 transition-colors duration-300">
                    My approach to development emphasizes clean code practices, intuitive UI/UX implementation, and building systems that solve real-world problems. I have experience working on full-stack web applications including point-of-sale systems, service booking platforms, and admin dashboards with role-based access control.
                  </p>
                </div>

                <div className="group/item">
                  <p className="text-lg leading-relaxed hover:text-gray-900 transition-colors duration-300">
                    I am actively seeking opportunities to contribute to a professional development team where I can apply my skills, continue learning from experienced developers, and grow into a well-rounded software engineer. I am particularly interested in roles that involve building functional, user-friendly web applications.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-200/50">
                <span className="px-4 py-2 bg-blue-50/80 text-blue-700 rounded-xl text-sm font-semibold backdrop-blur-sm border border-blue-100/50">Frontend Development</span>
                <span className="px-4 py-2 bg-purple-50/80 text-purple-700 rounded-xl text-sm font-semibold backdrop-blur-sm border border-purple-100/50">UI/UX Design</span>
                <span className="px-4 py-2 bg-emerald-50/80 text-emerald-700 rounded-xl text-sm font-semibold backdrop-blur-sm border border-emerald-100/50">Problem Solving</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
