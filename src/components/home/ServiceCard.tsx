"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Check, ArrowRight, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
    title: string;
    description?: string;
    features: string[];
    icon: LucideIcon;
    delay?: number;
    slug: string;
}

export function ServiceCard({ title, features, icon: Icon, delay = 0, slug }: ServiceCardProps) {
    return (
        <Link href={`/services/${slug}`} className="block h-full">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay }}
                className="group relative h-full bg-card border border-border hover:border-primary/50 transition-colors rounded-2xl p-8 overflow-hidden"
            >
                {/* Hover Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="relative z-10 flex flex-col h-full">
                    {/* Icon */}
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-6 h-6" />
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-display font-bold mb-6 group-hover:text-primary transition-colors">
                        {title}
                    </h3>

                    {/* Features List */}
                    <ul className="space-y-3 mb-8 flex-grow">
                        {features.map((feature, index) => (
                            <li key={index} className="flex items-start gap-3 text-muted-foreground text-sm">
                                <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                                <span>{feature}</span>
                            </li>
                        ))}
                    </ul>

                    {/* Learn More Link (Visual only) */}
                    <div className="flex items-center text-primary font-medium text-sm group-hover:translate-x-1 transition-transform">
                        Learn more <ArrowRight className="ml-2 w-4 h-4" />
                    </div>
                </div>
            </motion.div>
        </Link>
    );
}
