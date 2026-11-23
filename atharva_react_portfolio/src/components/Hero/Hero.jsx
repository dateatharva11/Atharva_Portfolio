import React, { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";

import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";

const NAME_LINES = ["Atharva", "Date"];
const TOTAL_CHARS = NAME_LINES.join("").length;

const prefersReducedMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export const Hero = () => {
  // Every character is rendered from the start and fades in, so the layout never shifts while typing.
  const [typed, setTyped] = useState(() => (prefersReducedMotion() ? TOTAL_CHARS : 0));
  const charRefs = useRef([]);
  const caretRef = useRef(null);
  const lastTop = useRef(null);

  useEffect(() => {
    if (typed >= TOTAL_CHARS) return;
    const timer = setTimeout(() => setTyped((n) => n + 1), typed === 0 ? 250 : 100);
    return () => clearTimeout(timer);
  }, [typed]);

  // The caret is a single element after the name, moved to sit right after the last typed letter.
  // Nothing is inserted between the letters, so their spacing never changes.
  const placeCaret = useCallback(() => {
    const caret = caretRef.current;
    const chars = charRefs.current;
    if (!caret || !chars[0]) return;
    const anchor = typed === 0 ? chars[0] : chars[typed - 1];
    const x = typed === 0 ? anchor.offsetLeft : anchor.offsetLeft + anchor.offsetWidth;
    const y = anchor.offsetTop;
    const newLine = lastTop.current !== null && lastTop.current !== y;
    lastTop.current = y;

    // Glide along a line, but jump straight down when typing wraps to the next line.
    if (newLine) caret.style.transition = "none";
    caret.style.setProperty("--x", `${x}px`);
    caret.style.setProperty("--y", `${y}px`);
    if (newLine) {
      void caret.offsetWidth; // apply the jump before turning the glide back on
      caret.style.transition = "";
    }
  }, [typed]);

  useLayoutEffect(placeCaret, [placeCaret]);

  // Re-measure on resize and once the web font loads, since letter widths change with both.
  const placeCaretRef = useRef(placeCaret);
  placeCaretRef.current = placeCaret;
  useEffect(() => {
    const remeasure = () => placeCaretRef.current();
    window.addEventListener("resize", remeasure);
    document.fonts?.ready.then(remeasure);
    return () => window.removeEventListener("resize", remeasure);
  }, []);

  const done = typed >= TOTAL_CHARS;
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
                    const position = index++;
                    return (
                      <span
                        key={position}
                        ref={(el) => (charRefs.current[position] = el)}
                        aria-hidden="true"
                        className={`${styles.char} ${position < typed ? "" : styles.hidden}`}
                      >
                        {char}
                      </span>
                    );
                  })}
                </React.Fragment>
              ))}
              <span
                ref={caretRef}
                aria-hidden="true"
                className={`${styles.caret} ${done ? styles.caretBlink : ""}`}
              />
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
