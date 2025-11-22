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
  const navigate = useNavigate();
  const location = useLocation();

  const handleToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => setMenuOpen(false);

  const handleNavClick = (ref: RefObject<HTMLElement | null>) => {
    closeMenu();
    if (location.pathname !== "/") {
      navigate("/");
      // Wait for navigation to complete and component to mount
      setTimeout(() => {
        scrollToSection(ref);
      }, 100);
    } else {
      scrollToSection(ref);
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        Praveen<span>Dev</span>
      </div>

      {/* Desktop Navigation */}
      <nav className={styles.navDesktop}>
        <span onClick={() => handleNavClick(refs.homeRef)}>Home</span>
        <span onClick={() => handleNavClick(refs.educationRef)}>Education</span>
        <span onClick={() => handleNavClick(refs.experienceRef)}>Experience</span>
        <span onClick={() => handleNavClick(refs.projectsRef)}>Projects</span>
        <span onClick={() => handleNavClick(refs.skillsRef)}>Skills</span>
        <span onClick={() => handleNavClick(refs.contactRef)}>Contact</span>
      </nav>

      {/* Mobile Hamburger Button */}
      <div className={styles.menuIcon} onClick={handleToggle}>
        <span className={menuOpen ? styles.barOpen : styles.bar}></span>
        <span className={menuOpen ? styles.barOpen : styles.bar}></span>
        <span className={menuOpen ? styles.barOpen : styles.bar}></span>
      </div>

      {/* Mobile Menu */}
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.showMenu : ""}`}>
        <span onClick={() => handleNavClick(refs.homeRef)}>Home</span>
        <span onClick={() => handleNavClick(refs.educationRef)}>Education</span>
        <span onClick={() => handleNavClick(refs.experienceRef)}>Experience</span>
        <span onClick={() => handleNavClick(refs.projectsRef)}>Projects</span>
        <span onClick={() => handleNavClick(refs.skillsRef)}>Skills</span>
        <span onClick={() => handleNavClick(refs.contactRef)}>Contact</span>
      </div>
    </header>
  );
}
