import React from "react";
import { fadeIn, textVariant } from "../utils";
import { styles } from "../style";
import { Tilt } from "react-tilt";
import {
  Location,
  code,
  commit,
  done,
  email,
  github,
  hours,
  linkedin,
  phone,
} from "../assets";
import GitHubCalendar from "react-github-calendar";

const Statistics = () => {
  return (
    <>
      <div
        id="statistics"
        variants={textVariant()}
        className={`${styles.paddingX} max-w-7xl mx-auto `}
      >
        <p className={styles.sectionHeadText}>Statistics</p>
        <h2 className={styles.sectionSubText}>About.</h2>

        <div className="mt-10 flex flex-wrap gap-5">
          {/* Location */}

          <Tilt className="sm:w-[270px] w-full">
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
                  src={code}
                  alt="web-development"
                  className="w-16 h-16 object-contain "
                />

                <h3 className="text-white text-[15px] font-bold text-center ">
                  1200+ Hours of Coding
                </h3>
              </div>
            </div>
          </Tilt>

          {/* Email */}

          <Tilt className="sm:w-[270px] w-full">
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
                  src={commit}
                  alt="web-development"
                  className="w-16 h-16 object-contain"
                />

                <h3 className="text-white text-[15px] font-bold text-center ">
                  650+ Github Commits
                </h3>
              </div>
            </div>
          </Tilt>

          {/* Phone */}

          <Tilt className="sm:w-[270px] w-full">
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
                  src={done}
                  alt="web-development"
                  className="w-16 h-16 object-contain"
                />

                <h3 className="text-white text-[15px] font-bold text-center">
                  10+ Project Done
                </h3>
              </div>
            </div>
          </Tilt>

          {/* Github */}

          <Tilt className="sm:w-[270px] w-full">
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
                  src={hours}
                  alt="web-development"
                  className="w-16 h-16 object-contain"
                />

                <h3 className="text-white text-[15px] font-bold text-center">
                  100+ Hours of Softskill Session
                </h3>
              </div>
            </div>
          </Tilt>
        </div>

        {/* github stats and calender and langauge */}

        {/* <Tilt> */}
        <div className="mt-10 gap-5">
          <h2 className={`${styles.sectionSubText} mt-9 mb-9`}>
            GitHub Calender.
          </h2>
          <GitHubCalendar
            username="hardik8140"
            year={2023}
            className="m-auto react-activity-calendar"
          />
        </div>
        {/* </Tilt> */}

        {/* github stats card */}
        <div className="mt-10 gap-5">
          <h2 className={`${styles.sectionSubText} mt-9 mb-9`}>
            GitHub streak stats
          </h2>
          <a href="https://git.io/streak-stats">
            <img
              id="github-streak-stats"
              src="https://github-readme-streak-stats.herokuapp.com?user=Hardik8140&theme=transparent&border_radius=15"
            />
          </a>
        </div>

        {/* multi langauge */}
        <div>
          <div className="mt-10 gap-5">
            <h2 className={`${styles.sectionSubText} mt-9 mb-9`}>
              GitHub stats
            </h2>
            <a href="https://github-readme-stats.vercel.app/api?username=hardik8140&show_icons=true&theme=cobalt&border_radius=12.5">
              <img
                id="github-stats-card"
                src="https://github-readme-stats.vercel.app/api?username=hardik8140&show_icons=true&theme=transparent&border_radius=12.5&border_color=green"
              />
            </a>
          </div>

          {/* multi langauge */}
          <div className="mt-10 gap-5">
            <h2 className={`${styles.sectionSubText} mt-9 mb-9`}>
              GitHub stats
            </h2>
            <a href="https://github-readme-stats.vercel.app/api?username=hardik8140&show_icons=true&theme=cobalt&border_radius=12.5">
              <img
                id="github-top-langs"
                src="https://github-readme-stats.vercel.app/api/top-langs/?username=hardik8140&layout=compact&theme=transparent&border_radius=12.5"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Statistics;
