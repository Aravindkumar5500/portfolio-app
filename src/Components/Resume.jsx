import ResumeImg from "../Assets/Aravind.png";

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
        <div className="py-5 md:w-1/2 flex justify-center md:justify-end">
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
              You can view my resume{" 👇🏻"}
              </p>
             
        
              <button
                className="glow-on-hover" type="button"
                href={config.link}
                download="Aravind Resume.pdf"
               
                rel="noopener noreferrer"
              >
                Download
              </button>
            {/* </p> */}
            



          </div>
        </div>
      </section>
    </>
  );
}