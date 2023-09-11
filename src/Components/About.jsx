import React from "react";
import { fadeIn, textVariant } from "../utils";
import { styles } from "../style";
import { Tilt } from "react-tilt";
import { Location, email, github, linkedin, phone } from "../assets";

const About = () => {
  return (
    <>
      <div
        id="about"
        variants={textVariant()}
        className={`${styles.paddingX} max-w-7xl mx-auto about section `}
      >
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>About.</h2>
        <p
          id="user-detail-intro"
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Greetings! I'm Hardik Gajera, a skilled Full stack developer with a
          passion for creating efficient and user-friendly web application. With
          the expertise in the both Frontend and Backend technologies, i thrive
          on bringing digital vision life.
        </p>

        <div className="mt-20 flex flex-wrap gap-5">
          {/* Location */}

          <Tilt className="sm:w-[200px] w-full">
            <div
              variants={fadeIn("right", "spring")}
              className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card green-pink-gradient"
            >
              <div
                options={{
                  max: 45,
                  scale: 1,
                  speed: 450,
                }}
                className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[200px] flex justify-evenly items-center flex-col"
              >
                <img
                  src={Location}
                  alt="web-development"
                  className="w-16 h-16 object-contain "
                />

                <h3 className="text-white text-[15px] font-bold text-center ">
                  Ahmedabad, Gujarat
                </h3>
              </div>
            </div>
          </Tilt>

          {/* Email */}

          <Tilt className="sm:w-[200px] w-full">
            <div
              variants={fadeIn("right", "spring")}
              className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
              id="contact-email"
            >
              <div
                options={{
                  max: 45,
                  scale: 1,
                  speed: 450,
                }}
                className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[200px] flex justify-evenly items-center flex-col"
              >
                <img
                  src={email}
                  alt="web-development"
                  className="w-16 h-16 object-contain"
                />

                <h3 className="text-white text-[15px] font-bold text-center ">
                  hardik.gajera.d.84
                  <br />
                  @gmail.com
                </h3>
              </div>
            </div>
          </Tilt>

          {/* Phone */}

          <Tilt className="sm:w-[200px] w-full">
            <div
              variants={fadeIn("right", "spring")}
              className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
              id="contact-phone"
            >
              <div
                options={{
                  max: 45,
                  scale: 1,
                  speed: 450,
                }}
                className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[200px] flex justify-evenly items-center flex-col"
              >
                <img
                  src={phone}
                  alt="web-development"
                  className="w-16 h-16 object-contain"
                />

                <h3 className="text-white text-[15px] font-bold text-center">
                  +91 8849619764
                </h3>
              </div>
            </div>
          </Tilt>

          {/* Github */}

          <Tilt className="sm:w-[200px] w-full">
            <div
              variants={fadeIn("right", "spring")}
              className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
              id="contact-github"
            >
              <div
                options={{
                  max: 45,
                  scale: 1,
                  speed: 450,
                }}
                className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[200px] flex justify-evenly items-center flex-col"
              >
                <img
                  src={github}
                  alt="web-development"
                  className="w-16 h-16 object-contain"
                />

                <a
                  href="https://github.com/Hardik8140"
                  className="text-white text-[15px] font-bold text-center underline "
                >
                  GitHub
                </a>
              </div>
            </div>
          </Tilt>

          {/* Linkedin */}

          <Tilt className="sm:w-[200px] w-full">
            <div
              variants={fadeIn("right", "spring")}
              className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
              id="contact-linkedin"
            >
              <div
                options={{
                  max: 45,
                  scale: 1,
                  speed: 450,
                }}
                className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[200px] flex justify-evenly items-center flex-col"
              >
                <img
                  src={linkedin}
                  alt="web-development"
                  className="w-16 h-16 object-contain"
                />

                <a
                  href="https://www.linkedin.com/in/hardik-gajera-7563b7254/"
                  className="text-white text-[15px] font-bold text-center underline"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </Tilt>
        </div>
      </div>
    </>
  );
};

export default About;
