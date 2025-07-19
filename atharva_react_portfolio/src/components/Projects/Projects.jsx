// No pagination

// import React from "react";

// import styles from "./Projects.module.css";

// import projects from "../../data/projects.json";
// import { ProjectCard } from "./ProjectCard";

// export const Projects = () => {
//   return (
//     <section className={styles.container} id="projects">
//       <h2 className={styles.title}>Projects</h2>
//       <div className={styles.projects}>
//         {projects.map((project, id) => {
//           return <ProjectCard key={id} project={project} />;
//         })}
//       </div>
//     </section>
//   );
// };


// Pagination

import React, { useState, useEffect } from "react";
import styles from "./Projects.module.css";
import projects from "../../data/projects.json";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [projectsPerPage, setProjectsPerPage] = useState(getResponsiveCount());

  function getResponsiveCount() {
    const width = window.innerWidth;
    if (width >= 1200) return 3; // Desktop
    if (width >= 768) return 2;  // Tablet
    return 1;                    // Mobile
  }

  useEffect(() => {
    const handleResize = () => {
      setProjectsPerPage(getResponsiveCount());
      setCurrentPage(0); // reset to first page
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalPages = Math.ceil(projects.length / projectsPerPage);
  const start = currentPage * projectsPerPage;
  const currentProjects = projects.slice(start, start + projectsPerPage);

  const handlePrev = () => {
    if (currentPage > 0) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages - 1) setCurrentPage(currentPage + 1);
  };

  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Projects</h2>

      <div className={styles.projects}>
        {currentProjects.map((project, id) => (
          <ProjectCard key={id} project={project} />
        ))}
      </div>

      <div className={styles.pagination}>
        <button
          onClick={handlePrev}
          disabled={currentPage === 0}
          className={styles.pageButton}
        >
          ◀ Prev
        </button>
        <span className={styles.pageInfo}>
          Page {currentPage + 1} of {totalPages}
        </span>
        <button
          onClick={handleNext}
          disabled={currentPage === totalPages - 1}
          className={styles.pageButton}
        >
          Next ▶
        </button>
      </div>
    </section>
  );
};

