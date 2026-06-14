import { AiOutlineLinkedin, AiOutlineGithub, AiOutlineMail } from "react-icons/ai";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-20 px-6 bg-primary border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="text-center md:text-left">
          <a href="#home" className="text-2xl font-display font-black text-white tracking-tighter mb-4 block">
            ARAVIND<span className="text-accent">.</span>
          </a>
          <p className="text-gray-500 text-sm max-w-xs">
            Designing and developing high-performance digital experiences with passion and precision.
          </p>
        </div>

        <div className="flex gap-8">
          {[
            { icon: <AiOutlineGithub size={24} />, href: "https://github.com/aravindrps" },
            { icon: <AiOutlineLinkedin size={24} />, href: "https://www.linkedin.com/in/aravindkumarr02/" },
            { icon: <AiOutlineMail size={24} />, href: "mailto:aravindrps75@gmail.com" }
          ].map((social, idx) => (
            <a 
              key={idx}
              href={social.href}
              className="text-gray-400 hover:text-accent transition-colors"
              target="_blank"
              rel="noreferrer"
            >
              {social.icon}
            </a>
          ))}
        </div>

        <div className="text-center md:text-right">
          <p className="text-white font-bold mb-1">Stay in touch</p>
          <p className="text-gray-500 text-sm">© {currentYear} Aravind Kumar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}