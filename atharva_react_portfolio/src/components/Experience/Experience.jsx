import { useEffect, useRef, useState } from "react";

import styles from "./Experience.module.css";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";
import { useReveal } from "../../hooks/useReveal";

// Consecutive roles at the same organisation share one station on the route.
const groupByOrganisation = (items) =>
  items.reduce((groups, item) => {
    const last = groups[groups.length - 1];
    if (last && last.organisation === item.organisation) {
      last.roles.push(item);
    } else {
      groups.push({ organisation: item.organisation, location: item.location, imageSrc: item.imageSrc, roles: [item] });
    }
    return groups;
  }, []);

const companies = groupByOrganisation(history);

export const Experience = () => {
  const sectionRef = useRef(null);
  const lineRef = useRef(null);
  const stationRefs = useRef([]);
  const [litCount, setLitCount] = useState(companies.length);
  useReveal(sectionRef);

  // The route fills in as you scroll, and each station lights up when the line reaches it.
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let frame = 0;

    const update = () => {
      frame = 0;
      const line = lineRef.current;
      if (!line) return;
      const target = window.innerHeight * 0.6;
      const rect = line.getBoundingClientRect();
      const progress = Math.min(1, Math.max(0, (target - rect.top) / rect.height));
      line.style.setProperty("--progress", progress.toFixed(4));
      const lit = stationRefs.current.filter((el) => el && el.getBoundingClientRect().top + 16 <= target).length;
      setLitCount(lit);
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section className="section" id="experience" ref={sectionRef}>
      <div className="wrap">
        <h2 className="section-title">Experience</h2>
        <ol className={styles.line} ref={lineRef}>
          {companies.map((company, id) => {
            const classes = [styles.station];
            if (id === 0) classes.push(styles.current);
            if (id < litCount) classes.push(styles.lit);
            return (
              <li key={company.organisation} className={classes.join(" ")} ref={(el) => (stationRefs.current[id] = el)}>
                <div className={styles.company}>
                  <img src={getImageUrl(company.imageSrc)} alt={`${company.organisation} Logo`} />
                  <div>
                    <h3>{company.organisation}</h3>
                    <p className={styles.location}>{company.location}</p>
                  </div>
                </div>
                <ul className={styles.roles}>
                  {company.roles.map((role, roleId) => (
                    <li key={role.role} className={`panel reveal ${styles.role}`} style={{ "--i": roleId }}>
                      <h4 className={styles.roleTitle}>{role.role}</h4>
                      <p className={styles.dates}>{`${role.startDate} - ${role.endDate}`}</p>
                    </li>
                  ))}
                </ul>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
};
