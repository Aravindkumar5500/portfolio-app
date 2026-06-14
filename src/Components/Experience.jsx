import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      year: "2024 - Present",
      title: "MERN Stack Developer",
      company: "Freelance / Personal Projects",
      desc: "Building complex web applications focusing on real-time features and high scalability.",
      icon: "🚀"
    },
    {
      year: "2023 - 2024",
      title: "Front-End Developer Trainee",
      company: "Learning Platforms",
      desc: "Mastered React.js, Tailwind CSS, and modern UI/UX principles.",
      icon: "💻"
    },
    {
      year: "2022 - 2023",
      title: "Programming Fundamentals",
      company: "Self-Taught",
      desc: "Deep dived into Java, Spring Boot, and Database management.",
      icon: "📚"
    }
  ];

  return (
    <section id="experience" className="py-24 px-6 md:px-20 bg-secondary/30 relative">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-display font-extrabold text-white mb-4">
            My <span className="gradient-text">Journey</span>
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 -translate-x-1/2 w-0.5 h-full bg-white/10 hidden md:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex flex-col md:flex-row items-center justify-between gap-8 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Node */}
                <div className="absolute left-1/2 -translate-x-1/2 w-10 h-10 bg-primary border-4 border-accent rounded-full z-10 hidden md:flex items-center justify-center text-lg">
                  {exp.icon}
                </div>

                <div className="w-full md:w-[45%] glass p-8 rounded-3xl hover:border-accent/40 transition-all">
                  <span className="text-accent font-bold text-sm mb-2 block">{exp.year}</span>
                  <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>
                  <p className="text-accent-cyan text-sm mb-4 font-medium">{exp.company}</p>
                  <p className="text-gray-400 text-sm leading-relaxed">{exp.desc}</p>
                </div>
                <div className="hidden md:block w-[45%]"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
