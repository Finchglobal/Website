"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import Link from "next/link";

export interface Project {
    id: number;
    title: string;
    service: string;
    client: string;
    roi: string;
    image?: string;
    description?: string;
    tags?: string[];
    stats?: string;
    url?: string;
}

interface PortfolioCardProps {
    project: Project;
}

export function PortfolioCard({ project }: PortfolioCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
            className="group relative bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-colors h-full"
        >
            <div className="flex flex-col h-full">
                {/* Image Section */}
                <div className="relative aspect-video bg-muted overflow-hidden">
                    <Link href={`/work/${project.id}`} className="absolute inset-0 z-0">
                        {project.image ? (
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110 group-hover:-translate-y-2"
                            />
                        ) : (
                            <div className="absolute inset-0 bg-gradient-to-br from-secondary to-background flex items-center justify-center text-muted-foreground/30 font-display font-bold text-4xl group-hover:scale-105 transition-transform duration-500">
                                {project.client.substring(0, 2).toUpperCase()}
                            </div>
                        )}
                    </Link>

                    {/* Overlay Actions */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-3 z-10 pointer-events-none group-hover:pointer-events-auto">
                        <Link
                            href={`/work/${project.id}`}
                            aria-label={`View Case Study for ${project.title}`}
                            className="bg-background/90 text-foreground px-6 py-2 rounded-full font-medium text-sm flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 hover:bg-background"
                        >
                            Case Study <ArrowUpRight className="w-4 h-4" />
                        </Link>
                        {project.url && (
                            <a
                                href={project.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="bg-primary text-primary-foreground px-6 py-2 rounded-full font-medium text-sm flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75 hover:bg-primary/90"
                            >
                                View Live <ExternalLink className="w-4 h-4" />
                            </a>
                        )}
                    </div>
                </div>

                {/* Content Section */}
                <div className="p-6 flex-grow flex flex-col">
                    <Link href={`/work/${project.id}`} className="block group-hover:text-primary transition-colors">
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <span className="text-xs font-medium text-primary uppercase tracking-wider mb-1 block">
                                    {project.service}
                                </span>
                                <h3 className="text-xl font-display font-bold mb-2">{project.title}</h3>
                                {project.description && (
                                    <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                                        {project.description}
                                    </p>
                                )}
                            </div>
                        </div>
                    </Link>

                    <div className="mt-auto space-y-4">
                        <div className="flex flex-wrap gap-2">
                            {project.tags?.map(tag => (
                                <span key={tag} className="text-[10px] bg-secondary px-2 py-1 rounded-full text-muted-foreground">
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <div className="flex justify-between items-center pt-4 border-t border-border/50">
                            <span className="text-sm text-muted-foreground">Impact</span>
                            <span className="text-sm font-bold text-green-400">{project.stats || project.roi}</span>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
