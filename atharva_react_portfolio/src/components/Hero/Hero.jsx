import React, { useEffect, useState } from "react";

import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";

const NAME_LINES = ["Atharva", "Date"];
const TOTAL_CHARS = NAME_LINES.join("").length;

const prefersReducedMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export const Hero = () => {
  // Every character is rendered from the start and fades in, so the layout never shifts while typing.
  const [typed, setTyped] = useState(() => (prefersReducedMotion() ? TOTAL_CHARS : 0));

  useEffect(() => {
    if (typed >= TOTAL_CHARS) return;
    const timer = setTimeout(() => setTyped((n) => n + 1), typed === 0 ? 250 : 100);
    return () => clearTimeout(timer);
  }, [typed]);

  let index = 0;

  return (
    <header className={styles.hero} id="top">
      <div className="wrap">
        <div className={styles.top}>
          <div>
            <p className={styles.hello}>Hi, I am</p>
            <h1 className={styles.title} aria-label="Atharva Date">
              {NAME_LINES.map((line, lineIndex) => (
                <React.Fragment key={line}>
                  {lineIndex > 0 && <br />}
                  {[...line].map((char) => {
                    const visible = index++ < typed;
                    return (
                      <span key={index} aria-hidden="true" className={visible ? undefined : styles.hidden}>
                        {char}
                      </span>
                    );
                  })}
                </React.Fragment>
              ))}
              <span className={styles.caret} aria-hidden="true" />
            </h1>
          </div>
          <img
            src={getImageUrl("hero/heroImage.png")}
            alt="Illustrated portrait of Atharva Date"
            className={styles.avatar}
          />
        </div>
        <p className={styles.description}>
          I am a full stack developer who builds AI-powered applications and scalable web platforms.
          My experience ranges from developing intelligent developer tools at a startup to
          implementing enterprise solutions in a fast-paced consulting environment.
        </p>
        <p className={`${styles.description} ${styles.muted}`}>
          Reach out if you would like to learn more!
        </p>
        <a href="mailto:dateatharva@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
    </header>
  );
};
