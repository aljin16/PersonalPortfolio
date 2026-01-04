import { motion } from 'framer-motion';
import { MapPin, Calendar, Mail, Send, Users } from 'lucide-react';
import verifiedIcon from '../assets/verified.png';
import profileImage from '../assets/profile.png';

const Hero = () => {
  return (
    <section id="home" className="pt-8 pb-8 px-6 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row gap-6 items-start"
        >
          {/* Profile Image */}
          <div className="shrink-0">
            <div className="w-28 h-28 md:w-32 md:h-32 rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 flex items-center justify-center overflow-hidden ring-1 ring-gray-200 dark:ring-gray-700">
              <img 
                src={profileImage} 
                alt="Aljean Sinohin" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Profile Info */}
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-2 mb-1">
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white tracking-tight">
                Aljean Sinohin
              </h1>
              <img src={verifiedIcon} alt="Verified" className="w-5 h-5" />
            </div>

            <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 font-medium mb-0.5">
              Junior Web Developer
            </p>

            <div className="flex items-center gap-1.5 text-gray-400 dark:text-gray-500 text-sm mb-3">
              <MapPin size={14} />
              <span>Nueva Ecija, Philippines</span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-2">
              <motion.a
                href="tel:09915120853"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-xs rounded-lg font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
              >
                <Calendar size={14} />
                Phone Call
              </motion.a>

              <motion.a
                href="mailto:aljeansinohin16@gmail.com"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 text-xs border border-gray-200 dark:border-gray-700 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                <Mail size={14} />
                aljeansinohin16@gmail.com
              </motion.a>

              <motion.a
                href="#projects"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 text-xs border border-gray-200 dark:border-gray-700 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                <Users size={14} />
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
