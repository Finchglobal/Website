"use client";

import React from "react";
import { PenTool, Code2, BarChart3, ShoppingBag, LineChart } from "lucide-react";
import { ServiceCard } from "./ServiceCard";

const services = [
    {
        title: "UI/UX Design",
        icon: PenTool,
        features: ["User Research (30+ hrs)", "Figma Mockups", "UX/UI Prototypes", "A/B Testing"],
    },
    {
        title: "Web Development",
        icon: Code2,
        features: ["High-Conversion Interfaces", "Scalable Infrastructure", "Headless CMS", "Peak Performance"],
    },
    {
        title: "Digital Marketing",
        icon: BarChart3,
        features: ["Social Media Strategy", "SEO Technical Audit", "Email Automation", "Analytics Dashboard"],
    },
    {
        title: "E-Commerce Solution",
        icon: ShoppingBag,
        features: ["Commerce Strategy", "Revenue Optimization", "Conversion Optimization", "Inventory Intelligence"],
    },
    {
        title: "Strategy Refinements",
        icon: LineChart,
        features: ["Business Audits", "Growth Roadmaps", "Competitor Analysis", "ROI Forecasting"],
    },
];

import { ParallaxSection } from "@/components/ui/ParallaxSection";

export function Services() {
    return (
        <section id="services" className="py-24 md:py-32 relative overflow-hidden bg-background/50">
            {/* Background Parallax */}
            <div className="absolute inset-0 -z-10">
                <ParallaxSection speed={-30} className="absolute inset-0 h-full w-full">
                    <div className="absolute top-1/4 left-0 w-full h-[500px] bg-gradient-to-r from-primary/5 to-transparent skew-y-12 blur-3xl opacity-40" />
                </ParallaxSection>
            </div>

            <div className="container px-4">
                {/* Section Header */}
                <div className="max-w-2xl mx-auto text-center mb-16 space-y-4">
                    <h2 className="text-3xl md:text-5xl font-display font-bold">
                        Our Strengths and <span className="text-primary">Core Services</span>
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        Comprehensive digital solutions tailored to scale your business.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {services.map((service, index) => (
                        <ServiceCard
                            key={service.title}
                            {...service}
                            delay={index * 0.1}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
