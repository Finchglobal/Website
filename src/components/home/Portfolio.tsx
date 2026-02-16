"use client";

import React, { useState } from "react";
import { PortfolioCard } from "./PortfolioCard";
import { Button } from "@/components/ui/button";
import { projects } from "@/lib/cms";
import { motion, AnimatePresence } from "framer-motion";

import { ParallaxSection } from "@/components/ui/ParallaxSection";

export function Portfolio() {
    return (
        <section id="work" className="py-24 md:py-32 relative overflow-hidden bg-secondary/20">
            {/* Background Parallax */}
            <div className="absolute inset-0 -z-10">
                <ParallaxSection speed={-50} className="absolute inset-0 h-full w-full">
                    <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(68,107,158,0.03)_50%,transparent_75%,transparent_100%)] bg-[length:20px_20px]" />
                    <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] transform translate-y-1/2 translate-x-1/2" />
                </ParallaxSection>
            </div>

            <div className="container px-4 relative z-10">
                <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
                    <div className="max-w-2xl space-y-4">
                        <h2 className="text-3xl md:text-5xl font-display font-bold">
                            Selected <span className="text-primary">Work</span>
                        </h2>
                        <p className="text-muted-foreground text-lg">
                            Real results for ambitious brands. Explore our latest case studies.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    <AnimatePresence mode="popLayout">
                        {projects.map((project) => (
                            <motion.div
                                key={project.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                            >
                                <PortfolioCard project={project} />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
