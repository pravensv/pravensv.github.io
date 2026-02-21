import { useEffect, useRef } from "react";
import styles from "./Background.module.scss";

export default function Background() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let width = window.innerWidth;
        let height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;

        const particles: Particle[] = [];
        const particleCount = 80; // Increased particle count
        const connectionDistance = 200; // Extended connection distance

        // Enhanced color palette
        const colors = [
            { r: 0, g: 191, b: 255 },    // Deep Sky Blue
            { r: 0, g: 255, b: 255 },    // Cyan
            { r: 100, g: 200, b: 255 },  // Light Blue
            { r: 0, g: 150, b: 255 }     // Medium Blue
        ];

        class Particle {
            x: number;
            y: number;
            vx: number;
            vy: number;
            size: number;
            color: { r: number; g: number; b: number };
            opacity: number;
            pulseSpeed: number;
            basePulse: number;

            constructor() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.vx = (Math.random() - 0.5) * 0.7; // Slightly faster
                this.vy = (Math.random() - 0.5) * 0.7;
                this.size = Math.random() * 3 + 1.5;
                this.color = colors[Math.floor(Math.random() * colors.length)];
                this.opacity = Math.random() * 0.5 + 0.3;
                this.pulseSpeed = Math.random() * 0.02 + 0.01;
                this.basePulse = Math.random() * Math.PI * 2;
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;

                // Bounce off edges with smoother transition
                if (this.x < 0 || this.x > width) this.vx *= -1;
                if (this.y < 0 || this.y > height) this.vy *= -1;

                // Wrap around edges instead of bouncing
                this.x = (this.x + width) % width;
                this.y = (this.y + height) % height;
            }

            draw() {
                if (!ctx) return;

                // Pulsing effect
                const pulse = Math.sin(Date.now() * this.pulseSpeed + this.basePulse) * 0.5 + 0.5;
                const currentSize = this.size * (0.7 + pulse * 0.3);
                const currentOpacity = this.opacity * (0.5 + pulse * 0.5);

                // Draw glow effect
                const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, currentSize * 2.5);
                gradient.addColorStop(0, `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, ${currentOpacity * 0.8})`);
                gradient.addColorStop(1, `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, 0)`);
                
                ctx.fillStyle = gradient;
                ctx.beginPath();
                ctx.arc(this.x, this.y, currentSize * 2.5, 0, Math.PI * 2);
                ctx.fill();

                // Draw core particle
                ctx.beginPath();
                ctx.arc(this.x, this.y, currentSize, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, ${currentOpacity})`;
                ctx.fill();
            }
        }

        // Initialize particles
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }

        let frameCount = 0;

        function animate() {
            if (!ctx || !canvas) return;
            
            // Clear with slightly transparent background to create trail effect
            ctx.fillStyle = "rgba(15, 23, 42, 0.1)";
            ctx.fillRect(0, 0, width, height);

            frameCount++;

            // Update and draw particles
            particles.forEach((particle) => {
                particle.update();
                particle.draw();
            });

            // Draw connections with enhanced styling
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < connectionDistance) {
                        const lineAlpha = (1 - distance / connectionDistance) * 0.6;
                        
                        // Blend colors from both particles
                        const avgColor = {
                            r: (particles[i].color.r + particles[j].color.r) / 2,
                            g: (particles[i].color.g + particles[j].color.g) / 2,
                            b: (particles[i].color.b + particles[j].color.b) / 2
                        };

                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(${avgColor.r}, ${avgColor.g}, ${avgColor.b}, ${lineAlpha})`;
                        ctx.lineWidth = 1.2;
                        ctx.lineCap = "round";
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();

                        // Add subtle glow to lines
                        ctx.strokeStyle = `rgba(${avgColor.r}, ${avgColor.g}, ${avgColor.b}, ${lineAlpha * 0.3})`;
                        ctx.lineWidth = 3;
                        ctx.stroke();
                    }
                }
            }

            requestAnimationFrame(animate);
        }

        animate();

        const handleResize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return <canvas ref={canvasRef} className={styles.background} />;
}
