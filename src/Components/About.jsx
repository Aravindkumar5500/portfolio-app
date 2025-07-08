 import AboutImg from "../Assets/about.png";
 import Html from "../Assets/html5.png";
 import Css from "../Assets/css3.png";
  import Js from "../Assets/js.png";
  import Java from "../Assets/java.png";
 import React from "../Assets/react.png";
  import Node from "../Assets/nodejs.png";
  import Mongo from "../Assets/mongo.png";
   import Tailwind from "../Assets/tailwind.png";
  import Github from "../Assets/git.png";
  import Bootstrap from "../Assets/bootstrap.png";
  import Express from "../Assets/express.png";
  import figma from "../Assets/figma.png";
import MySql from "../Assets/mysql.png";

const images = [
    Html,
    Css,
    Js,
    Java,
    React,
    Node,
    Mongo,
    Express,
     Bootstrap,
    Tailwind,
    Github,
  
    figma,
    
   MySql,
];

function Marquee() {
    // Duplicate images for seamless loop
    const marqueeImages = [...images, ...images];
    return (
        <div className="marquee-wrapper">
            <div className="marquee">
                {marqueeImages.map((src, idx) => (
                    <img src={src} alt="" key={idx} />
                ))}
            </div>
        </div>
    );
}
export default function About() {
  const config = {
    line1: `Motivated and possessing a strong foundation in modern web
development technologies. Eager to launch a career as a Full
Stack Developer, leveraging skills in both front-end and back-end
development to contribute to innovative projects. Seeking an
opportunity to apply technical skills, learn from seasoned
professionals, and grow professionally`,
    line2: "I am a passionate developer.",
    line3: "I love building web applications."
  };

  return (
    <>
           <section id="about" className="flex flex-col md:flex-row bg-secondary px-4 md:px-12 py-10 items-center">
        <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
          <img src={AboutImg} alt="About me" className="max-w-xs md:max-w-md w-full rounded-lg shadow-lg" />
        </div>
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="flex flex-col justify-center text-white max-w-xl">
    <h1 className="abo text-3xl md:text-4xl text-white border-b-4 border-primary mb-5 w-[170px] font-bold text-center mx-auto">
  About Me
</h1>
            <p className="p-4 md:p-5 text-base md:text-lg">{config.line1}</p>
            {/* <p className="p-5">{config.line2}</p>
            <p className="p-5">{config.line3}</p> */}
          </div>
        </div>
      </section>
      <Marquee />
    </>
  );
}