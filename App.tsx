import React, { useEffect, useRef, useState } from 'react';
import Lenis from 'lenis';
import { AnimatePresence, motion } from 'framer-motion';
import CustomCursor from './components/CustomCursor';
import Hero from './components/Hero';
import BentoGrid from './components/BentoGrid';
import Achievements from './components/Achievements';
import Footer from './components/Footer';
import BackgroundPattern from './components/BackgroundPattern';
import ProjectDetail from './components/ProjectDetail';
import UnicornBackground from './components/UnicornBackground';
import { projects } from './data';

const App: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [selectedProjectId, setSelectedProjectId] = useState<number | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  const handleProjectSelect = (id: number) => {
    setSelectedProjectId(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToHome = () => {
    setSelectedProjectId(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNextProject = () => {
    if (selectedProjectId === null) return;
    const currentIndex = projects.findIndex(p => p.id === selectedProjectId);
    const nextIndex = (currentIndex + 1) % projects.length;
    setSelectedProjectId(projects[nextIndex].id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePreviousProject = () => {
    if (selectedProjectId === null) return;
    const currentIndex = projects.findIndex(p => p.id === selectedProjectId);
    const prevIndex = (currentIndex - 1 + projects.length) % projects.length;
    setSelectedProjectId(projects[prevIndex].id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const selectedProject = projects.find(p => p.id === selectedProjectId);
  const selectedProjectIndex = selectedProjectId !== null ? projects.findIndex(p => p.id === selectedProjectId) : -1;
  const isFirstProject = selectedProjectIndex === 0;
  const isLastProject = selectedProjectIndex === projects.length - 1;

  return (
    <div ref={scrollRef} className="relative min-h-screen text-offwhite font-sans selection:bg-offwhite selection:text-charcoal cursor-none">
      <CustomCursor />

      {/* --- LOGO WITH REPO PATH FIX --- */}
      <motion.img 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        src="/Portfolio/WebsiteLogo.png" 
        alt="Logo" 
        className="fixed top-6 left-6 md:top-10 md:left-10 z-50 w-10 md:w-12 h-auto cursor-pointer hover:scale-110 transition-transform duration-300"
        onClick={handleBackToHome}
      />
      
      <UnicornBackground />
      
      <AnimatePresence mode="wait">
        {selectedProjectId === null ? (
          <motion.div
            key="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Hero />
            <main className="relative z-10">
              <BackgroundPattern>
                <BentoGrid onProjectSelect={handleProjectSelect} />
                <Achievements />
                <Footer />
              </BackgroundPattern>
            </main>
          </motion.div>
        ) : (
          <motion.div
            key="project-detail"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="relative z-20"
          >
             <BackgroundPattern>
                {selectedProject && (
                  <ProjectDetail 
                    project={selectedProject} 
                    isFirstProject={isFirstProject}
                    isLastProject={isLastProject}
                    onBack={handleBackToHome}
                    onNext={handleNextProject}
                    onPrevious={handlePreviousProject}
                  />
                )}
                <Footer />
             </BackgroundPattern>
          </motion.div>
        )}
      </AnimatePresence>
      
      <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.03]" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
      </div>
    </div>
  );
};

export default App;
