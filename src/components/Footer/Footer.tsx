import footerData from "./Footer.json";
import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>

        {/* Brand + Description */}
        <div className={styles.brandBox}>
          <h2>{footerData.brand}</h2>
          <p>{footerData.description}</p>
        </div>

        {/* Social Icons */}
        <div className={styles.socialBox}>
          {footerData.socialLinks.map((item, index) => (
            <a key={index} href={item.link} target="_blank" rel="noopener noreferrer">
              <img src={item.icon} alt={item.platform} />
            </a>
          ))}
        </div>
      </div>

      {/* Copyright */}
      <div className={styles.copy}>
        <p>{footerData.copyright}</p>
      </div>
    </footer>
  );
}
