import React from 'react';
import { motion } from 'framer-motion';

const Skillset = () => {
  const categories = [
    {
      name: "Frontend",
      skills: ["React.js", "Next.js", "Tailwind CSS", "Redux", "Framer Motion"],
      icon: "🎨"
    },
    {
      name: "Backend",
      skills: ["Node.js", "Express", "MongoDB", "PostgreSQL", "GraphQL"],
      icon: "⚙️"
    },
    {
      name: "Tools",
      skills: ["Git", "Docker", "AWS", "Firebase", "Postman"],
      icon: "🛠️"
    }
  ];

  return (
    <section id="skills" className="py-24 px-6 md:px-20 bg-primary">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-display font-extrabold text-white mb-4">
            Technical <span className="gradient-text">Arsenal</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            The tools and technologies I use to bring ideas to life. I focus on modern, scalable, and efficient stacks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((cat, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ scale: 1.02 }}
              className="glass p-8 rounded-[2.5rem] border border-white/5 relative group"
            >
              <div className="absolute top-8 right-8 text-3xl opacity-20 group-hover:opacity-100 transition-opacity">
                {cat.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-8">{cat.name}</h3>
              
              <div className="flex flex-wrap gap-3">
                {cat.skills.map(skill => (
                  <span 
                    key={skill}
                    className="px-4 py-2 bg-secondary border border-white/10 rounded-xl text-gray-300 text-sm font-medium hover:border-accent hover:text-white transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Decorative accent */}
              <div className="mt-8 pt-8 border-t border-white/5 flex items-center justify-between">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full bg-accent/20 border border-white/10" />
                  ))}
                </div>
                <span className="text-xs text-gray-500 font-mono tracking-tighter">Level: Expert</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skillset;