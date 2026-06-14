import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

const CustomCursor = () => {
  const [isPointer, setIsPointer] = useState(false);

  const mouseX = useSpring(0, { stiffness: 500, damping: 50 });
  const mouseY = useSpring(0, { stiffness: 500, damping: 50 });
  
  const trailerX = useSpring(0, { stiffness: 100, damping: 25 });
  const trailerY = useSpring(0, { stiffness: 100, damping: 25 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      trailerX.set(e.clientX);
      trailerY.set(e.clientY);
      
      const target = e.target;
      if (target) {
        setIsPointer(
          window.getComputedStyle(target).cursor === 'pointer' || 
          target.tagName === 'A' || 
          target.tagName === 'BUTTON' ||
          target.closest('a') ||
          target.closest('button')
        );
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY, trailerX, trailerY]);

  return (
    <>
      <motion.div 
        className="fixed pointer-events-none z-[9999] hidden md:block"
        style={{ 
          x: mouseX, 
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
          scale: isPointer ? 2.5 : 1
        }}
      >
        <div className="w-3 h-3 rounded-full bg-accent shadow-[0_0_15px_#00ffcc]" />
      </motion.div>
      
      {/* Lagging Trailer */}
      <motion.div 
        className="fixed pointer-events-none z-[9998] hidden md:block opacity-30"
        style={{ 
          x: trailerX, 
          y: trailerY,
          translateX: "-50%",
          translateY: "-50%",
          scale: isPointer ? 4 : 2
        }}
      >
        <div className="w-6 h-6 rounded-full border border-accent shadow-[0_0_20px_rgba(0,255,204,0.3)]" />
      </motion.div>
    </>
  );
};

export default CustomCursor;
