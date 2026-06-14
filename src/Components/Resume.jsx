const ResumeImg = "/Assets/Aravind.png";

export default function Resume() {
  return (
    <section id="resume" className="py-24 px-6 bg-secondary/20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
        <div className="w-full md:w-1/2">
          <h2 className="text-4xl md:text-6xl font-display font-black text-white mb-8">
            MY <span className="gradient-text">RESUME</span>
          </h2>
          <p className="text-gray-400 text-lg mb-12 leading-relaxed">
            Download my full CV to see a detailed breakdown of my technical experience, 
            education, and the impact I've made in various projects.
          </p>
          <a 
            href="/Assets/Aravind Kumar R.pdf" 
            download 
            className="inline-block px-10 py-5 bg-accent text-black font-black rounded-full hover:scale-105 transition-all shadow-xl shadow-accent/20"
          >
            DOWNLOAD CV
          </a>
        </div>
        
        <div className="w-full md:w-1/2 relative group">
          <div className="absolute -inset-4 bg-accent/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-all" />
          <div className="relative glass p-4 rounded-3xl border border-white/10">
            <img 
              src={ResumeImg} 
              alt="Resume Preview" 
              className="w-full h-auto rounded-2xl grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </div>
      </div>
    </section>
  );
}