import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

const LINKS = [
  { href: "mailto:dateatharva@gmail.com", icon: "contact/emailIcon.png", alt: "Email icon", label: "dateatharva@gmail.com" },
  { href: "https://www.linkedin.com/in/atharva-date-5430701b3/", icon: "contact/linkedinIcon.png", alt: "LinkedIn icon", label: "linkedin.com/atharva-date" },
  { href: "https://github.com/dateatharva11", icon: "contact/githubIcon.png", alt: "Github icon", label: "github.com/dateatharva11" },
  { href: "https://leetcode.com/u/adate1/", icon: "contact/leetcodeIcon.png", alt: "LeetCode icon", label: "leetcode.com/adate1" },
];

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className="wrap">
        <h2 className={styles.title}>Contact</h2>
        <p className={styles.text}>Feel free to reach out!</p>
        <ul className={styles.links}>
          {LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} className={styles.link}>
                <img src={getImageUrl(link.icon)} alt={link.alt} />
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};
