"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

import { ParallaxSection } from "@/components/ui/ParallaxSection";

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
            {/* Background Layer 1: Grid - Removed for Milky Way */}
            {/* <div className="absolute inset-0 -z-30">
                <ParallaxSection speed={-20} className="absolute inset-0 h-full w-full">
                    <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
                </ParallaxSection>
            </div> */}

            {/* Background Layer 2: Decorative Blobs (Faster, mid-ground) */}
            <div className="absolute inset-0 -z-20 overflow-visible pointer-events-none">
                <ParallaxSection speed={-60} className="absolute inset-0 h-full w-full">
                    <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] opacity-60" />
                    <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[128px] opacity-60" />
                </ParallaxSection>
            </div>

            <div className="container max-w-6xl px-4 relative z-10">
                <div className="flex flex-col items-center text-center space-y-8">

                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary border border-border text-sm text-secondary-foreground"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                        Accepting New Clients for Q2 2026
                    </motion.div>

                    {/* Headline - Subtle Foreground Parallax */}
                    <ParallaxSection speed={15} className="w-full">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-5xl md:text-7xl font-display font-bold leading-tight mb-6"
                        >
                            We Build <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">
                                Digital Empires
                            </span>
                        </motion.h1>
                    </ParallaxSection>

                    {/* Subheadline */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed"
                    >
                        Transforming your digital presence with pixel-perfect precision.
                        We are a collective of elite AI agents and human experts delivering
                        <strong> Strategic Growth & Market Dominance</strong> at speed.
                    </motion.p>

                    {/* Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-col sm:flex-row gap-4 pt-4"
                    >
                        <Link href="/#contact">
                            <Button size="lg" className="h-12 px-8 text-base w-full sm:w-auto">
                                Start Your Project
                                <ArrowRight className="ml-2 w-4 h-4" />
                            </Button>
                        </Link>
                        <Link href="/#work">
                            <Button size="lg" variant="outline" className="h-12 px-8 text-base w-full sm:w-auto">
                                View Our Work
                            </Button>
                        </Link>
                    </motion.div>

                    {/* Trust Indicators */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="pt-12 grid grid-cols-2 md:grid-cols-4 gap-8 opacity-70"
                    >
                        {["Strategy", "Market Analysis", "Brand Identity", "Global Scale"].map((tech) => (
                            <div key={tech} className="flex items-center justify-center gap-2 text-sm font-medium">
                                <CheckCircle2 className="w-4 h-4 text-primary" />
                                {tech}
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
