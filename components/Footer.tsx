import React from 'react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  return (
    <footer className="py-24 md:py-32 flex flex-col justify-between min-h-[50vh] border-t border-white/10 px-6 md:px-12 lg:px-24">
      <div className="flex flex-col">
        <span className="font-sans text-sm tracking-widest uppercase opacity-50 mb-8">Get in touch</span>
        
        <motion.a 
          href="mailto:maged.alhilali705@gmail.com" 
          className="font-serif text-[8vw] leading-none text-offwhite opacity-80 hover:opacity-100 hover:text-white transition-all duration-500 origin-left hover:skew-x-6"
          whileHover={{ x: 20 }}
        >
          Maged.AlHilali
          <br />
          705@gmail.com
        </motion.a>
      </div>

      <div className="mt-24 flex flex-col md:flex-row justify-between items-end md:items-center text-sm font-sans opacity-40">
        <p>&copy; {new Date().getFullYear()} Maged Al Hilali. All Rights Reserved.</p>
        
        <div className="flex gap-8 mt-4 md:mt-0">
          <a 
            href="https://www.linkedin.com/in/maged-mohammed-al-hilali-298764277/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:opacity-100 hover:text-white transition-opacity"
          >
            LinkedIn
          </a>
          
          <a href="#" className="hover:opacity-100 hover:text-white transition-opacity">GitHub</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;