
import React, { useState, useEffect } from 'react';
import { motion, Variants } from 'framer-motion';
import { Briefcase, BookOpen, Gamepad2, ArrowUpRight, GraduationCap } from 'lucide-react'; 
import { projects } from '../data';

interface BentoGridProps {
  onProjectSelect: (id: number) => void;
}

const BentoGrid: React.FC<BentoGridProps> = ({ onProjectSelect }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const getIcon = (key?: string) => {
    switch (key) {
      case 'briefcase': 
        return <Briefcase size={24} className="opacity-80" />;
      case 'book': 
        return <BookOpen size={24} className="opacity-80" />;
      case 'gamepad': 
        return <Gamepad2 size={24} className="opacity-80" />;
      case 'graduation-cap': 
        return <GraduationCap size={24} className="opacity-80" />;
      default: 
        return <ArrowUpRight size={24} className="opacity-80" />;
    }
  };

  // Shared variants for the "Light Up" effect (Color & Opacity)
  const imageVariants: Variants = {
    initial: {
      filter: "grayscale(100%)",
      opacity: 0.7, 
    },
    active: {
      filter: "grayscale(0%)",
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const overlayVariants: Variants = {
    initial: { opacity: 0.5 }, 
    active: { opacity: 0.2, transition: { duration: 0.8 } } 
  };

  const arrowVariants: Variants = {
    initial: { opacity: 0, x: -10 },
    active: { opacity: 1, x: 0, transition: { delay: 0.1 } }
  };

  return (
    <section className="py-24 md:py-32 w-full px-6 md:px-12 lg:px-24">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mb-12 flex items-baseline justify-between border-b border-white/10 pb-4"
      >
        <h2 className="font-serif text-4xl md:text-5xl text-white">Selected Works</h2>
        <span className="font-sans text-sm opacity-50">2021 — 2025</span>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-6 gap-6 auto-rows-auto">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial="initial"
            // Activation logic: Hover on desktop, Viewport focus on mobile
            whileHover="active"
            whileInView={isMobile ? "active" : "initial"}
            viewport={{ 
                once: false, 
                amount: 0.7 
            }}
            onClick={() => onProjectSelect(project.id)}
            className={`group relative overflow-hidden rounded-2xl bg-[#0d0d0d] border border-white/10 p-8 transition-all hover:border-white/30 cursor-pointer ${project.colSpan}`}
          >
            {/* Background Image Container */}
            {project.image && (
               <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                  {/* The Black Overlay */}
                  <motion.div 
                    variants={overlayVariants}
                    className="absolute inset-0 bg-black z-10" 
                  />
                  
                  {/* Image: Handled by Motion for color, but Tailwind for snappy scaling */}
                  <motion.img 
                    variants={imageVariants}
                    src={project.image} 
                    alt="" 
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110" 
                  />
                  
                  {/* Persistent Bottom Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90 z-15" />
               </div>
            )}

            {/* Content Container */}
            <div className="relative z-20 flex flex-col justify-between h-full min-h-[240px] pointer-events-none">
                
                {/* Top: Icon & Arrow */}
                <div className="flex justify-between items-start mb-8">
                    <div className="p-3 rounded-full border border-white/10 bg-black/40 backdrop-blur-md text-offwhite group-hover:border-white/30 transition-colors">
                        {getIcon(project.iconKey)}
                    </div>
                    
                    <motion.div variants={arrowVariants}>
                        <div className="p-2 rounded-full bg-white text-black shadow-lg">
                            <ArrowUpRight size={20} />
                        </div>
                    </motion.div>
                </div>

                {/* Bottom: Text Info */}
                <div>
                    <span className="block font-sans text-xs uppercase tracking-[0.15em] opacity-80 mb-3 text-offwhite group-hover:opacity-100 transition-opacity shadow-black drop-shadow-md">
                        {project.category}
                    </span>
                    <h3 className="font-serif text-3xl text-offwhite leading-tight group-hover:text-white transition-colors shadow-black drop-shadow-md">
                        {project.title}
                    </h3>
                </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default BentoGrid;
