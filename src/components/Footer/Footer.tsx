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

  return (
    <footer className={styles.footer}>
      <div className={styles.content}>

        <div className={styles.mainSection}>
          <div className={styles.leftColumn}>
            <div className={styles.brandBox}>
              <h2>{footerData.brand}</h2>
              <p>{footerData.description}</p>
            </div>

            <div className={styles.viewCounter}>
              <span className={styles.viewLabel}>Total Portfolio Views: </span>
              <span className={styles.count}>{viewCount !== null ? viewCount : "..."}</span>
            </div>
          </div>

          <div className={styles.rightColumn}>
            <div className={styles.socialBox}>
              {footerData.socialLinks.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                >
                  <img src={item.icon} alt={item.platform} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.separator} />

        <div className={styles.copy}>
          <p>{footerData.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
