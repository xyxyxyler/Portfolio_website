import React, { useEffect, useRef } from 'react';

interface Particle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    size: number;
    color: string;
}

const ParticleField: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const particlesRef = useRef<Particle[]>([]);
    const mouseRef = useRef({ x: -1000, y: -1000 });
    const animationFrameRef = useRef<number>();

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Set canvas size
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initParticles();
        };

        // Initialize particles
        const initParticles = () => {
            const particleCount = 80; // Reduced for cleaner look
            particlesRef.current = [];

            for (let i = 0; i < particleCount; i++) {
                particlesRef.current.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    vx: (Math.random() - 0.5) * 0.5, // Slower movement
                    vy: (Math.random() - 0.5) * 0.5,
                    size: Math.random() * 1.5 + 0.5, // Much smaller: 0.5-2px
                    color: '#06b6d4', // Single cyan accent color
                });
            }
        };

        // Mouse move handler
        const handleMouseMove = (e: MouseEvent) => {
            const rect = canvas.getBoundingClientRect();
            mouseRef.current = {
                x: e.clientX - rect.left,
                y: e.clientY - rect.top
            };
        };

        // Animation loop
        const animate = () => {
            if (!ctx || !canvas) return;

            // Clear canvas
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Update and draw particles
            particlesRef.current.forEach((particle, i) => {
                // Calculate distance from mouse
                const dx = mouseRef.current.x - particle.x;
                const dy = mouseRef.current.y - particle.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                const maxDistance = 250;

                // Gentle mouse interaction (attraction/connection instead of strong repulsion)
                if (distance < maxDistance) {
                    // Draw line to mouse
                    ctx.beginPath();
                    ctx.strokeStyle = `rgba(6, 182, 212, ${0.2 * (1 - distance / maxDistance)})`;
                    ctx.lineWidth = 1;
                    ctx.moveTo(particle.x, particle.y);
                    ctx.lineTo(mouseRef.current.x, mouseRef.current.y);
                    ctx.stroke();

                    // Slight attraction to mouse for interactive feel
                    const force = (maxDistance - distance) / maxDistance;
                    const angle = Math.atan2(dy, dx);
                    particle.vx += Math.cos(angle) * force * 0.02;
                    particle.vy += Math.sin(angle) * force * 0.02;
                }

                // Boundary wrapping
                if (particle.x < 0) particle.x = canvas.width;
                if (particle.x > canvas.width) particle.x = 0;
                if (particle.y < 0) particle.y = canvas.height;
                if (particle.y > canvas.height) particle.y = 0;

                // Apply friction to keep movement smooth and slow
                particle.vx *= 0.98;
                particle.vy *= 0.98;

                // Keep a minimum speed so they don't stop completely
                if (Math.abs(particle.vx) < 0.1) particle.vx += (Math.random() - 0.5) * 0.05;
                if (Math.abs(particle.vy) < 0.1) particle.vy += (Math.random() - 0.5) * 0.05;

                // Update position
                particle.x += particle.vx;
                particle.y += particle.vy;

                // Draw simple particle (no glow)
                ctx.fillStyle = `rgba(6, 182, 212, 0.4)`; // Subtle opacity
                ctx.beginPath();
                ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
                ctx.fill();

                // Draw connections between particles
                particlesRef.current.forEach((otherParticle, j) => {
                    if (i >= j) return;

                    const dx = particle.x - otherParticle.x;
                    const dy = particle.y - otherParticle.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    const maxLineDistance = 150;

                    if (distance < maxLineDistance) {
                        const opacity = ((1 - distance / maxLineDistance) * 0.15).toFixed(2); // Very subtle lines
                        ctx.strokeStyle = `rgba(6, 182, 212, ${opacity})`;
                        ctx.lineWidth = 0.5;
                        ctx.beginPath();
                        ctx.moveTo(particle.x, particle.y);
                        ctx.lineTo(otherParticle.x, otherParticle.y);
                        ctx.stroke();
                    }
                });
            });

            animationFrameRef.current = requestAnimationFrame(animate);
        };

        // Initialize
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);
        window.addEventListener('mousemove', handleMouseMove);
        animate();

        // Cleanup
        return () => {
            window.removeEventListener('resize', resizeCanvas);
            window.removeEventListener('mousemove', handleMouseMove);
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed top-0 left-0 w-full h-screen pointer-events-none"
            style={{ zIndex: 1 }}
        />
    );
};

export default ParticleField;
