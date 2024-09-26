import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";


export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <ul className={styles.aboutItems}>
        <li className={styles.aboutItem}>
          <div className={styles.aboutItemText}>
            <h3>Frontend Developer</h3>
            <p>
              I specialize in crafting visually appealing and highly optimized user interfaces, 
              ensuring a seamless user experience
            </p>
          </div>
        </li>
        <li className={styles.aboutItem}>
          <div className={styles.aboutItemText}>
            <h3>Backend Developer</h3>
            <p>
              I focus on designing high-performance backend APIs, 
              ensuring fast data processing and seamless integration with frontend systems
            </p>
          </div>
        </li>
        <li className={styles.aboutItem}>
          <div className={styles.aboutItemText}>
            <h3>Full Stack Developer</h3>
            <p>
              I develop end-to-end solutions, managing both frontend and backend technologies 
              to deliver complete and optimized applications            
            </p>
          </div>
        </li>
        <li className={styles.aboutItem}>
          <div className={styles.aboutItemText}>
            <h3>DevOps Engineer</h3>
            <p>
              I ensure continuous delivery and automation of development pipelines, 
              optimizing infrastructure for seamless deployment
            </p>
          </div>
        </li>
      </ul>
    </section>
  )
}