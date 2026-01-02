
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, Play, X, ExternalLink, BookOpen } from 'lucide-react';
import { Project } from '../types';

interface ProjectDetailProps {
  project: Project;
  isFirstProject: boolean;
  isLastProject: boolean;
  onBack: () => void;
  onNext: () => void;
  onPrevious: () => void;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ 
  project, 
  isFirstProject, 
  isLastProject, 
  onBack, 
  onNext, 
  onPrevious      
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedGalleryImage, setSelectedGalleryImage] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsPlaying(false);
  }, [project.id]);

  // Handle Escape key to close lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedGalleryImage(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const getEmbedUrl = (id: string) => {
    const origin = typeof window !== 'undefined' ? window.location.origin : '';
    return `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&mute=0&rel=0&modestbranding=1&playsinline=1&enablejsapi=1&origin=${origin}`;
  };

  return (
    <div className="min-h-screen w-full px-6 md:px-12 lg:px-24 py-12 md:py-20">
      
      {/* Header / Back Navigation */}
      <div className="flex justify-between items-center mb-12 md:mb-20">
        <button 
          onClick={onBack}
          className="group flex items-center gap-3 text-sm font-sans uppercase tracking-widest opacity-60 hover:opacity-100 transition-opacity"
        >
          <div className="p-2 border border-white/20 rounded-full group-hover:bg-white group-hover:text-charcoal transition-colors">
            <ArrowLeft size={16} />
          </div>
          <span>Back to Home</span>
        </button>
      </div>

      <motion.div
        key={project.id}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Category Label */}
        <motion.span 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ delay: 0.2 }}
          className="block font-sans text-xs md:text-sm tracking-[0.2em] uppercase mb-4 text-offwhite"
        >
          {project.category}
        </motion.span>

        {/* Title */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="font-serif text-4xl md:text-7xl lg:text-8xl mb-12 md:mb-16 text-offwhite leading-[0.9]"
        >
          {project.title}
        </motion.h1>

        {/* --- MEDIA HERO SECTION --- */}
        {(project.image || project.youtubeId) && !project.education && (
          <motion.div 
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className={`w-full ${project.youtubeId ? 'aspect-video' : 'h-[40vh] md:h-[50vh]'} rounded-2xl overflow-hidden mb-12 md:mb-16 border border-white/10 relative bg-[#121212] shadow-2xl`}
          >
            {isPlaying && project.youtubeId ? (
              <div className="w-full h-full relative animate-in fade-in duration-500">
                 <iframe
                   width="100%"
                   height="100%"
                   src={getEmbedUrl(project.youtubeId)}
                   title="YouTube video player"
                   frameBorder="0"
                   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                   allowFullScreen
                   referrerPolicy="strict-origin-when-cross-origin"
                   className="absolute inset-0 w-full h-full"
                 ></iframe>
                 <button 
                    onClick={() => setIsPlaying(false)}
                    className="absolute top-6 right-6 p-2 rounded-full bg-black/50 hover:bg-black/80 text-white backdrop-blur-md transition-colors z-20 border border-white/10"
                 >
                    <X size={24} />
                 </button>
              </div>
            ) : (
              <div 
                className={`relative w-full h-full ${project.youtubeId ? 'cursor-pointer group' : ''}`}
                onClick={() => project.youtubeId && setIsPlaying(true)}
              >
                {project.image && (
                  <img 
                    src={project.detailImage || project.image} 
                    alt={project.title} 
                    className={`w-full h-full object-cover transition-all duration-700 
                      ${project.youtubeId ? 'opacity-60 group-hover:opacity-40 group-hover:scale-105' : 'opacity-100'}
                    `}
                  />
                )}
                {project.youtubeId && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
                    <motion.div 
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white/10 backdrop-blur-md border border-white/30 flex items-center justify-center transition-all duration-300 group-hover:bg-white/20 group-hover:border-white shadow-[0_0_30px_rgba(255,255,255,0.1)]"
                    >
                      <Play fill="white" className="ml-2 text-white" size={32} />
                    </motion.div>
                    <span className="mt-6 text-sm font-sans uppercase tracking-[0.2em] text-white opacity-80 group-hover:opacity-100 transition-opacity translate-y-4 group-hover:translate-y-0 duration-300">
                      Play Trailer
                    </span>
                  </div>
                )}
              </div>
            )}
          </motion.div>
        )}

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24">
          
          <div className="lg:col-span-4">
            <div className="w-full h-px bg-white/20 mb-6" />
            <h3 className="font-serif text-2xl mb-4">
              {project.overviewTitle || "Overview"}
            </h3>
            <p className="font-sans text-sm opacity-60 leading-relaxed">
              {project.description}
            </p>
          </div>
          
          <div className="lg:col-span-7 lg:col-start-6">
              
              {/* CONDITION 1: EDUCATION */}
              {project.education ? (
                <div className="flex flex-col gap-12">
                  <div className="space-y-8">
                     <div className="border-l-2 border-white/20 pl-6">
                        <h4 className="font-serif text-3xl mb-1 text-white">{project.education.university}</h4>
                        <p className="text-lg opacity-80 mb-2">{project.education.degree}</p>
                        <div className="flex gap-4 text-xs font-sans uppercase tracking-widest opacity-60">
                           <span>{project.education.year}</span>
                           <span>•</span>
                           <span>{project.education.score}</span>
                        </div>
                     </div>
                     <div className="border-l-2 border-white/10 pl-6">
                        <h4 className="font-serif text-2xl mb-1 text-white opacity-90">{project.education.highSchool}</h4>
                        <p className="text-sm font-sans uppercase tracking-widest opacity-60">{project.education.highSchoolGrade}</p>
                     </div>
                  </div>

                  {project.languages && (
                    <div>
                      <h3 className="font-serif text-2xl mb-6 border-b border-white/10 pb-4">Languages</h3>
                      <div className="grid grid-cols-1 gap-4">
                        {project.languages.map((lang, idx) => (
                           <div key={idx} className="bg-white/5 border border-white/10 rounded-xl p-5 flex items-center justify-between hover:bg-white/10 transition-colors">
                              <div>
                                 <h4 className="font-serif text-xl">{lang.language}</h4>
                                 <span className="text-xs font-sans uppercase tracking-widest opacity-50">{lang.level}</span>
                              </div>
                              <div className="w-32 md:w-48 h-1 bg-white/10 rounded-full overflow-hidden">
                                 <motion.div 
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${lang.percentage}%` }}
                                    transition={{ duration: 1, delay: 0.5 }}
                                    className="h-full bg-white opacity-80"
                                 />
                              </div>
                           </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {project.galleryImages && (
                    <div className="grid grid-cols-2 gap-4 md:gap-8 mt-4">
                       {project.galleryImages.map((img, idx) => (
                          <motion.div 
                            key={idx} 
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => setSelectedGalleryImage(img)}
                            className="aspect-[3/4] rounded-lg overflow-hidden border border-white/10 cursor-pointer shadow-lg group relative"
                          >
                             <img 
                               src={img} 
                               alt="Education" 
                               className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                             />
                             <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <span className="text-xs font-sans uppercase tracking-widest bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">Expand</span>
                             </div>
                          </motion.div>
                       ))}
                    </div>
                  )}
                </div>

              ) : project.publications ? (
                /* CONDITION 2: PUBLICATIONS */
                <div className="flex flex-col gap-8">
                  <p className="font-sans text-lg md:text-xl leading-relaxed opacity-80 mb-4">
                    {project.longDescription}
                  </p>
                  {project.publications.map((pub, index) => (
                    <div key={index} className="group border border-white/10 p-6 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                      <div className="flex flex-col md:flex-row gap-4 justify-between md:items-start">
                        <div className="flex-1">
                          <h4 className="font-serif text-xl mb-2 text-offwhite group-hover:text-white transition-colors">
                            {pub.title}
                          </h4>
                          <div className="flex items-center gap-2 text-xs font-sans uppercase tracking-widest opacity-60 mb-2">
                             <BookOpen size={12} />
                             <span>{pub.publisher}</span>
                          </div>
                          {pub.note && <p className="text-sm opacity-50 italic">{pub.note}</p>}
                        </div>
                        {pub.link && (
                          <a 
                            href={pub.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex-shrink-0 flex items-center gap-2 px-4 py-2 border border-white/20 rounded-full text-xs font-sans uppercase tracking-widest hover:bg-white hover:text-black transition-all mt-4 md:mt-0 w-fit"
                          >
                            Read Paper <ExternalLink size={12} />
                          </a>
                        )}
                        {!pub.link && (
                           <span className="flex-shrink-0 px-4 py-2 border border-white/5 rounded-full text-xs font-sans uppercase tracking-widest opacity-40 cursor-not-allowed mt-4 md:mt-0 w-fit">
                             Pending
                           </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                /* CONDITION 3: STANDARD */
                <p className="font-sans text-lg md:text-xl leading-relaxed opacity-80 whitespace-pre-line">
                  {project.longDescription || project.description}
                </p>
              )}
          </div>
        </div>

        {/* Footer Navigation Logic */}
        <div className="w-full flex justify-between items-end border-t border-white/10 pt-12">
          
          {/* PREVIOUS BUTTON */}
          <div className="flex-1 flex justify-start">
             {!isFirstProject && (
               <button 
                 onClick={onPrevious}
                 className="group flex flex-col items-start text-left focus:outline-none"
               >
                 <span className="text-xs font-sans uppercase tracking-widest opacity-50 mb-2 group-hover:opacity-100 transition-opacity">
                   Previous Project
                 </span>
                 <div className="flex items-center gap-4">
                   <div className="p-3 border border-white/20 rounded-full group-hover:bg-offwhite group-hover:text-charcoal transition-all duration-300">
                      <ArrowLeft size={20} />
                   </div>
                   <span className="font-serif text-2xl md:text-4xl transition-all duration-300 group-hover:-translate-x-2">
                     View Previous
                   </span>
                 </div>
               </button>
             )}
          </div>

          {/* NEXT BUTTON */}
          <div className="flex-1 flex justify-end">
             <button 
               onClick={isLastProject ? onBack : onNext}
               className="group flex flex-col items-end text-right focus:outline-none"
             >
               <span className="text-xs font-sans uppercase tracking-widest opacity-50 mb-2 group-hover:opacity-100 transition-opacity">
                 {isLastProject ? "Overview" : "Next Project"}
               </span>
               <div className="flex items-center gap-4">
                 <span className="font-serif text-2xl md:text-4xl transition-all duration-300 group-hover:translate-x-2">
                   {isLastProject ? "Back to Home" : "View Next"}
                 </span>
                 <div className="p-3 border border-white/20 rounded-full group-hover:bg-offwhite group-hover:text-charcoal transition-all duration-300">
                    {isLastProject ? <ArrowLeft size={20} /> : <ArrowRight size={20} />}
                 </div>
               </div>
             </button>
          </div>
        </div>
      </motion.div>

      {/* --- FANCY LIGHTBOX --- */}
      <AnimatePresence>
        {selectedGalleryImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12 bg-black/90 backdrop-blur-xl cursor-zoom-out"
            onClick={() => setSelectedGalleryImage(null)}
          >
            {/* Close Button */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="absolute top-6 right-6 md:top-12 md:right-12 z-[110] p-4 rounded-full bg-white/10 hover:bg-white text-white hover:text-black transition-all duration-300 border border-white/20"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedGalleryImage(null);
              }}
            >
              <X size={24} />
            </motion.button>

            {/* Enlarge Image Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 1.05, y: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative max-w-full max-h-full overflow-hidden rounded-xl border border-white/10 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={selectedGalleryImage} 
                alt="Enlarged gallery view" 
                className="max-h-[85vh] md:max-h-[90vh] w-auto object-contain pointer-events-none"
              />
              
              {/* Bottom Label in Lightbox */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                <span className="text-xs font-sans uppercase tracking-[0.3em] text-white/60">
                   Academic Documentation — {project.title}
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProjectDetail;
