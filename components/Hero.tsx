import React from 'react';
import { motion, Variants, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, Download, ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const scrollIndicatorOpacity = useTransform(scrollY, [0, 100], [1, 0]);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
  };

  return (
    <section className="relative h-screen flex flex-col justify-center w-full pt-20 px-6 md:px-12 lg:px-24 bg-transparent">
      
      {/* --- LOGO WITHOUT BLEND MODE --- */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="absolute top-8 left-8 md:top-12 md:left-12 z-30 pointer-events-auto"
      >
        <a 
          href="https://www.linkedin.com/in/maged-mohammed-al-hilali-298764277/"
          target="_blank"
          rel="noopener noreferrer"
          className="block relative group"
        >
          <div className="absolute inset-0 bg-white/5 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <img 
            src="/Portfolio/WebsiteLogo2.png" 
            alt="Maged Al Hilali Logo" 
            // mix-blend-difference has been removed
            className="w-20 md:w-28 h-auto hover:scale-105 transition-all duration-300 backdrop-blur-[2px] brightness-110" 
          />
        </a>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full pointer-events-none"
      >
        {/* --- TITLE --- */}
        <div className="overflow-hidden">
          <motion.h1 
            variants={itemVariants} 
            className="font-serif text-[12vw] leading-[0.9] tracking-tighter text-white mix-blend-difference"
          >
            MAGED
          </motion.h1>
        </div>
        <div className="overflow-hidden">
          <motion.h1 
            variants={itemVariants} 
            className="font-serif text-[12vw] leading-[0.9] tracking-tighter text-white pl-[10vw] mix-blend-difference"
          >
            AL HILALI
          </motion.h1>
        </div>
        
        <div className="mt-12 md:mt-16">
          <div className="w-full h-px bg-white mb-8 mix-blend-exclusion" />

          <div className="flex flex-col md:flex-row md:items-center justify-between">
            <motion.div 
              variants={itemVariants} 
              className="max-w-lg mb-8 md:mb-0 mix-blend-exclusion"
            >
              <p className="font-sans text-sm md:text-base tracking-widest uppercase opacity-80 mb-2 text-white">
                Business Development Officer • Researcher • Game Developer
              </p>
              <p className="font-sans text-lg md:text-xl font-normal opacity-90 leading-relaxed text-white">
                Navigating the intersection of infrastructure growth, academic inquiry, and interactive narritive game development.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="flex gap-6 relative z-50 pointer-events-auto">
              <a 
                href="https://www.linkedin.com/in/maged-mohammed-al-hilali-298764277/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-6 py-3 border border-offwhite/30 rounded-full overflow-hidden flex items-center gap-2 transition-all hover:border-offwhite"
              >
                <span className="absolute inset-0 w-full h-full bg-offwhite transform translate-y-full transition-transform duration-300 group-hover:translate-y-0 ease-out" />
                <span className="relative z-10 text-offwhite group-hover:text-charcoal transition-colors flex items-center gap-2">
                  LinkedIn <ArrowUpRight size={18} />
                </span>
              </a>
              
              <a 
                href="#" 
                className="group relative px-6 py-3 border border-offwhite/30 rounded-full overflow-hidden flex items-center gap-2 transition-all hover:border-offwhite"
              >
                <span className="absolute inset-0 w-full h-full bg-offwhite transform translate-y-full transition-transform duration-300 group-hover:translate-y-0 ease-out" />
                <span className="relative z-10 text-offwhite group-hover:text-charcoal transition-colors flex items-center gap-2">
                  Download CV <Download size={18} />
                </span>
              </a>
            </motion.div>
          </div>
        </div>
      </motion.div>

      <motion.div
        style={{ opacity: scrollIndicatorOpacity }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 mix-blend-exclusion pointer-events-none"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-[0.2em] text-white opacity-60">Scroll</span>
          <ArrowDown size={20} className="text-white opacity-60" strokeWidth={1.5} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
