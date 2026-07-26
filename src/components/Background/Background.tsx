import { useEffect, useRef } from "react";
import styles from "./Background.module.scss";

export default function Background() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        const isMobile = window.innerWidth < 768;

        let width = window.innerWidth;
        let height = window.innerHeight;
        const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
        canvas.width = Math.floor(width * dpr);
        canvas.height = Math.floor(height * dpr);
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

        const palette = ["#22d3ee", "#8b5cf6", "#f43f5e", "#38bdf8"];
        const particles: Particle[] = [];
        const particleCount = isMobile ? 24 : 36;
        const connectionDistance = isMobile ? 90 : 120;
        const mouse = { x: width * 0.5, y: height * 0.5, active: false };
        let frameId = 0;

        class Particle {
            x: number;
            y: number;
            vx: number;
            vy: number;
            size: number;
            color: string;

            constructor() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.vx = (Math.random() - 0.5) * 0.2;
                this.vy = (Math.random() - 0.5) * 0.2;
                this.size = Math.random() * 1.6 + 0.8;
                this.color = palette[Math.floor(Math.random() * palette.length)];
            }

            update(time: number) {
                const pointerStrength = mouse.active ? 0.0005 : 0;
                this.vx += (mouse.x - this.x) * pointerStrength;
                this.vy += (mouse.y - this.y) * pointerStrength;
                this.vx *= 0.96;
                this.vy *= 0.96;
                this.x += this.vx + Math.sin(time * 0.0004 + this.y * 0.003) * 0.01;
                this.y += this.vy + Math.cos(time * 0.00035 + this.x * 0.003) * 0.01;

                if (this.x < -20 || this.x > width + 20) this.vx *= -1;
                if (this.y < -20 || this.y > height + 20) this.vy *= -1;
            }

            draw() {
                if (!ctx) return;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = this.color;
                ctx.fill();
            }
        }

        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }

        function animate(time: number) {
            if (!ctx || !canvas) return;

            const gradient = ctx.createLinearGradient(0, 0, width, height);
            gradient.addColorStop(0, "rgba(2, 6, 23, 0.9)");
            gradient.addColorStop(0.5, "rgba(15, 23, 42, 0.8)");
            gradient.addColorStop(1, "rgba(30, 41, 59, 0.92)");
            ctx.clearRect(0, 0, width, height);
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, width, height);

            particles.forEach((particle) => {
                particle.update(time);
                particle.draw();
            });

            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < connectionDistance) {
                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(255,255,255,${0.08 * (1 - distance / connectionDistance)})`;
                        ctx.lineWidth = 0.6;
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }
            }

            if (!prefersReducedMotion) {
                frameId = window.requestAnimationFrame(animate);
            }
        }

        if (!prefersReducedMotion) {
            frameId = window.requestAnimationFrame(animate);
        }

        const handleResize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            const nextDpr = Math.min(window.devicePixelRatio || 1, 1.5);
            canvas.width = Math.floor(width * nextDpr);
            canvas.height = Math.floor(height * nextDpr);
            ctx.setTransform(nextDpr, 0, 0, nextDpr, 0, 0);
        };

        const handlePointerMove = (event: MouseEvent) => {
            mouse.x = event.clientX;
            mouse.y = event.clientY;
            mouse.active = true;
        };

        const handlePointerLeave = () => {
            mouse.active = false;
        };

        const handleVisibility = () => {
            if (document.hidden) {
                if (frameId) {
                    window.cancelAnimationFrame(frameId);
                    frameId = 0;
                }
            } else if (!prefersReducedMotion) {
                frameId = window.requestAnimationFrame(animate);
            }
        };

        window.addEventListener("resize", handleResize);
        window.addEventListener("pointermove", handlePointerMove);
        window.addEventListener("pointerleave", handlePointerLeave);
        document.addEventListener("visibilitychange", handleVisibility);

        return () => {
            if (frameId) {
                window.cancelAnimationFrame(frameId);
            }
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("pointermove", handlePointerMove);
            window.removeEventListener("pointerleave", handlePointerLeave);
            document.removeEventListener("visibilitychange", handleVisibility);
        };
    }, []);

    return <canvas ref={canvasRef} className={styles.background} />;
}
