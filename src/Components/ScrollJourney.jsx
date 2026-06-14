import React, { useEffect, useState } from 'react';

const ScrollJourney = () => {
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    let rafId;
    const handleScroll = () => {
      rafId = requestAnimationFrame(() => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        setScrollPercent(scrolled);
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 h-48 w-1.5 bg-secondary rounded-full overflow-hidden z-40 hidden md:block border border-white/5">
      <div 
        className="w-full bg-gradient-to-b from-accent to-accent-cyan rounded-full transition-all duration-150 ease-out shadow-[0_0_10px_rgba(139,92,246,0.5)]"
        style={{ height: `${scrollPercent}%` }}
      />
      {/* Floating Indicator */}
      <div 
        className="absolute w-4 h-4 bg-white rounded-full -left-1.5 shadow-[0_0_15px_#fff] transition-all duration-150 ease-out"
        style={{ top: `${scrollPercent}%`, transform: 'translateY(-50%)' }}
      >
        <div className="absolute inset-0 bg-accent animate-ping rounded-full opacity-40"></div>
      </div>
    </div>
  );
};

export default ScrollJourney;
