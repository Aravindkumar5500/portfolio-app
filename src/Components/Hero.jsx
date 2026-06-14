import { AiOutlineLinkedin, AiOutlineGithub } from "react-icons/ai";
import { motion } from 'framer-motion';
const HeroImg = "/Assets/animea.png";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center px-6 text-center overflow-hidden py-20">
      {/* Dynamic Background Elements */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="z-10"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-bold uppercase tracking-widest mb-8">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          Available for new projects
        </div>

        <h1 className="font-display text-6xl md:text-9xl font-black text-white mb-6 leading-none tracking-tighter">
          FULL STACK <br />
          <span className="gradient-text">ARCHITECT</span>
        </h1>

        <p className="text-gray-400 text-lg md:text-2xl max-w-2xl mx-auto mb-12 font-light leading-relaxed">
          I design and develop <span className="text-white font-medium">high-performance</span> digital systems. 
          Specializing in the MERN stack to deliver seamless, scalable, and visually stunning web experiences.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
          <a href="#contact" className="group relative px-10 py-5 bg-white text-black font-black rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95">
            <span className="relative z-10">LET'S TALK</span>
            <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </a>
          <a href="#projects" className="px-10 py-5 border border-white/10 text-white font-bold rounded-full hover:bg-white/5 transition-all">
            VIEW RECENT WORK
          </a>
        </div>

        {/* Floating Socials */}
        <div className="flex items-center justify-center gap-8">
          {[
            { icon: <AiOutlineGithub size={28} />, href: "https://github.com/aravindrps" },
            { icon: <AiOutlineLinkedin size={28} />, href: "https://www.linkedin.com/in/aravindkumarr02/" }
          ].map((social, idx) => (
            <motion.a 
              key={idx}
              whileHover={{ y: -5, color: "#00ffcc" }}
              href={social.href}
              className="text-gray-500 transition-colors"
              target="_blank"
              rel="noreferrer"
            >
              {social.icon}
            </motion.a>
          ))}
        </div>
      </motion.div>

      {/* Hero Image - Floating subtly */}
      <motion.div 
        className="absolute bottom-[-10%] right-[-5%] w-[40%] opacity-20 pointer-events-none hidden lg:block"
        animate={{ y: [0, -40, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      >
        <img src={HeroImg} alt="Abstract Visual" className="w-full h-auto blur-sm" />
      </motion.div>
    </section>
  );
}