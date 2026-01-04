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

          <div className="bg-white rounded-2xl p-8 md:p-10 shadow-sm border border-gray-100">
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                I am a motivated and growth-focused web developer with a strong foundation in front-end technologies and a genuine passion for creating clean, user-centered digital experiences. Currently completing my Bachelor of Science in Information Technology, I have developed practical skills through academic projects and hands-on development work.
              </p>

              <p>
                My approach to development emphasizes clean code practices, intuitive UI/UX implementation, and building systems that solve real-world problems. I have experience working on full-stack web applications including point-of-sale systems, service booking platforms, and admin dashboards with role-based access control.
              </p>

              <p>
                I am actively seeking opportunities to contribute to a professional development team where I can apply my skills, continue learning from experienced developers, and grow into a well-rounded software engineer. I am particularly interested in roles that involve building functional, user-friendly web applications.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
