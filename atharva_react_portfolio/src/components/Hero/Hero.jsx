import React from 'react';

import { getImageUrl } from '../../utils';
import styles from './Hero.module.css';
import { Typewriter } from 'react-simple-typewriter';

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          Hi, I am{' '}
          <span style={{ color: '#64ffda' }}>
            <Typewriter
              words={['Atharva Date']}
              loop={1}
              cursor
              cursorStyle="|"
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </h1>
        <p className={styles.description}>I am a full stack developer who builds AI-driven applications and scalable web platforms. 
          My experience ranges from developing intelligent developer tools at a startup to implementing enterprise solutions in a fast-paced consulting environment. <br></br><br></br>
          Reach out if you would like to learn more!
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
