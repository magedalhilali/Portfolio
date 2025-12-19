import React, { useEffect } from 'react';

const UnicornBackground: React.FC = () => {
  useEffect(() => {
    // Unicorn Studio script injection logic
    const loadUnicornScript = () => {
      const w = window as any;
      if (!w.UnicornStudio) {
        w.UnicornStudio = { isInitialized: false };
        const script = document.createElement("script");
        script.src = "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.5.3/dist/unicornStudio.umd.js";
        script.onload = function() {
          if (!w.UnicornStudio.isInitialized) {
            w.UnicornStudio.init();
            w.UnicornStudio.isInitialized = true;
          }
        };
        (document.head || document.body).appendChild(script);
      } else if (!w.UnicornStudio.isInitialized && w.UnicornStudio.init) {
          w.UnicornStudio.init();
          w.UnicornStudio.isInitialized = true;
      }
    };

    loadUnicornScript();
  }, []);

  return (
    // FIX 1: Changed 'bg-black' to 'bg-[#0a0a0a]' to match your other sections
    <div className="absolute top-0 left-0 w-full h-screen -z-10 pointer-events-none overflow-hidden bg-[#0a0a0a]">
      {/* FIX 2: Tightened the mask. 
        - Start fade at 50% (gives it plenty of room to be smooth)
        - End fade at 90% (forces the bottom 10% to be invisible, cutting off the button)
      */}
      <div 
        className="w-full h-full"
        style={{
          maskImage: 'linear-gradient(to bottom, black 50%, transparent 90%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black 50%, transparent 90%)'
        }}
      >
        <div 
          data-us-project="1lWMiFjojI5d3K0AEFR4" 
          className="w-full h-full"
        />
      </div>
    </div>
  );
};

export default UnicornBackground;