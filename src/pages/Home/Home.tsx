import React, { useState, useEffect, useRef } from 'react';
import styles from './Home.module.scss';
import homeData from './Home.json';
import { motion, AnimatePresence } from 'framer-motion';
import SEO from '../../components/SEO/SEO';

const Home: React.FC = () => {
    // Typewriter logic
    const [displayedText, setDisplayedText] = useState<string[]>([]);
    const [lineIndex, setLineIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [showGreeting, setShowGreeting] = useState(true);
    const fullText = homeData.description;
    const scrollRef = useRef<HTMLDivElement>(null);

    // Auto greeting duration (3.5 seconds on first page load)
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowGreeting(false);
        }, 3500);
        return () => clearTimeout(timer);
    }, []);

    const triggerGreeting = () => {
        setShowGreeting(true);
        setTimeout(() => setShowGreeting(false), 3500);
    };

    // Auto-scroll to bottom effect
    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [displayedText, lineIndex]);

    useEffect(() => {
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
                    onClick={triggerGreeting}
                    style={{ cursor: 'pointer' }}
                >
                    <motion.span
                        animate={{ rotate: showGreeting ? [0, 14, -8, 14, -4, 10, 0] : 0 }}
                        transition={{ repeat: showGreeting ? Infinity : 0, duration: 1.2 }}
                        style={{ display: 'inline-block', transformOrigin: '70% 70%' }}
                    >
                        👋
                    </motion.span>
                    <span>Hello! Welcome</span>
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

                {/* Hero Center Image & Greeting Speech Bubble */}
                <motion.div
                    className={styles.heroCenter}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <div className={styles.imageWrapper} onClick={triggerGreeting} title="Click to say Hi!">
                        <div className={`${styles.glowBackdrop} ${showGreeting ? styles.glowActive : ''}`} />

                        {/* Animated Speech Bubble Overlay */}
                        <AnimatePresence>
                            {showGreeting && (
                                <motion.div
                                    className={styles.greetingBubble}
                                    initial={{ opacity: 0, scale: 0.4, y: 20, x: '-50%' }}
                                    animate={{ opacity: 1, scale: 1, y: 0, x: '-50%' }}
                                    exit={{ opacity: 0, scale: 0.7, y: -15, x: '-50%' }}
                                    transition={{ type: "spring", stiffness: 300, damping: 22 }}
                                >
                                    <motion.span
                                        className={styles.waveHand}
                                        animate={{ rotate: [0, 20, -10, 20, -5, 0] }}
                                        transition={{ repeat: Infinity, duration: 1 }}
                                    >
                                        👋
                                    </motion.span>
                                    <div className={styles.bubbleText}>
                                        <span className={styles.bubbleHi}>Hi there!</span>
                                        <span className={styles.bubbleWelcome}>Welcome to my Portfolio!</span>
                                    </div>
                                    <div className={styles.bubbleTail} />
                                </motion.div>
                            )}
                        </AnimatePresence>

                        <AnimatePresence mode="wait">
                            <motion.img
                                key={showGreeting ? 'praveen_hi' : 'praveen_cutout'}
                                src={showGreeting ? "/praveen_hi.png" : "/praveen_cutout.png"}
                                alt="Praveen Voruganti"
                                className={`${styles.portraitImg} ${showGreeting ? styles.portraitGreeting : ''}`}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={
                                    showGreeting
                                        ? {
                                            opacity: 1,
                                            scale: 1.02,
                                            rotate: [0, 4, -2, 4, -1, 0],
                                          }
                                        : { opacity: 1, scale: 1, rotate: 0 }
                                }
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{
                                    duration: showGreeting ? 1.4 : 0.4,
                                    repeat: showGreeting ? Infinity : 0,
                                    repeatType: 'mirror',
                                    ease: 'easeInOut'
                                }}
                            />
                        </AnimatePresence>

                        {/* Interactive "Say Hi!" Trigger Badge */}
                        {!showGreeting && (
                            <motion.button
                                className={styles.sayHiBtn}
                                onClick={triggerGreeting}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                whileHover={{ scale: 1.08 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <span>👋</span> Say Hi!
                            </motion.button>
                        )}
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
