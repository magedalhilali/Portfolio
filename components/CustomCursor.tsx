import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

const CustomCursor: React.FC = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  // Middle ground settings:
  // Stiffness 400 provides a responsive snap without being instantaneous/rigid.
  // Damping 28 ensures a smooth settlement without feeling "heavy" or oscillating.
  const springConfig = { damping: 28, stiffness: 400 };
  
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('a') || target.closest('button')) {
        setHovered(true);
      } else {
        setHovered(false);
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [cursorX, cursorY]);

  return (
    <motion.div
      // FIX: Added 'hidden md:block' at the start of the list below
      className="hidden md:block fixed top-0 left-0 w-8 h-8 rounded-full border border-offwhite pointer-events-none z-50 mix-blend-difference"
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
      }}
      animate={{
        scale: hovered ? 2.5 : 1,
        backgroundColor: hovered ? 'rgba(229, 229, 229, 0.1)' : 'transparent',
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-offwhite rounded-full -translate-x-1/2 -translate-y-1/2" />
    </motion.div>
  );
};

export default CustomCursor;