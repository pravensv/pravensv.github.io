import { useState } from "react";
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

  const handleToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        Praveen<span>Dev</span>
      </div>

      {/* Desktop Navigation */}
      <nav className={styles.navDesktop}>
        <span onClick={() => { scrollToSection(refs.homeRef); closeMenu(); }}>Home</span>
        <span onClick={() => { scrollToSection(refs.educationRef); closeMenu(); }}>Education</span>
        <span onClick={() => { scrollToSection(refs.experienceRef); closeMenu(); }}>Experience</span>
        <span onClick={() => { scrollToSection(refs.projectsRef); closeMenu(); }}>Projects</span>
        <span onClick={() => { scrollToSection(refs.skillsRef); closeMenu(); }}>Skills</span>
        <span onClick={() => { scrollToSection(refs.contactRef); closeMenu(); }}>Contact</span>
      </nav>

      {/* Mobile Hamburger Button */}
      <div className={styles.menuIcon} onClick={handleToggle}>
        <span className={menuOpen ? styles.barOpen : styles.bar}></span>
        <span className={menuOpen ? styles.barOpen : styles.bar}></span>
        <span className={menuOpen ? styles.barOpen : styles.bar}></span>
      </div>

      {/* Mobile Menu */}
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.showMenu : ""}`}>
        <span onClick={() => { scrollToSection(refs.homeRef); closeMenu(); }}>Home</span>
        <span onClick={() => { scrollToSection(refs.educationRef); closeMenu(); }}>Education</span>
        <span onClick={() => { scrollToSection(refs.experienceRef); closeMenu(); }}>Experience</span>
        <span onClick={() => { scrollToSection(refs.projectsRef); closeMenu(); }}>Projects</span>
        <span onClick={() => { scrollToSection(refs.skillsRef); closeMenu(); }}>Skills</span>
        <span onClick={() => { scrollToSection(refs.contactRef); closeMenu(); }}>Contact</span>
      </div>
    </header>
  );
}
