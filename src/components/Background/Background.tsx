import { useEffect, useRef } from "react";
import styles from "./Background.module.scss";

export default function Background() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;

      const gradient = ctx.createLinearGradient(0, 0, width, height);
      gradient.addColorStop(0, "rgba(11, 15, 25, 0.95)");
      gradient.addColorStop(0.5, "rgba(15, 23, 42, 0.85)");
      gradient.addColorStop(1, "rgba(11, 15, 25, 0.95)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={styles.backgroundContainer}>
      <div className={styles.glowOrb1} />
      <div className={styles.glowOrb2} />
      <div className={styles.glowOrb3} />
      <canvas ref={canvasRef} className={styles.background} />
    </div>
  );
}
