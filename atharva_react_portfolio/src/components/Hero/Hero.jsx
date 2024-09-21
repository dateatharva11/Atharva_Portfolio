import React from 'react';

import { getImageUrl } from '../../utils';
import styles from './Hero.module.css';

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I am Atharva</h1>
        <p className={styles.description}>I am a full stack developer with 4 years of experience 
          using frameworks such as React, Vue, Laravel and NodeJS. 
          Reach out if you'd like to learn more!
        </p>
        <a href="mailto:dateatharva@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img 
        src={getImageUrl("hero/heroImage.png")} 
        alt="My Image" 
        className={styles.heroImg}/>
      <div className={styles.topBlur}/>
      <div className={styles.bottomBlur}/>
    </section>
  );
}
