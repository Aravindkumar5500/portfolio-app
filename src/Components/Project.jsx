 import websiteImg1 from "../Assets/Calculator.png";
// import websiteImg2 from "../Assets/website2.jpg";
// import websiteImg3 from "../Assets/website3.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

const projects = [
  {
    tag: "ANIMATION",
    image: websiteImg1,
    title: "Micro Animation Designs",
    desc: "The small animations and interactions that make a big difference in user experience and how to implement them effectively in your designs.",
    author: "David Park",
    role: "Motion Designer",
  },
  {
    tag: "DESIGN",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    title: "Modern UI Trends for 2025",
    desc: "Explore the latest user interface design trends that are shaping the digital landscape this year. From neumorphism to glassmorphism and beyond.",
    author: "Alex Smith",
    role: "UI Designer",
  },
  {
    tag: "DEVELOPMENT",
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
    title: "Best Frontend Frameworks",
    desc: "A comprehensive comparison of the most popular frontend frameworks and libraries that developers are using to build modern web applications.",
    author: "Jessica Chen",
    role: "Developer",
  },
    {
    tag: "DEVELOPMENT",
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
    title: " Frontend Frameworks",
    desc: "A comprehensive comparison of the most popular frontend frameworks and libraries that developers are using to build modern web applications.",
    author: "Jessica Chen",
    role: "Developer",
  },
];

export default function Project() {
  return (
    <section id="project" className="flex flex-col py-20 px-5 justify-center bg-primary min-h-screen">
      <div className="w-full flex flex-col px-10 py-5">
        <h1 className="pro text-4xl text-white border-b-4 border-secondary mb-5 w-[150px] font-bold">
          Projects
        </h1>
        <p className="propara text-white">Here are some of my best projects:</p>
      </div>
      <div className="w-full flex justify-center">
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
                <div className="bg-white rounded-2xl shadow-lg p-5 flex flex-col h-full">
                  <div className="relative mb-4">
                    <img src={proj.image} alt={proj.title} className="rounded-xl w-full h-40 object-cover" />
                    <span className="absolute top-3 left-3 bg-purple-500 text-white text-xs px-3 py-1 rounded-full font-semibold">{proj.tag}</span>
                  </div>
                  <h2 className="font-bold text-lg mb-2">{proj.title}</h2>
                  <p className="text-gray-600 mb-4">{proj.desc}</p>
                  <div className="flex items-center mt-auto pt-4 border-t">
                    <div>
                      <div className="font-semibold text-sm">{proj.author}</div>
                      <div className="text-xs text-gray-500">{proj.role}</div>
                    </div>
                    <a href="/" className="ml-auto bg-purple-500 text-white px-4 py-2 rounded-full text-xs font-semibold hover:bg-purple-600 transition">Read More</a>
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