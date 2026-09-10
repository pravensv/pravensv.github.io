import { useState, useEffect } from "react";
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
  const [theme, setTheme] = useState<"dark" | "light">(() => {
    return (localStorage.getItem("portfolio-theme") as "dark" | "light") || "dark";
  });

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

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

          {/* Theme Toggle Button Desktop */}
          <button
            className={styles.themeToggleBtn}
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            {theme === "dark" ? (
              <svg className={styles.themeIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="4"></circle>
                <path d="M12 2v2"></path>
                <path d="M12 20v2"></path>
                <path d="m4.93 4.93 1.41 1.41"></path>
                <path d="m17.66 17.66 1.41 1.41"></path>
                <path d="M2 12h2"></path>
                <path d="M22 12h-2"></path>
                <path d="m6.34 17.66-1.41 1.41"></path>
                <path d="m19.07 4.93-1.41 1.41"></path>
              </svg>
            ) : (
              <svg className={styles.themeIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Right Controls (Theme Toggle + Hamburger) */}
        <div className={styles.mobileRightControls}>
          <button
            className={styles.themeToggleBtnMobile}
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            {theme === "dark" ? (
              <svg className={styles.themeIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="4"></circle>
                <path d="M12 2v2"></path>
                <path d="M12 20v2"></path>
                <path d="m4.93 4.93 1.41 1.41"></path>
                <path d="m17.66 17.66 1.41 1.41"></path>
                <path d="M2 12h2"></path>
                <path d="M22 12h-2"></path>
                <path d="m6.34 17.66-1.41 1.41"></path>
                <path d="m19.07 4.93-1.41 1.41"></path>
              </svg>
            ) : (
              <svg className={styles.themeIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
              </svg>
            )}
          </button>

          <div className={styles.menuIcon} onClick={handleToggle}>
            <span className={menuOpen ? styles.barOpen : styles.bar}></span>
            <span className={menuOpen ? styles.barOpen : styles.bar}></span>
            <span className={menuOpen ? styles.barOpen : styles.bar}></span>
          </div>
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
