// The project data comes from data/projects.json; this repo does not use the prop-types package.
/* eslint-disable react/prop-types */
import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 .5a11.5 11.5 0 0 0-3.6 22.4c.6.1.8-.3.8-.6v-2.2c-3.2.7-3.9-1.4-3.9-1.4-.5-1.3-1.3-1.7-1.3-1.7-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.4 1 .1-.8.4-1.3.8-1.6-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.4 11.4 0 0 1 6 0C17.6 4 18.6 4.3 18.6 4.3c.6 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.1 0 4.4-2.7 5.4-5.3 5.7.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A11.5 11.5 0 0 0 12 .5z" />
  </svg>
);

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, source, award },
  index = 0,
}) => {
  return (
    <li className={`panel reveal ${styles.container}`} style={{ "--i": index % 3 }}>
      <div className={styles.imageWrap}>
        <img
          src={getImageUrl(imageSrc)}
          alt={`Image of ${title}`}
          className={styles.image}
          loading="lazy"
        />
      </div>
      <div className={styles.body}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        {award && <span className={styles.award}>{award}</span>}
        <ul className={styles.skills} aria-label="Built with">
          {skills.map((skill) => (
            <li key={skill} className={styles.skill}>
              {skill}
            </li>
          ))}
        </ul>
        <a href={source} className={styles.link}>
          <GitHubIcon />
          Source
        </a>
      </div>
    </li>
  );
};
