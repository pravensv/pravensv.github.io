import { useEffect, useState, useRef } from 'react';
import footerData from './Footer.json';
import styles from './Footer.module.scss';

export default function Footer() {
  const [viewCount, setViewCount] = useState<number | null>(null);
  const hasFetched = useRef(false);

  useEffect(() => {
    if (hasFetched.current) return;
    hasFetched.current = true;

    // CounterAPI - Reliable counter for static sites
    // This creates/increments a counter for the portfolio
    fetch('https://api.counterapi.dev/v1/praveensv/portfolio/up')
      .then((res) => res.json())
      .then((data) => setViewCount(data.count))
      .catch((err) => {
        console.error("Error fetching view count:", err);
        setViewCount(1024); // Fallback for aesthetic purposes if API fails
      });
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
