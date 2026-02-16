"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Search, Map, PenTool, Code2, Rocket } from "lucide-react";
import { cn } from "@/lib/utils";

const steps = [
    {
        number: "01",
        title: "Audit",
        description: "Deep dive into current metrics & friction points.",
        icon: Search,
    },
    {
        number: "02",
        title: "Strategy",
        description: "Roadmap for growth & competitor analysis.",
        icon: Map,
    },
    {
        number: "03",
        title: "Design",
        description: "Pixel-perfect UI/UX aligned with your brand.",
        icon: PenTool,
    },
    {
        number: "04",
        title: "Development",
        description: "Robust, scalable solutions (Future-Proof Architecture).",
        icon: Code2,
    },
    {
        number: "05",
        title: "Launch",
        description: "Go-live optimization & post-launch support.",
        icon: Rocket,
    },
];

export function Process() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    // Smooth out the progress for better feel
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    // Pulse position (0% to 100% of the line width)
    const pulseLeft = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

    // Pulse opacity - fade out at the very end
    const pulseOpacity = useTransform(smoothProgress, [0.95, 1], [1, 0]);

    return (
        // High container to create scroll space. 
        <section ref={containerRef} id="process" className="relative h-[300vh] bg-transparent">

            {/* Sticky Container: Pins the content to the viewport while scrolling */}
            <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden">

                <div className="container px-4 relative z-10 w-full">

                    {/* Header */}
                    <div className="max-w-2xl mx-auto text-center mb-20 space-y-4">
                        <h2 className="text-3xl md:text-5xl font-display font-bold">
                            Our Proven <span className="text-primary">Process</span>
                        </h2>
                        <p className="text-muted-foreground text-lg">
                            From initial audit to final launch, we handle every step with precision.
                        </p>
                    </div>

                    <div className="relative">
                        {/* Connecting Line (Desktop) */}

                        {/* 1. Base Track (Faint) */}
                        <div className="hidden md:block absolute top-[2.5rem] left-0 right-0 h-[1px] bg-white/10 -z-10" />

                        {/* 2. The Laser Pulse (Moving Gradient) */}
                        {/* We use a container that spans the width, and a moving child or a mask */}
                        <div className="hidden md:block absolute top-[2.5rem] left-0 right-0 h-0.5 -z-10 overflow-visible">
                            <motion.div
                                style={{
                                    left: pulseLeft,
                                    opacity: pulseOpacity
                                }}
                                className="absolute top-1/2 -translate-y-1/2 w-[200px] h-[4px] bg-gradient-to-r from-transparent via-red-500 to-transparent blur-[2px] shadow-[0_0_20px_2px_rgba(239,68,68,0.6)]"
                            />
                            {/* The "Trail" - A softer, longer tail behind the pulse */}
                            <motion.div
                                style={{
                                    left: pulseLeft,
                                    opacity: pulseOpacity,
                                    x: "-100%" // Shift left so it trails
                                }}
                                className="absolute top-1/2 -translate-y-1/2 w-[400px] h-[2px] bg-gradient-to-r from-transparent via-red-500/50 to-transparent blur-[4px]"
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                            {steps.map((step, index) => {
                                return (
                                    <StepCard
                                        key={step.title}
                                        step={step}
                                        index={index}
                                        totalSteps={steps.length}
                                        globalProgress={smoothProgress}
                                    />
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function StepCard({ step, index, totalSteps, globalProgress }: { step: any, index: number, totalSteps: number, globalProgress: any }) {

    // Activation Logic:
    // We want the pulse to pass through the card to activate it.
    // Index 0 represents 0% to 20% range visually?
    // Actually, in a grid of 5, the centers are roughly at 10%, 30%, 50%, 70%, 90%.
    // So we should trigger around those values.

    // Calculate approximate center position of this card in the 0-1 timeline
    const centerPos = (index) / (totalSteps - 1);
    // e.g. 0, 0.25, 0.5, 0.75, 1.0 (if we map extremes)
    // But design-wise, there's padding. Let's stick to a linear mapping.

    // Trigger slightly before the "pulse" hits the center
    const triggerStart = (index / totalSteps) - 0.05;
    const triggerEnd = triggerStart + 0.1;

    // Clamp values
    const safeStart = Math.max(0, triggerStart);
    // actually, simple threshold is fine as long as we map correctly

    const threshold = index / totalSteps; // 0, 0.2, 0.4, 0.6, 0.8

    // Animations - Opacity Only for container
    // We make it transition from dim to active
    const opacity = useTransform(globalProgress, [threshold, threshold + 0.1], [0.5, 1]);

    // Text Opacity
    const textOpacity = useTransform(globalProgress, [threshold, threshold + 0.1], [0.4, 1]);

    // Colors - Transition from Zinc to White (Standard) - NO RED
    const iconColor = useTransform(globalProgress, [threshold, threshold + 0.1], ["#52525b", "#ffffff"]);
    const iconBg = useTransform(globalProgress, [threshold, threshold + 0.1], ["rgba(255,255,255,0.02)", "rgba(255,255,255,0.1)"]);
    const borderColor = useTransform(globalProgress, [threshold, threshold + 0.1], ["rgba(255,255,255,0.05)", "rgba(255,255,255,0.2)"]);

    // Glow Effect (White/Blue based on brand, or just subtle white)
    // User said "Steps card should not be red, make it same as last color"
    // Assuming the subtle blue/white glow from earlier versions
    const shadow = useTransform(globalProgress, [threshold, threshold + 0.1], ["none", "0 0 20px rgba(255, 255, 255, 0.1)"]);

    return (
        <motion.div
            style={{
                opacity,
            }}
            className="relative flex flex-col items-center text-center group"
        >

            {/* Icon Circle */}
            <motion.div
                style={{
                    backgroundColor: iconBg,
                    borderColor: borderColor,
                    boxShadow: shadow
                }}
                className="w-20 h-20 rounded-2xl border flex items-center justify-center mb-6 z-20 backdrop-blur-sm relative transition-shadow duration-300"
            >
                {/* Add a subtle inner gradient (optional) */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent rounded-2xl pointer-events-none" />

                <motion.div style={{ color: iconColor }}>
                    <step.icon className="w-8 h-8 transition-colors" />
                </motion.div>
            </motion.div>

            {/* Number */}
            <motion.div style={{ opacity: textOpacity }} className="text-xs font-bold tracking-widest mb-2 uppercase text-primary/80">
                Step {step.number}
            </motion.div>

            {/* Title */}
            <h3 className="text-xl font-display font-bold mb-3 text-foreground">{step.title}</h3>

            {/* Description */}
            <p className="text-sm text-muted-foreground leading-relaxed">
                {step.description}
            </p>
        </motion.div>
    )
}
