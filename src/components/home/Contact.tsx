"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

import { ParallaxSection } from "@/components/ui/ParallaxSection";

export function Contact() {
    // ----------------------------------------------------------------------
    // STEP 1: Get your free Access Key from https://web3forms.com/
    // STEP 2: Use your PRIMARY email (hello@philanthroforge.com) to get the key 
    //         since the alias is blocking emails.
    // STEP 3: Paste the key below.
    // ----------------------------------------------------------------------
    const ACCESS_KEY = "YOUR_ACCESS_KEY_HERE";

    const [formState, setFormState] = useState<"idle" | "sending" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setFormState("sending");

        const formData = new FormData(e.target as HTMLFormElement);
        const data = Object.fromEntries(formData);

        // Add the access key to the data
        const payload = {
            ...data,
            access_key: ACCESS_KEY,
        };

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(payload)
            });

            const result = await response.json();

            if (result.success) {
                setFormState("success");
            } else {
                console.error("Form submission failed:", result);
                setFormState("error");
                setTimeout(() => setFormState("idle"), 3000);
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            setFormState("error");
            setTimeout(() => setFormState("idle"), 3000);
        }
    };

    return (
        <section id="contact" className="py-24 md:py-32 bg-secondary/20 relative overflow-hidden">
            {/* Background Parallax */}
            <div className="absolute inset-0 -z-10 pointer-events-none">
                <ParallaxSection speed={-25} className="absolute inset-0 h-full w-full">
                    <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[80px] opacity-30" />
                    <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-[80px] opacity-30" />
                </ParallaxSection>
            </div>

            <div className="container px-4 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Info Side */}
                    <div className="space-y-8">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-4"
                        >
                            <h2 className="text-3xl md:text-5xl font-display font-bold">
                                Ready to <span className="text-primary">Scale?</span>
                            </h2>
                            <p className="text-muted-foreground text-lg max-w-md">
                                Let's discuss how the Finch Squad can accelerate your digital growth.
                                Book a free 30-minute strategy call.
                            </p>
                        </motion.div>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center shrink-0">
                                    <span className="text-xl">📅</span>
                                </div>
                                <div>
                                    <h4 className="font-bold mb-1">Book a Consultation</h4>
                                    <a
                                        href="https://calendar.app.google/vvSWoqkeFPaydRU38"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:bg-primary/90 transition-colors"
                                    >
                                        Book Free 30-Min Call
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center shrink-0">
                                    <span className="text-xl">📧</span>
                                </div>
                                <div>
                                    <h4 className="font-bold">Email Us</h4>
                                    <p className="text-muted-foreground">hello@finchglobal.agency</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-card border border-border rounded-2xl p-8 md:p-10 shadow-lg relative overflow-hidden"
                    >
                        {formState === "success" ? (
                            <div className="absolute inset-0 flex flex-col items-center justify-center bg-card z-20 text-center p-8 animate-in fade-in duration-300">
                                <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center text-green-500 mb-4">
                                    <CheckCircle2 className="w-8 h-8" />
                                </div>
                                <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                                <p className="text-muted-foreground">We'll get back to you within 24 hours.</p>
                                <Button
                                    variant="outline"
                                    className="mt-6"
                                    onClick={() => setFormState("idle")}
                                >
                                    Send Another
                                </Button>
                            </div>
                        ) : null}

                        <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                            {/* HoneyPot for Spam Prevention (Web3Forms uses 'botcheck' usually but _honey works too if configured, sticking to standard fields) */}
                            <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />
                            {/* Custom Subject */}
                            <input type="hidden" name="subject" value="New Enquiry from Finch Global Website" />
                            <input type="hidden" name="from_name" value="Finch Global Website" />

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium">Name</label>
                                    <input
                                        id="name" name="name" required
                                        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium">Email</label>
                                    <input
                                        id="email" name="email" type="email" required
                                        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                                        placeholder="john@company.com"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="service" className="text-sm font-medium">Service Interest</label>
                                <select
                                    id="service" name="service"
                                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all appearance-none"
                                >
                                    <option>UI/UX Design</option>
                                    <option>Web Development</option>
                                    <option>Digital Marketing</option>
                                    <option>E-Commerce</option>
                                    <option>Strategy</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium">Message</label>
                                <textarea
                                    id="message" name="message" required rows={4}
                                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
                                    placeholder="Tell us about your project..."
                                />
                            </div>

                            <Button
                                type="submit"
                                size="lg"
                                className="w-full group"
                                disabled={formState === "sending"}
                            >
                                {formState === "sending" ? "Sending..." : (
                                    <>Send Message <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" /></>
                                )}
                            </Button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
