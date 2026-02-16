"use client";

import React from "react";
import { motion } from "framer-motion";
import { Search, Map, PenTool, Code2, Rocket } from "lucide-react";

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
    return (
        <section id="process" className="py-24 md:py-32 bg-background relative overflow-hidden">
            {/* Background Decor (optional) */}
            <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
                <div className="absolute right-0 top-1/4 w-96 h-96 bg-primary rounded-full blur-[100px]" />
            </div>

            <div className="container px-4 relative z-10">
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
                    <div className="hidden md:block absolute top-[2.5rem] left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-border to-transparent" />

                    <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                        {steps.map((step, index) => (
                            <motion.div
                                key={step.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="relative flex flex-col items-center text-center group"
                            >
                                {/* Step Connector Dot */}
                                <div className="hidden md:flex items-center justify-center w-4 h-4 rounded-full bg-background border-2 border-primary absolute top-[2.1rem] left-1/2 -translate-x-1/2 z-10 box-content">
                                    <div className="w-2 h-2 rounded-full bg-primary" />
                                </div>

                                {/* Icon Circle */}
                                <div className="w-20 h-20 rounded-2xl bg-secondary border border-border flex items-center justify-center mb-6 z-20 group-hover:border-primary transition-colors duration-300 shadow-lg">
                                    <step.icon className="w-8 h-8 text-muted-foreground group-hover:text-primary transition-colors" />
                                </div>

                                {/* Number */}
                                <div className="text-xs font-bold tracking-widest text-primary mb-2 uppercase">
                                    Step {step.number}
                                </div>

                                {/* Title */}
                                <h3 className="text-xl font-display font-bold mb-3">{step.title}</h3>

                                {/* Description */}
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    {step.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
