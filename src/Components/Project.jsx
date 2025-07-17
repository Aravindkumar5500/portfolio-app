 import "./Project.css"
 import Calculator from "../Assets/Calculator.png";
 import Todo from "../Assets/TODO.png";
 import Tictok from "../Assets/Tictok.png";
 import Clinic from "../Assets/Clinic.png"

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

const projects = [
  {
    tag: "Calculator",
    image: Calculator,
    
    desc: "A calculator is more than numbers—it’s a smart mix of logic, feedback, and clean UI that lets users solve math problems quickly and smoothly.",
 
  },
  {
    tag: "Todo",
    image: Todo,
  
    desc: "A to-do app is more than tasks—it’s a clean, responsive experience that helps users track goals, manage time, and stay productive with ease.",
  
  },
  {
    tag: "tic tac toe",
    image: Tictok,
   
    desc: "Tic Tac Toe is more than a grid—it’s turn-based logic, live state updates, and a simple UI that makes learning fun and addictive.",
 
  },
    {
    tag: "Appointment-Calendar",
    image: Clinic,
    desc: "An appointment calendar is more than picking dates—it’s real-time scheduling, smooth UI, and logic combined to simplify time management",
    
  },
];

export default function Project() {
  return (
    <section id="project" className="flex flex-col py-20 px-5 justify-center bg-primary min-h-screen">
      <div className="w-full flex flex-col px-10 py-5">
        <h1 className="pro text-4xl text-white border-b-4 border-secondary mb-5 w-[150px] font-bold">
          Projects
        </h1>
        <p className="propara text-white">Here are some of my best projects that I have worked on and that I am proud of 👇</p>
      </div>
      <div className="project-container w-full flex justify-center">
        <div className="container max-w-5xl">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
             effect="slide"
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {projects.map((proj, idx) => (
              <SwiperSlide key={idx}>
                <div className="bg-black rounded-2xl shadow-lg p-5 flex flex-col h-full">
                  <div className="relative mb-4">
                    <img src={proj.image} alt={proj.title} className="imagebox w-60 h-60 object-cover justify-items-center" />
                    <span className="absolute top-3 left-3 bg-purple-500 text-white text-xs px-3 py-1 rounded-full font-semibold">{proj.tag}</span>
                  </div>
                  <h2 className="font-bold text-lg mb-2">{proj.title}</h2>
                  <p className="text-gray-600 mb-4">{proj.desc}</p>
                  <div className="flex items-center mt-auto pt-4 border-t">
                    <button className="readmore">
  <a href="https://github.com/Aravindkumar5500"
  className="ml-auto text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-purple-600 transition duration-300"
>
  Read More
</a>
</button>
           </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}