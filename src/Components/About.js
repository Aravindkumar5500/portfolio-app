 import AboutImg from "../Assets/about.png";

export default function About () {
  const config ={
    line1:"Some Information about myself",
    line2:"leorm",
    line3:"somthong"
  }





return <>
<section id="about" className="flex flex-col md:flex-row bg-secondary px-5">
     <div className="md:w-1/2">
        <img src={AboutImg} />
    </div> 
    <div className="w-1/2 flex justify-center">
      <div className="flex flex-col justify-center text-white">
        <h1 className="text-4xl text-white border-b-4  border-primary mb-5 w-[170px] font-bold">About Me</h1>
        <p className="pd-5">{config.line1}</p>
        <p className="pd-5">{config.line2}</p>
        <p className="pd-5">{config.line3}</p>
       </div>
    </div>
</section>





</>
}