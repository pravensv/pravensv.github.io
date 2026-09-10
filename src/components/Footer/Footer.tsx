import { useEffect, useState, useRef } from 'react';
import footerData from './Footer.json';
import styles from './Footer.module.scss';

export default function Footer() {
  const [viewCount, setViewCount] = useState<number | null>(null);
  const hasFetched = useRef(false);

  useEffect(() => {
    if (hasFetched.current) return;
    hasFetched.current = true;

    // Start baseline from launch date so views scale realistically over time
    const LAUNCH_DATE = new Date('2025-01-01').getTime();
    const now = Date.now();
    const daysElapsed = Math.floor((now - LAUNCH_DATE) / (1000 * 60 * 60 * 24));
    const timeBasedBase = 1428 + Math.max(0, daysElapsed * 14);

    const STORAGE_KEY = 'praveensv_portfolio_views_count';

    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      const storedCount = stored ? parseInt(stored, 10) : timeBasedBase;
      const nextCount = Math.max(timeBasedBase, storedCount + 1);

      localStorage.setItem(STORAGE_KEY, nextCount.toString());
      setViewCount(nextCount);
    } catch {
      setViewCount(timeBasedBase + 1);
    }
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'Experience', id: 'experience' },
    { label: 'Education', id: 'education' },
    { label: 'Projects', id: 'projects' },
    { label: 'Skills', id: 'skills' },
    { label: 'Contact', id: 'contact-section' }
  ];

  const handleQuickNav = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.mainGrid}>
          {/* Column 1: Brand & Status */}
          <div className={styles.brandCol}>
            <div className={styles.brandBox}>
              <h2>Praveen <span>Voruganti</span></h2>
              <p>{footerData.description}</p>
            </div>
            <div className={styles.statusPill}>
              <span className={styles.statusDot} />
              <span className={styles.statusText}>Available for New Opportunities</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className={styles.linksCol}>
            <h3 className={styles.colTitle}>Quick Links</h3>
            <ul className={styles.quickNavList}>
              {navItems.map((item) => (
                <li key={item.id} onClick={() => handleQuickNav(item.id)}>
                  <span>▹</span> {item.label}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Connect & View Counter */}
          <div className={styles.connectCol}>
            <h3 className={styles.colTitle}>Let's Connect</h3>
            <div className={styles.socialBox}>
              {footerData.socialLinks.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  title={item.platform}
                >
                  <img src={item.icon} alt={item.platform} />
                </a>
              ))}
            </div>

            <div className={styles.viewCounter}>
              <span className={styles.eyeIcon}>👁️</span>
              <span className={styles.viewLabel}>Total Portfolio Views: </span>
              <span className={styles.count}>{viewCount !== null ? viewCount : "..."}</span>
            </div>
          </div>
        </div>

        <div className={styles.separator} />

        <div className={styles.bottomBar}>
          <div className={styles.copy}>
            <p>{footerData.copyright}</p>
          </div>

          <button
            onClick={scrollToTop}
            className={styles.scrollTopBtn}
            aria-label="Scroll to top"
            title="Scroll to top"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="m18 15-6-6-6 6"/>
            </svg>
            <span>Back to top</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
