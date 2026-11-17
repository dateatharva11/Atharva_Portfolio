import { useRef } from "react";

import styles from "./Projects.module.css";
import projects from "../../data/projects.json";
import { ProjectCard } from "./ProjectCard";
import { useReveal } from "../../hooks/useReveal";

export const Projects = () => {
  const ref = useRef(null);
  useReveal(ref);

  return (
    <section className="section" id="projects" ref={ref}>
      <div className="wrap">
        <h2 className="section-title">Projects</h2>
        <ul className={styles.projects}>
          {projects.map((project, id) => (
            <ProjectCard key={project.title} project={project} index={id} />
          ))}
        </ul>
      </div>
    </section>
  );
};
