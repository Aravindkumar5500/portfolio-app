import { useState, useEffect } from "react";
import { AiOutlineGithub, AiOutlineLink } from "react-icons/ai";
import { motion } from "framer-motion";

export default function Project() {
  const [projects, setProjects] = useState([
    {
      title: "Personal Developer Portfolio",
      description: "My initial high-end portfolio design featuring smooth transitions and modern aesthetics.",
      image: "/Assets/port.png",
      link: "https://github.com/Aravindkumar5500/portfolio-app",
      tags: ["React", "Tailwind", "Framer Motion"],
      size: "large"
    },
    {
      title: "Clinic Appointment Calendar",
      description: "Responsive clinic appointment calendar with monthly scheduling and local browser persistence.",
      image: "/Assets/Clinic.png",
      link: "https://github.com/Aravindkumar5500/appointment-calendar",
      tags: ["React", "Firebase"],
      size: "small"
    },
    {
      title: "Tic-Tac-Toe",
      description: "Two-player React game with turn tracking, win and draw detection, a winning-line indicator, and reset controls.",
      image: "/Assets/Tictok.png",
      link: "https://github.com/Aravindkumar5500/Tic-Tac-Toe",
      tags: ["React", "JavaScript"],
      size: "small"
    }
  ]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/projects');
        if (response.ok) {
          const data = await response.json();
          if (data.length > 0) {
            setProjects(prev => JSON.stringify(prev) === JSON.stringify(data) ? prev : data);
          }
        }
      } catch (err) {
        console.log("Backend fetch failed, using local fallback.");
      }
    };
    fetchProjects();
  }, []);

  return (
    <section id="projects" className="py-24 px-6 md:px-20 bg-primary">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-accent font-semibold tracking-widest uppercase text-sm mb-4 block">Portfolio</span>
            <h2 className="text-4xl md:text-6xl font-display font-extrabold text-white leading-tight">
              Selected <span className="gradient-text">Works</span>
            </h2>
            <p className="text-gray-400 mt-6 text-lg leading-relaxed">
              A collection of projects where I've combined technical problem-solving with creative design to build impactful solutions.
            </p>
          </div>
          <a href="https://github.com/Aravindkumar5500" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-white/60 hover:text-white transition-colors group">
            <span className="font-medium">View all on GitHub</span>
            <AiOutlineGithub size={24} className="group-hover:rotate-12 transition-transform" />
          </a>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-auto md:h-[800px]">
          {/* Main Large Project */}
          {projects[0] && (
            <motion.div 
              whileHover={{ y: -10 }}
              className="md:col-span-2 md:row-span-2 group relative rounded-3xl overflow-hidden glass border border-white/5"
            >
              <img src={projects[0].image} alt={projects[0].title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/20 to-transparent p-8 flex flex-col justify-end">
                <div className="flex gap-2 mb-4">
                  {projects[0].tags?.map(tag => <span key={tag} className="px-3 py-1 bg-accent/20 text-accent text-xs rounded-full border border-accent/30">{tag}</span>)}
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">{projects[0].title}</h3>
                <p className="text-gray-300 mb-6 max-w-md">{projects[0].description}</p>
                <div className="flex gap-4">
                  <a href={projects[0].link} target="_blank" rel="noreferrer" className="p-3 bg-white text-primary rounded-xl hover:bg-accent hover:text-white transition-all"><AiOutlineGithub size={22} /></a>
                  <a href={projects[0].link} target="_blank" rel="noreferrer" className="p-3 bg-white/10 text-white rounded-xl hover:bg-accent-cyan transition-all"><AiOutlineLink size={22} /></a>
                </div>
              </div>
            </motion.div>
          )}

          {/* Small Project 1 */}
          {projects[1] && (
            <motion.div 
              whileHover={{ y: -10 }}
              className="group relative rounded-3xl overflow-hidden glass border border-white/5 min-h-[300px]"
            >
              <img src={projects[1].image} alt={projects[1].title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent p-6 flex flex-col justify-end">
                <h3 className="text-xl font-bold text-white mb-2">{projects[1].title}</h3>
                <p className="text-gray-300 text-sm mb-4 line-clamp-2">{projects[1].description}</p>
                <a href={projects[1].link} target="_blank" rel="noreferrer" className="w-10 h-10 flex items-center justify-center bg-white/10 text-white rounded-lg hover:bg-accent transition-all"><AiOutlineGithub size={20} /></a>
              </div>
            </motion.div>
          )}

          {/* Small Project 2 */}
          {projects[2] && (
            <motion.div 
              whileHover={{ y: -10 }}
              className="group relative rounded-3xl overflow-hidden glass border border-white/5 min-h-[300px]"
            >
              <img src={projects[2].image} alt={projects[2].title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent p-6 flex flex-col justify-end">
                <h3 className="text-xl font-bold text-white mb-2">{projects[2].title}</h3>
                <p className="text-gray-300 text-sm mb-4 line-clamp-2">{projects[2].description}</p>
                <a href={projects[2].link} target="_blank" rel="noreferrer" className="w-10 h-10 flex items-center justify-center bg-white/10 text-white rounded-lg hover:bg-accent-cyan transition-all"><AiOutlineLink size={20} /></a>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}