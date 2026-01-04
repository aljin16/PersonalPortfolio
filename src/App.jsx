import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MainContent from './components/MainContent';
import Projects from './components/Projects';
import BottomSection from './components/BottomSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Navbar />
      <main>
        <Hero />
        <MainContent />
        <Projects />
        <BottomSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
