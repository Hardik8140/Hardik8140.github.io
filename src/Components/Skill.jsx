import React from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { backendskill, frontEnd } from "../constants";
import { styles } from "../style";

const Skill = () => {
  return (
    <div id="skills">
      <h2 className={styles.sectionHeadText}>Skill.</h2>
      <p className={styles.sectionSubText}>FrontEnd</p>

      <div className="flex flex-row flex-wrap justify-center gap-8 py-5 skills-card-name">
        {frontEnd.map((technology) => (
          <div className="w-28 h-28  skills-card" key={technology.name}>
            <BallCanvas icon={technology.icon} />
            <p className={`${styles.sectionSubText} skills-card-name`}>
              {technology.name}
            </p>
          </div>
        ))}
      </div>

      <p className={`${styles.sectionSubText} py-7 `}>BackEnd : </p>

      <div className="flex flex-row flex-wrap justify-center gap-8 py-5 ">
        {backendskill.map((technology) => (
          <div className="w-28 h-28 skills-card" key={technology.name}>
            <BallCanvas icon={technology.icon} />
            <p className={styles.sectionSubText}>{technology.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Skill, "");
