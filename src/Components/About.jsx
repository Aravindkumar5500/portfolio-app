import { motion } from 'framer-motion';
const AboutImg = "/Assets/about.png";

export default function About() {
  const stats = [
    { label: "Years Experience", value: "2+" },
    { label: "Projects Completed", value: "15+" },
    { label: "Happy Clients", value: "10+" }
  ];

  return (
    <section id="about" className="py-24 px-6 md:px-20 bg-primary overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
        
        {/* Visual Side */}
        <div className="w-full md:w-1/2 relative group">
          <div className="absolute -inset-4 bg-gradient-to-tr from-accent to-accent-cyan rounded-3xl blur-2xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="relative glass p-4 rounded-3xl overflow-hidden border border-white/10"
          >
            <img 
              src={AboutImg} 
              alt="About Aravind" 
              className="w-full h-auto rounded-2xl grayscale group-hover:grayscale-0 transition-all duration-700"
            />
            {/* Overlay Info */}
            <div className="absolute bottom-10 left-10 p-6 glass rounded-2xl border border-white/20">
              <p className="text-white font-bold text-xl mb-1">Aravind Kumar</p>
              <p className="text-accent-cyan text-sm">Full Stack Developer</p>
            </div>
          </motion.div>
        </div>

        {/* Content Side */}
        <div className="w-full md:w-1/2">
          <h2 className="text-4xl md:text-5xl font-display font-extrabold text-white mb-8 leading-tight">
            I craft <span className="gradient-text">scalable</span> solutions <br />
            with modern code.
          </h2>
          
          <div className="space-y-6 mb-12">
            <p className="text-gray-400 text-lg leading-relaxed">
              Based in India, I specialize in building high-performance web applications using the 
              <span className="text-white font-medium"> MERN stack</span>. My approach focuses on clean architecture, 
              responsive design, and exceptional user experiences.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
              When I'm not coding, I explore new technologies, contribute to open-source, and mentor 
              aspiring developers. I believe in continuous learning and the power of collaboration.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-6">
            {stats.map((stat, idx) => (
              <div key={idx} className="p-4 rounded-2xl glass border border-white/5 text-center">
                <p className="text-3xl font-bold text-white mb-1">{stat.value}</p>
                <p className="text-gray-500 text-xs uppercase tracking-widest">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Skills Marquee - Enhanced */}
      <div className="mt-24 py-12 border-y border-white/5 overflow-hidden">
        <div className="flex animate-slide-left whitespace-nowrap gap-12">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-12 items-center text-5xl font-display font-black text-white/5 uppercase select-none">
              <span>React.js</span> <span>•</span>
              <span>Node.js</span> <span>•</span>
              <span>MongoDB</span> <span>•</span>
              <span>Tailwind CSS</span> <span>•</span>
              <span>Next.js</span> <span>•</span>
              <span>Express</span> <span>•</span>
              <span>JavaScript</span> <span>•</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}