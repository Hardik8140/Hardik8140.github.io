import React from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { backendskill, frontEnd } from "../constants";
import { styles } from "../style";

const Skill = () => {
  return (
    <>
      <h2 className={styles.sectionHeadText}>Skill.</h2>
      <p className={styles.sectionSubText}>FrontEnd</p>

      <div className="flex flex-row flex-wrap justify-center gap-8 py-5">
        {frontEnd.map((technology) => (
          <div
            className="w-28 h-28 skills-card-img skills-card"
            key={technology.name}
          >
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>

      <p className={styles.sectionSubText}>BackEnd : </p>

      <div className="flex flex-row flex-wrap justify-center gap-8 py-5 skills-card-img">
        {backendskill.map((technology) => (
          <div className="w-28 h-28 skills-card" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Skill, "");
