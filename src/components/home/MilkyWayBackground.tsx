"use client";

import React, { useEffect, useRef } from "react";

interface Star {
    x: number;
    y: number;
    size: number;
    color: string;
    angle: number;
    radius: number;
    speed: number;
    blinkSpeed: number;
    blinkOffset: number;
    type: "star" | "nebula"; // New type for different rendering
}

export function MilkyWayBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const scrollRef = useRef(0);
    const mouseRef = useRef({ x: 0, y: 0 });

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let width = window.innerWidth;
        let height = window.innerHeight;
        let animationFrameId: number;

        const stars: Star[] = [];
        const numStars = 4000; // Increased density for crispness
        const numNebula = 300; // Clouds
        const arms = 5; // More complex structure
        const armSpread = 0.8;

        // Initialize Stars & Nebula
        const initStars = () => {
            stars.length = 0;
            // Stars
            for (let i = 0; i < numStars; i++) {
                const distance = Math.pow(Math.random(), 1.5) * Math.max(width, height) * 0.6; // Core heavy
                const angle = Math.random() * Math.PI * 2;
                const armIndex = i % arms;
                const armAngle = (armIndex / arms) * Math.PI * 2;
                const finalAngle = armAngle + distance * 0.003 + (Math.random() * armSpread - armSpread / 2); // Tighter spiral

                const colors = ["#ffffff", "#bfdbfe", "#e9d5ff", "#ffffff", "#60a5fa"]; // Crisp White & Blue
                const color = colors[Math.floor(Math.random() * colors.length)];

                stars.push({
                    x: 0, y: 0,
                    size: Math.random() < 0.9 ? Math.random() * 1.0 : Math.random() * 2.5 + 1.0, // Mostly small, some bright
                    color: color,
                    angle: finalAngle,
                    radius: distance,
                    speed: Math.random() * 0.0001 + 0.00005,
                    blinkSpeed: Math.random() * 0.05 + 0.01,
                    blinkOffset: Math.random() * Math.PI * 2,
                    type: "star"
                });
            }

            // Nebula Clouds
            for (let i = 0; i < numNebula; i++) {
                const distance = Math.random() * Math.max(width, height) * 0.5;
                const armIndex = i % arms;
                const armAngle = (armIndex / arms) * Math.PI * 2;
                const finalAngle = armAngle + distance * 0.003 + (Math.random() * 1.5 - 0.75); // Looser

                const cloudColors = ["rgba(59, 130, 246, 0.05)", "rgba(139, 92, 246, 0.05)", "rgba(99, 102, 241, 0.04)"];

                stars.push({
                    x: 0, y: 0,
                    size: Math.random() * 100 + 50, // Huge
                    color: cloudColors[Math.floor(Math.random() * cloudColors.length)],
                    angle: finalAngle,
                    radius: distance,
                    speed: Math.random() * 0.00005,
                    blinkSpeed: 0,
                    blinkOffset: 0,
                    type: "nebula"
                });
            }
        };

        const resize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
            initStars();
        };

        const handleScroll = () => {
            scrollRef.current = window.scrollY;
        };

        const handleMouseMove = (e: MouseEvent) => {
            mouseRef.current = {
                x: (e.clientX - width / 2) / width,
                y: (e.clientY - height / 2) / height
            };
        };

        window.addEventListener("resize", resize);
        window.addEventListener("scroll", handleScroll);
        window.addEventListener("mousemove", handleMouseMove);
        resize();

        const render = (time: number) => {
            // Deep Black Background
            ctx.fillStyle = "#020205"; // darker than #09090b
            ctx.fillRect(0, 0, width, height);

            const centerX = width / 2;
            const centerY = height / 2;
            const scrollRotation = scrollRef.current * 0.0003; // Slower, majestic rotation
            const mouseX = mouseRef.current.x * 40;
            const mouseY = mouseRef.current.y * 40;

            // Render Nebula First (Background)
            ctx.globalCompositeOperation = "lighter"; // Additive blending for glow
            stars.filter(s => s.type === "nebula").forEach((star) => {
                const currentAngle = star.angle + scrollRotation;
                const x = centerX + Math.cos(currentAngle) * star.radius + mouseX * (star.radius / 1000);
                const y = centerY + Math.sin(currentAngle) * star.radius + mouseY * (star.radius / 1000);

                ctx.beginPath();
                ctx.arc(x, y, star.size, 0, Math.PI * 2);
                ctx.fillStyle = star.color;
                ctx.fill();
            });

            // Render Stars (Crisp)
            ctx.globalCompositeOperation = "source-over"; // Reset for crisp stars
            stars.filter(s => s.type === "star").forEach((star) => {
                const currentAngle = star.angle + scrollRotation;
                const x = centerX + Math.cos(currentAngle) * star.radius + mouseX * (star.radius / 400);
                const y = centerY + Math.sin(currentAngle) * star.radius + mouseY * (star.radius / 400);

                const blink = Math.sin(time * 0.002 * star.blinkSpeed + star.blinkOffset);
                const opacity = 0.5 + (blink + 1) * 0.25;

                ctx.beginPath();
                ctx.arc(x, y, star.size, 0, Math.PI * 2);
                ctx.fillStyle = star.color;
                ctx.globalAlpha = opacity;
                ctx.fill();
            });
            ctx.globalAlpha = 1;

            animationFrameId = requestAnimationFrame(render);
        };

        render(0);

        return () => {
            window.removeEventListener("resize", resize);
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("mousemove", handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 top-0 left-0 -z-10 w-full h-full pointer-events-none"
        />
    );
}
