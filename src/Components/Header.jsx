import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let rafId;
    const handleScroll = () => {
      rafId = requestAnimationFrame(() => {
        setScrolled(window.scrollY > 50);
        
        const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(progress);
      });
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  const navLinks = [
    { name: 'Work', href: '#projects' },
    { name: 'Identity', href: '#about' },
    { name: 'Timeline', href: '#experience' },
    { name: 'Stack', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${scrolled ? 'py-3' : 'py-6'}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className={`glass px-8 py-3 rounded-full flex justify-between items-center transition-all ${scrolled ? 'border-accent/20 bg-black/60 shadow-[0_0_30px_rgba(0,255,204,0.1)]' : 'bg-transparent border-transparent'}`}>
          
          <a href="#home" className="text-xl font-display font-black text-white tracking-tighter flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-neon rounded-lg" />
            ARAVIND
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                className="text-xs font-bold uppercase tracking-widest text-gray-500 hover:text-accent transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full" />
              </a>
            ))}
          </nav>

          <button className="hidden md:block px-6 py-2 bg-accent/10 border border-accent/30 text-accent text-xs font-bold rounded-full hover:bg-accent hover:text-black transition-all">
            START PROJECT
          </button>

          {/* Mobile Toggle */}
          <button className="md:hidden text-white" onClick={() => setMobileMenu(!mobileMenu)}>
            {mobileMenu ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 h-[2px] bg-accent transition-all duration-150 shadow-[0_0_10px_#00ffcc]" style={{ width: `${scrollProgress}%` }} />

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenu && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="fixed inset-0 bg-black/95 z-[101] flex flex-col items-center justify-center gap-8 md:hidden"
          >
            <button className="absolute top-10 right-10 text-white" onClick={() => setMobileMenu(false)}>
              <FiX size={32} />
            </button>
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setMobileMenu(false)}
                className="text-4xl font-black text-white hover:text-accent transition-colors tracking-tighter"
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
