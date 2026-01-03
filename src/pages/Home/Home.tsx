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
                }, 50); // Slower typing speed (was 20)
                return () => clearTimeout(timeout);
            } else {
                // Move to next line
                const timeout = setTimeout(() => {
                    setLineIndex(lineIndex + 1);
                    setCharIndex(0);
                }, 500); // Increased delay between lines
                return () => clearTimeout(timeout);
            }
        }
    }, [charIndex, lineIndex, fullText]);

    return (
        <>
            <SEO title={homeData.title} description={homeData.description.join(" ")} keywords={homeData.keywords} />
            <div className={styles.container}>
                <motion.div
                    className={styles.imageSection}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <img src="/praveen.jpeg" alt="Praveen Voruganti" />
                    <h1 className={styles.name}>
                        Hi, I'm <span>Praveen</span> 👋
                    </h1>

                    <div className={styles.buttonContainer}>
                        <button
                            className={styles.resumeBtn}
                            onClick={() => window.open('/Praveen_2025_java_fullstack_developer.pdf', '_blank')}
                        >
                            Resume
                        </button>
                    </div>
                </motion.div>

                <motion.div
                    className={styles.textSection}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
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
