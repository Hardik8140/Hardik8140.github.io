import React from "react";
import { styles } from "../style";
import { download, Resume, vector1 } from "../assets";
import { Tilt } from "react-tilt";
import { Link } from "react-router-dom";

const Hero = () => {
  const openResumeInNewTab = () => {
    window.open(Resume, "_blank");
  };

  const downloadResume = () => {
    const anchor = document.createElement("a");
    anchor.href = Resume;
    anchor.download = "Hardik-Gajera-Resume.pdf";
    anchor.style.display = "none";
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  };
  return (
    <section className="relative w-full h-screen mx-auto" id="home">
      <div
        className={`${styles.paddingX} absolute inset-0 lg:top-[120px] md:top-28 sm:top-24 xs:top-28 xxs:top-20 max-w-7xl mx-auto flex flex-row lg:flex-row items-start gap-5`}
      >
        {/* Gradient */}
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-40">
          {/* Name Section */}
          <div className="w-full">
            <h1
              id="user-detail-name"
              className={`${styles.heroHeadText} text-white `}
            >
              Hi, I'm <span className=" text-[#915eff]">Hardik</span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              Full stack developer crafting code{" "}
              <br className="sm:block hidden" /> and design for exceptional
              digital experiences.
            </p>
            <Tilt className="xs:w-[250px] w-full">
              <button
                id="resume-button-2"
                className="bg-secondary px-3 py-2 my-2  rounded-md shadow-lg shadow-purple-500/50 font-bold text-primary underline hover:underline"
              >
                <Link
                  id="resume-link-2"
                  to={Resume}
                  download="Hardik-Gajera-Resume.pdf"
                  className="flex items-center"
                  // onClick={(event) => {
                  //   event.preventDefault();
                  //   window.open(Resume, "_blank");
                  // }}
                  onClick={() => {
                    openResumeInNewTab();
                    downloadResume();
                  }}
                >
                  <img src={download} alt="resume" className="w-4 mr-2" />{" "}
                  Resume
                </Link>
              </button>
            </Tilt>
          </div>

          {/* Image Section */}
          {/* <div className="sm:ml-5">
            <div className="absolute h-80 right-0 "> */}
          <img
            src={vector1}
            alt=""
            className="home-img md:absolute lg:w-80 md:w-64 sm:w-32 flex md:right-10 bg-blend-multiply "
          />
          {/* </div> */}
          {/* </div> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
