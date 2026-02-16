"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Check, TrendingUp, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { Project } from "@/lib/cms";
import { ParallaxSection } from "@/components/ui/ParallaxSection";

export function ProjectContent({ project }: { project: Project }) {
    if (!project) return null;

    return (
        <main className="min-h-screen bg-transparent relative overflow-hidden">
            {/* Background Decor Removed - using global LiveSpaceBackground */}

            <div className="container px-4 py-24 relative z-10">
                <Link
                    href="/#work"
                    className="inline-flex items-center text-muted-foreground hover:text-primary mb-8 transition-colors group"
                >
                    <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                    Back to Projects
                </Link>

                {/* Header */}
                <div className="mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="flex items-center gap-4 mb-4">
                            <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20">
                                {project.service}
                            </span>
                            <span className="text-muted-foreground text-sm">
                                Total ROI: <span className="text-green-400 font-bold">{project.roi}</span>
                            </span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
                            {project.title}
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                            {project.description || "Designed to revolutionize the user experience and drive tangible business growth through strategic digital transformation."}
                        </p>
                    </motion.div>
                </div>

                {/* Main Visual */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative w-full aspect-video rounded-3xl overflow-hidden border border-border/50 shadow-2xl mb-16"
                >
                    <ParallaxSection speed={-10} className="w-full h-full absolute inset-0">
                        {project.image && (
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover"
                                priority
                            />
                        )}
                    </ParallaxSection>

                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                </motion.div>

                {/* Project Details Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    <div className="md:col-span-2">
                        <h2 className="text-2xl font-bold mb-6">The Challenge & Solution</h2>
                        <div className="prose prose-invert prose-lg text-muted-foreground">
                            <p className="mb-6">
                                {project.client} approached us with a clear goal: to modernize their digital presence and improve user engagement metrics. The existing solution was outdated and failed to convert traffic effectively.
                            </p>
                            <p>
                                Our team implemented a comprehensive strategy focused on:
                            </p>
                            <ul className="list-none md:pl-0 space-y-3 mt-4">
                                {[
                                    "Streamlined User Journey",
                                    "Performance Optimization",
                                    "Visual Identity Refresh",
                                    "Conversion Rate Optimization"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                                            <Check className="w-3 h-3 text-primary" />
                                        </span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="bg-card border border-border rounded-2xl p-8 h-fit sticky top-24">
                        <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                            <TrendingUp className="w-5 h-5 text-primary" />
                            Key Results
                        </h3>
                        <div className="space-y-6">
                            <div>
                                <div className="text-sm text-muted-foreground mb-1">Impact</div>
                                <div className="text-2xl md:text-3xl font-bold text-green-400">{project.stats || project.roi}</div>
                            </div>
                            <div className="w-full h-px bg-border" />
                            <div>
                                <div className="text-sm text-muted-foreground mb-1">Client</div>
                                <div className="text-lg font-medium">{project.client}</div>
                            </div>
                            <div className="w-full h-px bg-border" />
                            <div>
                                <div className="text-sm text-muted-foreground mb-1">Service</div>
                                <div className="text-lg font-medium">{project.service}</div>
                            </div>
                        </div>

                        {project.url && (
                            <a
                                href={project.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full mt-8 mb-3 bg-secondary hover:bg-secondary/80 text-foreground py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
                            >
                                Visit Live Website <ExternalLink className="w-4 h-4" />
                            </a>
                        )}

                        <Link href="/#contact">
                            <button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 rounded-lg font-medium transition-colors">
                                Start a Project Like This
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
}
