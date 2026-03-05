import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      {/* About Section */}
      <h2 className={styles.title}>About</h2>
      <ul className={styles.aboutItems}>
        <li className={styles.aboutItem}>
          <div className={styles.aboutItemText}>
            <h3>🌐 Frontend</h3>
            <p>
              I specialize in crafting visually appealing and highly optimized user interfaces, 
              ensuring a seamless user experience
            </p>
          </div>
        </li>
        <li className={styles.aboutItem}>
          <div className={styles.aboutItemText}>
            <h3>⚙️ Backend Developer</h3>
            <p>
              I focus on designing high-performance backend APIs, 
              ensuring fast data processing and seamless integration with frontend systems
            </p>
          </div>
        </li>
        <li className={styles.aboutItem}>
          <div className={styles.aboutItemText}>
            <h3>💻 + 💾 Full Stack Developer</h3>
            <p>
              I develop end-to-end solutions, managing both frontend and backend technologies 
              to deliver complete and optimized applications            
            </p>
          </div>
        </li>
      </ul>
      <br></br><br></br><br></br>
      {/* Achievements Section */}
      <h2 className={styles.title}>Achievements</h2>
      <ul className={styles.aboutItems}>
        <li className={styles.aboutItem}>
          <div className={styles.aboutItemText}>
            <h3>🏆 Most Innovative Project Award – WICS Hackathon 2025</h3>
            <p>
              Awarded for developing "Revvo", a mall store-finding application that enhances shopping experiences with real-time navigation and store insights.
            </p>
          </div>
        </li>
        <li className={styles.aboutItem}>
          <div className={styles.aboutItemText}>
            <h3>🎖️ Semi-Finalist – Project Deep Blue Season 6 Hackathon (2020-2021)</h3>
            <p>
              Recognized for the development of an AI-powered facial recognition and temperature measurement system, improving security automation for social security tasks.
            </p>
          </div>
        </li>
      </ul>
    </section>
  );
};
