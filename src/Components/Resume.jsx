import ResumeImg from "../Assets/Aravind.png";
import "./Resume.css";

export default function Resume() {
  const config = {
    link: "/Asset/Aravind Kumar R.pdf"
  };

  return (
    <>
      <section
        id="resume"
        className="flex flex-col md:flex-row bg-secondary px-5"
      >
        <div className="resume-img py-5 md:w-1/2 flex justify-center md:justify-end">
          <img
            className="w-[300px]"
            src={ResumeImg}
            alt="Preview of Resume"
          />
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="flex flex-col justify-center text-white">
            <h1 className="res text-4xl text-white border-b-4 border-primary mb-5 w-[140px] font-bold">
              Resume
            </h1>
            <p className="respara">
              You can view my resume by clicking on the button below 👇
              </p>
             
  <a href={config.link} className="download glow-on-hover text-cyan-300"  download="Aravind_Resume.pdf">Download</a>
          </div>
        </div>
      </section>
    </>
  );
}