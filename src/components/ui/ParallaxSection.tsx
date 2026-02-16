"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useSpring, useTransform, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useParallax } from "@/hooks/useParallax";

interface ParallaxSectionProps {
    children: React.ReactNode;
    speed?: number; // Distance to move in pixels (approximate)
    className?: string;
    direction?: "y" | "x";
    enableMobile?: boolean; // Option to disable on mobile
}

export function ParallaxSection({
    children,
    speed = 50,
    className,
    direction = "y",
    enableMobile = false,
}: ParallaxSectionProps) {
    const ref = useRef<HTMLDivElement>(null);
    const shouldReduceMotion = useReducedMotion();
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    // Determine effective speed
    // If reduced motion is preferred, speed is 0.
    // If on mobile and enableMobile is false, speed is 0.
    const isDisabled = shouldReduceMotion || (isMobile && !enableMobile);
    const effectiveSpeed = isDisabled ? 0 : speed;

    // Track scroll progress of this specific container relative to the viewport
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    // Create parallax value
    // We use spring physics for smoother updates
    const springConfig = { stiffness: 400, damping: 90 };
    const smoothProgress = useSpring(scrollYProgress, springConfig);

    const y = useParallax(smoothProgress, effectiveSpeed);
    const x = useParallax(smoothProgress, effectiveSpeed);

    const style = direction === "y" ? { y } : { x };

    // If disabled, we can still render the motion div but with 0 offset, 
    // or we can conditionally apply style. 
    // Applying 0 offset is safer for layout consistency.

    return (
        <div ref={ref} className={cn("relative w-full", className)}>
            <motion.div style={style} className="w-full h-full will-change-transform">
                {children}
            </motion.div>
        </div>
    );
}
