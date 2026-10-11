import { useEffect } from "react";
import { animate } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!("IntersectionObserver" in window) || preference.matches) return;
    const animations = new Set();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          observer.unobserve(entry.target);
          if (preference.matches) continue;
          const control = animate(
            entry.target,
            { opacity: [0, 1], y: [18, 0] },
            {
              duration: 0.55,
              delay: Number(entry.target.dataset.delay || 0),
              ease: [0.2, 0.65, 0.3, 1],
            },
          );
          animations.add(control);
        }
      },
      { threshold: 0.08 },
    );
    document
      .querySelectorAll("[data-reveal]")
      .forEach((element) => observer.observe(element));
    const stopMotion = () => {
      if (preference.matches)
        animations.forEach((animation) => animation.complete());
    };
    preference.addEventListener("change", stopMotion);
    return () => {
      observer.disconnect();
      animations.forEach((animation) => animation.complete());
      preference.removeEventListener("change", stopMotion);
    };
  }, []);
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Navbar />
      <main id="main" tabIndex={-1}>
        <Hero />
        <Projects />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
export default App;
