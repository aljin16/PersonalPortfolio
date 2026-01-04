import { motion } from 'framer-motion';
import { MapPin, Calendar, Mail, Send, Users } from 'lucide-react';
import verifiedIcon from '../assets/verified.png';

const Hero = () => {
  return (
    <section id="home" className="pt-20 pb-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row gap-10 items-start"
        >
          {/* Profile Image */}
          <div className="shrink-0">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center overflow-hidden ring-1 ring-gray-200">
              <span className="text-4xl md:text-5xl font-semibold text-gray-400 tracking-tight">AS</span>
            </div>
          </div>

          {/* Profile Info */}
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
                Aljean Sinohin
              </h1>
              <img src={verifiedIcon} alt="Verified" className="w-5 h-5" />
            </div>

            <p className="text-lg md:text-xl text-gray-600 font-medium mb-1">
              Junior Web Developer
            </p>

            <div className="flex items-center gap-1.5 text-gray-400 text-base mb-5">
              <MapPin size={14} />
              <span>Philippines</span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-900 text-white text-sm rounded-xl font-medium hover:bg-gray-800 transition-colors"
              >
                <Calendar size={16} />
                Schedule a Call
              </motion.a>

              <motion.a
                href="mailto:aljean.sinohin@email.com"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-gray-600 text-sm border border-gray-200 rounded-xl font-medium hover:bg-gray-50 transition-colors"
              >
                <Mail size={16} />
                Send Email
              </motion.a>

              <motion.a
                href="#projects"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-gray-600 text-sm border border-gray-200 rounded-xl font-medium hover:bg-gray-50 transition-colors"
              >
                <Users size={16} />
                View my projects
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
