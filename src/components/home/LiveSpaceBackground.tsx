"use client";

import React, { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
// @ts-ignore
import * as random from "maath/random/dist/maath-random.esm";
import { Points, PointMaterial } from "@react-three/drei";

// Color Correction to match the specific "grainy" astrophotography look
// Reference: Dark, cool background, beige/brown dusty core, faint violet mid-tones
const THEME = {
    background: "#030305", // Almost pitch black with a tiny hint of blue
    coreColor: "#c29f79",  // Desaturated Beige/Gold (Dusty)
    midColor: "#5d54a4",   // Deep Muted Violet/Indigo
    edgeColor: "#8da6d6",  // Milky Blue-White
    dustColor: "#2e213b"   // Very dark purple-black for contrast
};

const GALAXY_CONFIG = {
    count: 20000,           // High density for that "grainy" photo look
    radius: 9,
    branches: 3,
    spin: 0.8,              // Slightly looser
    randomness: 0.6,
    randomnessPower: 3,
};

function MilkyWayBand({ scrollRef }: { scrollRef: React.MutableRefObject<number> }) {
    const pointsRef = useRef<THREE.Points>(null);

    const { positions, colors } = useMemo(() => {
        const positions = new Float32Array(GALAXY_CONFIG.count * 3);
        const colors = new Float32Array(GALAXY_CONFIG.count * 3);

        const cCore = new THREE.Color(THEME.coreColor);
        const cMid = new THREE.Color(THEME.midColor);
        const cEdge = new THREE.Color(THEME.edgeColor);

        for (let i = 0; i < GALAXY_CONFIG.count; i++) {
            const i3 = i * 3;
            const r = Math.random() * GALAXY_CONFIG.radius;

            const spinAngle = r * GALAXY_CONFIG.spin;
            const branchAngle = ((i % GALAXY_CONFIG.branches) / GALAXY_CONFIG.branches) * Math.PI * 2;

            const rndX = Math.pow(Math.random(), GALAXY_CONFIG.randomnessPower) * (Math.random() < 0.5 ? 1 : -1) * GALAXY_CONFIG.randomness * r;
            const rndY = Math.pow(Math.random(), GALAXY_CONFIG.randomnessPower) * (Math.random() < 0.5 ? 1 : -1) * GALAXY_CONFIG.randomness * r;
            const rndZ = Math.pow(Math.random(), GALAXY_CONFIG.randomnessPower) * (Math.random() < 0.5 ? 1 : -1) * GALAXY_CONFIG.randomness * r;

            positions[i3] = Math.cos(branchAngle + spinAngle) * r + rndX;
            positions[i3 + 1] = Math.sin(branchAngle + spinAngle) * r + rndY;
            positions[i3 + 2] = (rndZ * 1.8); // Little more volume

            // Color Logic: More complex blending to match the reference
            const color = cCore.clone();

            // Use noise to determine color mix, not just radius, for that "patchy" look
            const noise = Math.random();

            if (r < 3) {
                // Core region: Mix beige and some dark dust
                color.lerp(cMid, noise * 0.3);
            } else if (r >= 3 && r < 6) {
                // Mid region
                color.lerp(cMid, 0.6 + noise * 0.2);
            } else {
                // Edge region
                color.lerp(cEdge, 0.8 + noise * 0.2);
            }

            // Random Red/Blue Shift
            const shift = Math.random();
            if (shift > 0.9) {
                color.r += 0.15; // Red shift
                color.b -= 0.05;
            } else if (shift < 0.1) {
                color.b += 0.15; // Blue shift
                color.r -= 0.05;
            }

            // Desaturate slightly to match realism
            colors[i3] = color.r;
            colors[i3 + 1] = color.g;
            colors[i3 + 2] = color.b;
        }

        return { positions, colors };
    }, []);

    useFrame((state, delta) => {
        if (!pointsRef.current) return;
        const scrollZ = scrollRef.current * 0.0002;
        pointsRef.current.rotation.z = delta * 0.01 + scrollZ;

        // Parallax - Increased responsiveness
        pointsRef.current.rotation.x = THREE.MathUtils.lerp(pointsRef.current.rotation.x, state.pointer.y * 0.2 + Math.PI / 3.5, 0.05);
        pointsRef.current.rotation.y = THREE.MathUtils.lerp(pointsRef.current.rotation.y, state.pointer.x * 0.2, 0.05);
    });

    return (
        <points ref={pointsRef}>
            <bufferGeometry>
                <bufferAttribute attach="attributes-position" count={positions.length / 3} array={positions} itemSize={3} args={[positions, 3]} />
                <bufferAttribute attach="attributes-color" count={colors.length / 3} array={colors} itemSize={3} args={[colors, 3]} />
            </bufferGeometry>
            <pointsMaterial
                size={0.012} // Smaller for sharper look
                sizeAttenuation={true}
                depthWrite={false}
                vertexColors={true}
                blending={THREE.AdditiveBlending}
                transparent={true}
                opacity={0.6} // Dimmed output
            />
        </points>
    );
}

function DustOverlay() {
    // Secondary layer for the "cloudy" feel
    const ref = useRef<any>(null);
    // @ts-ignore
    const [sphere] = React.useState(() => random.inSphere(new Float32Array(3000), { radius: 10 }));

    useFrame((state, delta) => {
        if (ref.current) ref.current.rotation.y -= delta * 0.01;
    })

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
                <PointMaterial
                    transparent
                    color={THEME.midColor}
                    size={0.12}
                    sizeAttenuation={true}
                    depthWrite={false}
                    opacity={0.08} // Extremely subtle haze
                    blending={THREE.AdditiveBlending}
                />
            </Points>
        </group>
    )
}

function BrightStars() {
    // High brightness sprinkles (The white dots in the photo)
    const ref = useRef<any>(null);
    // @ts-ignore
    const [sphere] = React.useState(() => random.inSphere(new Float32Array(1500), { radius: 12 }));
    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
                <PointMaterial transparent color="#ffffff" size={0.02} sizeAttenuation={true} depthWrite={false} opacity={0.6} blending={THREE.AdditiveBlending} />
            </Points>
        </group>
    )
}

export function LiveSpaceBackground() {
    const scrollRef = useRef(0);

    useEffect(() => {
        const handleScroll = () => scrollRef.current = window.scrollY;
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="fixed inset-0 -z-10 bg-[#030305] w-full h-full">
            <Canvas camera={{ position: [0, 0, 5], fov: 50 }} gl={{ antialias: false, toneMapping: THREE.ReinhardToneMapping, toneMappingExposure: 1.5 }}>
                <MilkyWayBand scrollRef={scrollRef} />
                <DustOverlay />
                <BrightStars />
            </Canvas>
        </div>
    );
}
