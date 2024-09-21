import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";


export const About = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>About</h2>
      <div className={StyleSheet.content}>
        <img 
          src={getImageUrl("about/aboutImage.png")} 
          alt="Me siting with a laptop"
          className={styles.aboutImage}
        />
      </div>
      <ul className={styles.aboutItems}>
        <li className={styles.aboutItem}>
          <img 
            src={getImageUrl("about/cursorIcon.png")} 
            alt="Cursor Icon" 
          />
          <div className={styles.aboutItemText}>
            <h3>Frontend Developer</h3>
            <p>
              I'm a frontend developer with experience in building
              responsive and optimised sites
            </p>
          </div>
        </li>
        <li className={styles.aboutItem}>
          <img 
            src={getImageUrl("about/serverIcon.png")} 
            alt="Server Icon" 
          />
          <div className={styles.aboutItemText}>
            <h3>Backend Developer</h3>
            <p>
              I have experience developing fast and optimised 
              back-end systems and APIs
            </p>
          </div>
        </li>
        <li className={styles.aboutItem}>
          <img 
            src={getImageUrl("about/uiIcon.png")} 
            alt="UI Icon" 
          />
          <div className={styles.aboutItemText}>
            <h3>UI Designer</h3>
            <p>
              I have designed multiple landing pages and 
              have systems as well
            </p>
          </div>
        </li>
      </ul>
    </section>
  )
}