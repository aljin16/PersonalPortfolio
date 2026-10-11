import { MotionConfig } from 'framer-motion';
import Hero from './components/Hero';
import MainContent from './components/MainContent';
import Projects from './components/Projects';
import BottomSection from './components/BottomSection';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle';

function App() {
  return (
    <MotionConfig reducedMotion="user">
    <div className="portfolio min-h-screen bg-gray-50 dark:bg-gray-900 font-sans transition-colors duration-300">
      <ThemeToggle />
      <main>
        <Hero />
        <MainContent />
        <Projects />
        <BottomSection />
      </main>
      <Footer />
    </div>
    </MotionConfig>
  );
}

export default App;
