import { useEffect, useState, useMemo } from 'react';
import HeroImg from '../Assets/animea.png';
import { AiOutlineLinkedin, AiOutlineGithub } from "react-icons/ai";
import './Hero.css';



export default function Hero() {
    const config = {
        // subtitle: "I am a Full-stack Developer",
        social: {
            linkedin: "https://www.linkedin.com/in/aravind-kumar-37116b2b2/",
            Github: "https://github.com/Aravindkumar5500"
        }
    };

    const words = useMemo(() => [
        "I am a Full-stack Developer",
        "Welcome to My Portfolio",
        "Explore My Projects"
    ], []);
    const [start,setStart] = useState(0);
    const [end,setEnd] = useState(0);
    const [isDelting, setIsDeleting] = useState(false);
    const [display,SetDisplay] = useState("")

    useEffect(()=>{
        let timeout;
        const currentWord = words[start]
        if (isDelting){
            SetDisplay(currentWord.substring(0, end-1))
            timeout = setTimeout( () => setEnd(end-1), 100)
            if (end === 0) {
                setIsDeleting(false);
                setStart((start + 1) % words.length);
                SetDisplay("");
                setEnd(0);
            }
        } else {
            SetDisplay (currentWord.substring(0 , end +1))
            timeout = setTimeout(()=> setEnd (end +1 ), 200 )
            if (end === currentWord.length) {
                setIsDeleting(true);
                timeout = setTimeout(() => setIsDeleting(true), 2000);
            }

        }
        return () => clearTimeout(timeout)
    }
, [end, isDelting, start, words.length, words]);

    return (
        <>
    
    <section className="herosec flex flex-col px-4 sm:px-8 py-8 bg-primary justify-center items-center gap-y-8">
  <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 items-center gap-8">
    {/* Text Section */}
    <div className="flex flex-col items-center md:items-start text-center md:text-left w-full">
      <h1 className="text-white text-3xl sm:text-4xl md:text-6xl font-hero-font mb-4 leading-tight whitespace-nowrap">
  Hi, I'm <span className="name text-cyan-300">Aravind</span> Kumar
</h1>
     <div className='hero-subtitle mb-4'>
  <h2 className="text-xl sm:text-2xl min-h-[2.5rem] whitespace-nowrap">
    {display}
    <span className="border-r-2 border-white animate-pulse ml-1"></span>
  </h2>
</div>
      <div className="flex py-2 justify-center md:justify-start">
        <a href={config.social.linkedin} className="pr-5 hover:text-white">
          <AiOutlineLinkedin color='blue' size={36} />
        </a>
        <a href={config.social.Github} className="pr-5 hover:text-white">
          <AiOutlineGithub color='orange' size={36} />
        </a>
      </div>
    </div>
    {/* Image Section */}
  <div className="image-section flex justify-center md:justify-end w-full">
<img
  className="w-64 h-80 sm:w-80 sm:h-96 md:w-96 md:h-[28rem] rounded-lg shadow-lg m-6 object-cover"
  src={HeroImg}
  alt="Hero section illustration"
/>
</div>
  </div>
</section>
            
        </>
    );
}