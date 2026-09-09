import React from 'react';
import styles from './Home.module.scss';
import homeData from './Home.json';
import { motion } from 'framer-motion';
import SEO from '../../components/SEO/SEO';

const Home: React.FC = () => {
    // Typewriter logic
    const [displayedText, setDisplayedText] = React.useState<string[]>([]);
    const [lineIndex, setLineIndex] = React.useState(0);
    const [charIndex, setCharIndex] = React.useState(0);
    const fullText = homeData.description;
    const scrollRef = React.useRef<HTMLDivElement>(null);

    // Auto-scroll to bottom effect
    React.useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [displayedText, lineIndex]);

    React.useEffect(() => {
        if (lineIndex < fullText.length) {
            const currentLine = fullText[lineIndex];

            if (charIndex < currentLine.length) {
                const timeout = setTimeout(() => {
                    setDisplayedText((prev) => {
                        const newLines = [...prev];
                        if (!newLines[lineIndex]) newLines[lineIndex] = "";
                        newLines[lineIndex] += currentLine.charAt(charIndex);
                        return newLines;
                    });
                    setCharIndex(charIndex + 1);
                }, 50);
                return () => clearTimeout(timeout);
            } else {
                const timeout = setTimeout(() => {
                    setLineIndex(lineIndex + 1);
                    setCharIndex(0);
                }, 500);
                return () => clearTimeout(timeout);
            }
        }
    }, [charIndex, lineIndex, fullText]);

    return (
        <>
            <SEO title={homeData.title} description={homeData.description.join(" ")} keywords={homeData.keywords} />
            <div className={styles.container}>
                {/* Top greeting pill */}
                <motion.div
                    className={styles.greetingPill}
                    initial={{ opacity: 0, y: -15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <span>Hello! 👋</span>
                </motion.div>

                {/* Hero Title */}
                <motion.h1
                    className={styles.heroTitle}
                    initial={{ opacity: 0, y: -15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                >
                    Hi, I'm <span>Praveen</span>,<br />
                    Java Full Stack & Release Engineer
                </motion.h1>

                {/* Hero Center Image */}
                <motion.div
                    className={styles.heroCenter}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <div className={styles.imageWrapper}>
                        <div className={styles.glowBackdrop} />
                        <motion.img
                            src="/praveen_cutout.png"
                            alt="Praveen Voruganti"
                            className={styles.portraitImg}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: 'easeOut' }}
                        />
                    </div>

                    {/* Floating Badges */}
                    <div className={styles.floatingBadgeLeft}>
                        <div className={styles.stars}>★★★★★</div>
                        <div className={styles.badgeLabel}>5+ Years</div>
                        <div className={styles.badgeSub}>Experience</div>
                    </div>

                    {/* Right floating badge */}
                    <div className={styles.floatingBadgeRight}>
                        <div className={styles.badgeIcon}>🤖</div>
                        <div className={styles.badgeLabel}>AI Automation</div>
                        <div className={styles.badgeSub}>& Service Ops</div>
                    </div>
                </motion.div>

                {/* Simple Action Buttons Row Below Image */}
                <motion.div
                    className={styles.ctaRow}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.28 }}
                >
                    <button
                        className={styles.primaryBtn}
                        onClick={() => window.open('/Praveen_Voruganti_Resume.pdf', '_blank')}
                    >
                        Resume ↗
                    </button>
                    <button
                        className={styles.secondaryBtn}
                        onClick={() => {
                            const contactEl = document.getElementById('contact-section');
                            if (contactEl) contactEl.scrollIntoView({ behavior: 'smooth' });
                        }}
                    >
                        Contact Me
                    </button>
                </motion.div>

                {/* Role & Typewriter Section */}
                <motion.div
                    className={styles.descriptionContainer}
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.35 }}
                >
                    <h2 className={styles.role}>{homeData.role}</h2>
                    <div className={styles.descriptionWrapper} ref={scrollRef}>
                        {displayedText.map((line, idx) => (
                            <p key={idx} className={styles.descriptionLine}>
                                {line}
                            </p>
                        ))}
                        <span className={styles.cursor}>|</span>
                    </div>
                </motion.div>
            </div>
        </>
    );
};

export default Home;
