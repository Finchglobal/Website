"use client";

import React from "react";
import { ParallaxSection } from "@/components/ui/ParallaxSection";

export function About() {
    return (
        <section id="about" className="py-24 md:py-32 bg-transparent relative overflow-hidden flex items-center justify-center min-h-[50vh]">
            {/* Background Parallax */}
            <div className="absolute inset-0 -z-10">
                <ParallaxSection speed={-20} className="absolute inset-0 h-full w-full">
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary/30 rounded-full blur-[100px] opacity-20 transform translate-x-1/2 -translate-y-1/2" />
                </ParallaxSection>
            </div>

            <div className="container px-4">
                <ParallaxSection speed={10} className="w-full">
                    <div className="max-w-6xl mx-auto text-center space-y-10">
                        <p className="text-xl md:text-2xl text-muted-foreground font-medium">
                            A collaboration of diverse minds
                        </p>

                        <div className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-4 md:gap-x-6 text-3xl md:text-5xl lg:text-6xl font-display font-bold leading-tight text-foreground">
                            <span>Business Strategists</span>
                            <span className="w-0.5 h-8 md:w-1.5 md:h-1.5 bg-[#FF0000] rounded-none inline-block" />
                            <span>Digital Designers</span>
                            <span className="w-0.5 h-8 md:w-1.5 md:h-1.5 bg-[#FF0000] rounded-none inline-block" />
                            <span>UX Specialists</span>
                            <span className="w-0.5 h-8 md:w-1.5 md:h-1.5 bg-[#FF0000] rounded-none inline-block" />
                            <span>Industry Mentors</span>
                            <span className="w-0.5 h-8 md:w-1.5 md:h-1.5 bg-[#FF0000] rounded-none inline-block" />
                            <span>Software Engineers</span>
                        </div>
                    </div>
                </ParallaxSection>
            </div>
        </section>
    );
}
