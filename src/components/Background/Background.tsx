import { useEffect, useRef } from "react";
import styles from "./Background.module.scss";

export default function Background() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const renderCanvas = () => {
      const isLight = document.documentElement.getAttribute("data-theme") === "light";
      const width = window.innerWidth;
      const height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;

      const gradient = ctx.createLinearGradient(0, 0, width, height);
      if (isLight) {
        gradient.addColorStop(0, "rgba(248, 250, 252, 0.95)");
        gradient.addColorStop(0.5, "rgba(241, 245, 249, 0.85)");
        gradient.addColorStop(1, "rgba(248, 250, 252, 0.95)");
      } else {
        gradient.addColorStop(0, "rgba(11, 15, 25, 0.95)");
        gradient.addColorStop(0.5, "rgba(15, 23, 42, 0.85)");
        gradient.addColorStop(1, "rgba(11, 15, 25, 0.95)");
      }
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);
    };

    renderCanvas();

    const handleResize = () => {
      renderCanvas();
    };

    window.addEventListener("resize", handleResize);

    const observer = new MutationObserver(() => {
      renderCanvas();
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    return () => {
      window.removeEventListener("resize", handleResize);
      observer.disconnect();
    };
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
