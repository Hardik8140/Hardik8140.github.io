import React from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { backendskill, frontEnd } from "../constants";
import { styles } from "../style";

const Skill = () => {
  return (
    <div id="skills" className="border-white">
      <h2 className={styles.sectionHeadText}>Skill.</h2>
      <p className={styles.sectionSubText}>FrontEnd</p>

      <div className="flex flex-row flex-wrap justify-center gap-8 skills-card-name">
        {frontEnd.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} className="skills-card" />
            <p
              className={`${styles.sectionSubText} skills-card-name text-center`}
            >
              {technology.name}
            </p>
          </div>
        ))}
      </div>

      <p className={`${styles.sectionSubText} `}>BackEnd : </p>

      <div className="flex flex-row flex-wrap justify-center gap-8">
        {backendskill.map((technology) => (
          <div className="w-28 h-28 skills-card" key={technology.name}>
            <BallCanvas icon={technology.icon} className="skills-card" />
            <p
              className={`${styles.sectionSubText} skills-card-name text-center`}
            >
              {technology.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Skill, "");
