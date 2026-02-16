"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/ui/Logo";

const navLinks = [
    { name: "Services", href: "/#services" },
    { name: "Work", href: "/#work" },
    { name: "Process", href: "/#process" },
    { name: "About", href: "/#about" },
];

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled
                    ? "bg-card border-b border-border py-4"
                    : "bg-transparent py-6"
            )}
        >
            <div className="container flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group">
                    <Logo />
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8">
                    <div className="flex items-center gap-6">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="relative group text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                            >
                                <span className="absolute -top-3 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-[#FF0000] opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300" />
                                {link.name}
                            </Link>
                        ))}
                    </div>
                    <Link href="/#contact">
                        <Button className="group">
                            Start Project
                            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-foreground"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "100vh" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="md:hidden absolute top-full left-0 right-0 bg-background border-t border-border"
                    >
                        <div className="flex flex-col p-6 gap-6 h-full">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-2xl font-display font-bold text-foreground hover:text-primary transition-colors"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="mt-auto pb-24">
                                <Link href="/#contact" onClick={() => setIsMobileMenuOpen(false)}>
                                    <Button className="w-full text-lg py-6" size="lg">
                                        Start Project <ArrowRight className="ml-2" />
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
