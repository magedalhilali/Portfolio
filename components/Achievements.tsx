import React from 'react';
import { Achievement } from '../types';

const achievements: Achievement[] = [
  { id: 1, title: "Graduated Top of Class 2025 | GPA 3.97 | Excellent with Honors", issuer: "Liwa University", year: "2025" },
  { id: 2, title: "Published Leveraging AI Predictive Analytics to Understand and Influence Investor Behavior", issuer: "Springer : The Paradigm Shift from a Linear Economy to a Smart Circular Economy Book ", year: "2025" },
  { id: 3, title: "Published: Sustainify - Driving Sustainable Behavioral Change", issuer: "IEEE Xplore", year: "2025" },
  { id: 4, 
    title: "3rd Place Nationwide: UAE Game Makers Competition", 
    issuer: "Tawazun x Space42 x Endless Studios", 
    year: "2024" 
  },
  { 
    id: 5, 
    title: "Innovate to Shape the Future Award", 
    issuer: "Environment Agency – Abu Dhabi (EAD)", 
    year: "2024" 
  },
  { 
    id: 6, 
    title: "Google Project Management Professional Certificate", 
    issuer: "Google", 
    year: "2024" },
];

const Achievements: React.FC = () => {
  return (
    <section className="py-24 border-t border-white/10 overflow-hidden px-6 md:px-12 lg:px-24">
      <div className="mb-12 px-0">
        <h2 className="font-serif text-3xl md:text-4xl text-center md:text-left opacity-90">Distinctions & Certifications</h2>
      </div>

      <div className="relative flex overflow-x-hidden group">
        <div className="py-12 animate-marquee whitespace-nowrap flex gap-16 md:gap-32 group-hover:[animation-play-state:paused]">
          {/* First loop */}
          {achievements.map((item) => (
            <div key={item.id} className="flex flex-col items-start opacity-50 hover:opacity-100 transition-opacity duration-300 cursor-pointer">
              <span className="font-serif text-3xl md:text-5xl text-offwhite">{item.title}</span>
              <div className="flex gap-3 mt-2 font-sans text-xs md:text-sm tracking-widest uppercase text-white/60">
                <span>{item.issuer}</span>
                <span>—</span>
                <span>{item.year}</span>
              </div>
            </div>
          ))}
          
          {/* Second loop for infinite effect */}
          {achievements.map((item) => (
            <div key={`dup-${item.id}`} className="flex flex-col items-start opacity-50 hover:opacity-100 transition-opacity duration-300 cursor-pointer">
              <span className="font-serif text-3xl md:text-5xl text-offwhite">{item.title}</span>
              <div className="flex gap-3 mt-2 font-sans text-xs md:text-sm tracking-widest uppercase text-white/60">
                <span>{item.issuer}</span>
                <span>—</span>
                <span>{item.year}</span>
              </div>
            </div>
          ))}
        </div>
        
        {/* Gradients for smooth fade out at edges */}
        <div className="absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-charcoal to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-charcoal to-transparent z-10 pointer-events-none" />
      </div>
    </section>
  );
};

export default Achievements;