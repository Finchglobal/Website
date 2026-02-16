"use client";

import React from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { testimonials } from "@/lib/cms";

export function Testimonials() {
    return (
        <section className="py-24 md:py-32 bg-secondary/5 relative overflow-hidden">
            <div className="container px-4">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-3xl md:text-5xl font-display font-bold">
                        Client <span className="text-primary">Success Stories</span>
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Don't just take our word for it. Here's what our partners say.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-card border border-border hover:border-primary/50 transition-colors rounded-2xl p-8 md:p-10 relative group"
                        >
                            <Quote className="w-10 h-10 text-primary/20 absolute top-8 right-8" />

                            <blockquote className="text-xl md:text-2xl font-medium mb-8 leading-relaxed">
                                "{testimonial.quote}"
                            </blockquote>

                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center font-bold text-lg text-primary">
                                    {testimonial.author[0]}
                                </div>
                                <div>
                                    <div className="font-bold text-foreground">{testimonial.author}</div>
                                    <div className="text-sm text-primary">{testimonial.role}, {testimonial.company}</div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
