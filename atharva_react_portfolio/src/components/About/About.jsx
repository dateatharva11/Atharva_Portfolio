import { useRef } from "react";

import styles from "./About.module.css";
import roles from "../../data/roles.json";
import achievements from "../../data/achievements.json";
import { useReveal } from "../../hooks/useReveal";

const TrophyIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M8 21h8M12 17v4M7 4h10v5a5 5 0 0 1-10 0V4zM7 6H4a3 3 0 0 0 3 4M17 6h3a3 3 0 0 1-3 4" />
  </svg>
);

const MedalIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="14" r="6" />
    <path d="M8.5 9 6 2h4l2 5M15.5 9 18 2h-4l-2 5" />
  </svg>
);

export const About = () => {
  const ref = useRef(null);
  useReveal(ref);

  return (
    <section className="section" id="about" ref={ref}>
      <div className="wrap">
        <h2 className="section-title">About</h2>
        <ul className={styles.roles}>
          {roles.map((role, id) => (
            <li key={role.title} className={`panel reveal ${styles.role}`} style={{ "--i": id % 3 }}>
              <h3>{role.title}</h3>
              <p>{role.description}</p>
            </li>
          ))}
        </ul>

        <h2 className="sub-title" id="achievements">Achievements</h2>
        <ul className={styles.achievements}>
          {achievements.map((item, id) => (
            <li key={item.title} className={`panel reveal ${styles.achievement}`} style={{ "--i": id }}>
              <span className={`${styles.medal} ${item.medal === "silver" ? styles.silver : ""}`}>
                {item.medal === "silver" ? <MedalIcon /> : <TrophyIcon />}
              </span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
