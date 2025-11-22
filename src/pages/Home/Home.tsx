import SEO from "../../components/SEO/SEO";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import styles from "./Home.module.scss";
import data from "./Home.json";

export default function Home() {
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    let index = 0;
    const speed = 30;
    const interval = setInterval(() => {
      setTypedText((prev) => prev + data.description.charAt(index));
      index++;
      if (index >= data.description.length) clearInterval(interval);
    }, speed);

    return () => clearInterval(interval);
  }, []);

  // 👉 Smooth scroll to contact section
  const handleHireMe = () => {
    const section = document.getElementById("contact-section");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <SEO
        title={data.title}
        description={data.description}
        keywords="Praveen Shetty, Voruganti Praveen, Voruganti Praveen Shetty, Praveensv, Portfolio, Frontend Developer, React Developer"
        schema={{
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Praveen Shetty",
          "alternateName": ["Voruganti Praveen", "Voruganti Praveen Shetty"],
          "url": "https://pravensv.github.io/",
          "image": "https://pravensv.github.io/praveen.jpeg",
          "sameAs": [
            "https://github.com/pravensv",
            "https://www.linkedin.com/in/praveen-shetty-014940183/"
          ],
          "jobTitle": "Frontend Developer",
          "worksFor": {
            "@type": "Organization",
            "name": "Self-Employed"
          }
        }}
      />

      <div className={styles.container}>

        {/* LEFT SIDE – IMAGE */}
        <motion.div
          className={styles.imageSection}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img src="/praveen.jpeg" alt="Praveen" />
        </motion.div>

        {/* RIGHT SIDE – TEXT */}
        <motion.div
          className={styles.textSection}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className={styles.name}>Hi, I'm <span>Praveen</span> 👋</h1>

          <h2 className={styles.role}>{data.role}</h2>

          {/* TYPING DESCRIPTION */}
          <p className={styles.description}>
            {typedText}
            <span className={styles.cursor}>|</span>
          </p>

          {/* BUTTONS */}
          <div className={styles.buttonContainer}>
            {/* Resume Button */}
            <a
              href="/Praveen_2025_java_fullstack_developer.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.resumeBtn}
            >
              Resume
            </a>

            {/* Hire Me Button */}
            <button
              onClick={handleHireMe}
              className={styles.hireBtn}
            >
              Hire Me
            </button>
          </div>

        </motion.div>

      </div>
    </>
  );
}
