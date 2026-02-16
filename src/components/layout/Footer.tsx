"use client";

import React from "react";
import Link from "next/link";
import { Rocket, Linkedin, Twitter, Github, Instagram } from "lucide-react";
import { Logo } from "@/components/ui/Logo";

export function Footer() {
    return (
        <footer className="bg-card border-t border-border pt-16 pb-8">
            <div className="container px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

                    {/* Brand Column */}
                    <div className="col-span-1 md:col-span-1 space-y-4">
                        <Link href="/" className="flex items-center gap-2 text-xl font-bold font-display">
                            <Logo />
                        </Link>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                            Premium digital agency delivering pixel-perfect web experiences for ambitious brands.
                        </p>
                        <div className="flex gap-4 pt-2">
                            <Link href="#" className="p-2 rounded-full bg-secondary hover:bg-primary/10 hover:text-primary transition-colors">
                                <Linkedin className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>

                    {/* Links Columns */}
                    <div>
                        <h4 className="font-bold mb-4">Services</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>
                                <Link href="/services/uiux" className="relative group hover:text-foreground transition-colors inline-block">
                                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-[#FF0000] opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300" />
                                    UI/UX Design
                                </Link>
                            </li>
                            <li>
                                <Link href="/services/webdev" className="relative group hover:text-foreground transition-colors inline-block">
                                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-[#FF0000] opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300" />
                                    Web Development
                                </Link>
                            </li>
                            <li>
                                <Link href="/services/marketing" className="relative group hover:text-foreground transition-colors inline-block">
                                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-[#FF0000] opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300" />
                                    Digital Marketing
                                </Link>
                            </li>
                            <li>
                                <Link href="/services/ecommerce" className="relative group hover:text-foreground transition-colors inline-block">
                                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-[#FF0000] opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300" />
                                    E-Commerce
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-4">Company</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>
                                <Link href="#about" className="relative group hover:text-foreground transition-colors inline-block">
                                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-[#FF0000] opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300" />
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="#work" className="relative group hover:text-foreground transition-colors inline-block">
                                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-[#FF0000] opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300" />
                                    Portfolio
                                </Link>
                            </li>
                            <li>
                                <Link href="#process" className="relative group hover:text-foreground transition-colors inline-block">
                                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-[#FF0000] opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300" />
                                    Our Process
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="relative group hover:text-foreground transition-colors inline-block">
                                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-[#FF0000] opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300" />
                                    Careers
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="font-bold mb-4">Stay Connected</h4>
                        <p className="text-xs text-muted-foreground mb-4">
                            Subscribe to our newsletter for the latest design trends and insights.
                        </p>
                        <form className="flex gap-2">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 px-3 py-2 rounded-md bg-secondary border border-border text-sm focus:border-primary outline-none"
                            />
                            <button className="px-3 py-2 bg-primary text-primary-foreground rounded-md text-sm font-medium hover:bg-primary/90 transition-colors">
                                Join
                            </button>
                        </form>
                    </div>
                </div>

                <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
                    <p>© 2026 Finch Global Agency. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href="#" className="hover:text-foreground">Privacy Policy</Link>
                        <Link href="#" className="hover:text-foreground">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
