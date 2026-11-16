import { useRef } from "react";

import styles from "./Skills.module.css";
import skills from "../../data/skills.json";
import { getImageUrl } from "../../utils";
import { useReveal } from "../../hooks/useReveal";

export const Skills = () => {
  const ref = useRef(null);
  useReveal(ref);

  return (
    <section className={styles.container} id="skills" ref={ref}>
      <div className="wrap">
        <h2 className={styles.title}>Skills</h2>
        <ul className={styles.skills}>
          {skills.map((skill, id) => (
            <li key={skill.title} className={`panel reveal ${styles.skill}`} style={{ "--i": id % 7 }}>
              <span className={styles.icon}>
                <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
              </span>
              <p>{skill.title}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
