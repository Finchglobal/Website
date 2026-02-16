import { useTransform, MotionValue } from "framer-motion";

/**
 * Custom hook to create a parallax effect value.
 *
 * @param value - The MotionValue to transform (usually scrollYProgress).
 * @param distance - The distance to move the element (negative for slower/reverse, positive for faster/forward).
 * @returns A new MotionValue representing the parallax offset.
 */
export function useParallax(value: MotionValue<number>, distance: number) {
    return useTransform(value, [0, 1], [-distance, distance]);
}
