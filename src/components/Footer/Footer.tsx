import { useEffect, useState, useRef } from 'react';
import footerData from './Footer.json';
import styles from './Footer.module.scss';

export default function Footer() {
  const [viewCount, setViewCount] = useState<number | null>(null);
  const hasFetched = useRef(false);

  useEffect(() => {
    if (hasFetched.current) return;
    hasFetched.current = true;

    const BASE_VIEWS = 1428;
    const STORAGE_KEY = 'praveensv_portfolio_views';
    let currentViews = BASE_VIEWS;

    try {
      const storedViews = localStorage.getItem(STORAGE_KEY);
      currentViews = storedViews ? parseInt(storedViews, 10) : BASE_VIEWS;

      // Increment view count once per browser session
      if (!sessionStorage.getItem('visited_session')) {
        currentViews += 1;
        sessionStorage.setItem('visited_session', 'true');
        localStorage.setItem(STORAGE_KEY, currentViews.toString());
      }
      setViewCount(currentViews);
    } catch {
      setViewCount(BASE_VIEWS + 1);
    }

    // Optional background sync with online counter API
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 2500);

    fetch('https://api.counterapi.dev/v1/praveensv/portfolio/up', { signal: controller.signal })
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (data && typeof data.count === 'number') {
          setViewCount(data.count);
          try {
            localStorage.setItem(STORAGE_KEY, data.count.toString());
          } catch {}
        }
      })
      .catch(() => {
        // Fallback already active from localStorage/BASE_VIEWS
      })
      .finally(() => clearTimeout(timeoutId));
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
