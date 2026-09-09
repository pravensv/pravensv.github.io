import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import type { RefObject } from "react";
import styles from "./Header.module.scss";

type SectionRefs = {
  homeRef: RefObject<HTMLElement | null>;
  educationRef: RefObject<HTMLElement | null>;
  experienceRef: RefObject<HTMLElement | null>;
  projectsRef: RefObject<HTMLElement | null>;
  skillsRef: RefObject<HTMLElement | null>;
  contactRef: RefObject<HTMLElement | null>;
};

type HeaderProps = {
  scrollToSection: (ref: RefObject<HTMLElement | null>) => void;
  refs: SectionRefs;
};

export default function Header({ scrollToSection, refs }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const navigate = useNavigate();
  const location = useLocation();

  const handleToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => setMenuOpen(false);

  const handleNavClick = (ref: RefObject<HTMLElement | null>, sectionName: string) => {
    setActiveSection(sectionName);
    closeMenu();
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        scrollToSection(ref);
      }, 100);
    } else {
      scrollToSection(ref);
    }
  };

  return (
    <header className={styles.headerContainer}>
      <div className={styles.navCapsule}>
        {/* Desktop Left Nav Links */}
        <div className={styles.navGroupLeft}>
          <span
            className={activeSection === "home" ? styles.activePill : ""}
            onClick={() => handleNavClick(refs.homeRef, "home")}
          >
            Home
          </span>
          <span
            className={activeSection === "experience" ? styles.activePill : ""}
            onClick={() => handleNavClick(refs.experienceRef, "experience")}
          >
            Experience
          </span>
          <span
            className={activeSection === "education" ? styles.activePill : ""}
            onClick={() => handleNavClick(refs.educationRef, "education")}
          >
            Education
          </span>
        </div>

        {/* Center Logo */}
        <div className={styles.logo} onClick={() => handleNavClick(refs.homeRef, "home")}>
          <div className={styles.logoBadge}>P</div>
          <span>
            Praveen<span>Dev</span>
          </span>
        </div>

        {/* Desktop Right Nav Links */}
        <div className={styles.navGroupRight}>
          <span
            className={activeSection === "projects" ? styles.activePill : ""}
            onClick={() => handleNavClick(refs.projectsRef, "projects")}
          >
            Projects
          </span>
          <span
            className={activeSection === "skills" ? styles.activePill : ""}
            onClick={() => handleNavClick(refs.skillsRef, "skills")}
          >
            Skills
          </span>
          <span
            className={activeSection === "contact" ? styles.activePill : ""}
            onClick={() => handleNavClick(refs.contactRef, "contact")}
          >
            Contact
          </span>
        </div>

        {/* Mobile Hamburger Icon */}
        <div className={styles.menuIcon} onClick={handleToggle}>
          <span className={menuOpen ? styles.barOpen : styles.bar}></span>
          <span className={menuOpen ? styles.barOpen : styles.bar}></span>
          <span className={menuOpen ? styles.barOpen : styles.bar}></span>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.showMenu : ""}`}>
        <span onClick={() => handleNavClick(refs.homeRef, "home")}>Home</span>
        <span onClick={() => handleNavClick(refs.experienceRef, "experience")}>Experience</span>
        <span onClick={() => handleNavClick(refs.educationRef, "education")}>Education</span>
        <span onClick={() => handleNavClick(refs.projectsRef, "projects")}>Projects</span>
        <span onClick={() => handleNavClick(refs.skillsRef, "skills")}>Skills</span>
        <span onClick={() => handleNavClick(refs.contactRef, "contact")}>Contact</span>
      </div>
    </header>
  );
}
