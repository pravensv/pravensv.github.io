import styles from "./SectionWrapper.module.scss";

export default function SectionWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.sectionWrapper}>
      <div className={styles.inner}>{children}</div>
    </div>
  );
}
