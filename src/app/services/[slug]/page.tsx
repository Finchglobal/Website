import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CheckCircle2, ArrowRight } from "lucide-react";
import { servicesData } from "@/lib/servicesData";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/layout/Navbar";

// Generate static params for all services
export function generateStaticParams() {
    return Object.keys(servicesData).map((slug) => ({
        slug,
    }));
}

export default function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
    // Await params in Next.js 15
    const { slug } = React.use(params);
    const service = servicesData[slug];

    if (!service) {
        notFound();
    }

    const Icon = service.icon;

    return (
        <main className="min-h-screen bg-background selection:bg-primary/20">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
                <div className="absolute inset-0 -z-10 bg-[url('/grid.svg')] bg-center opacity-20 [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
                <div className="container px-4">
                    <Link
                        href="/#services"
                        className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-8 group"
                    >
                        <ArrowLeft className="mr-2 w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        Back to Services
                    </Link>

                    <div className="max-w-4xl">
                        <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-8">
                            <Icon className="w-8 h-8" />
                        </div>
                        <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
                            {service.title}
                        </h1>
                        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed">
                            {service.subtitle}
                        </p>
                    </div>
                </div>
            </section>

            {/* Description & Features */}
            <section className="py-20 bg-secondary/20">
                <div className="container px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                        <div className="space-y-8">
                            <h2 className="text-3xl font-display font-bold">Overview</h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                {service.description}
                            </p>

                            <div className="pt-8">
                                <Button size="lg" className="h-12 px-8 text-base">
                                    {service.cta} <ArrowRight className="ml-2 w-4 h-4" />
                                </Button>
                            </div>
                        </div>

                        <div className="bg-card border border-border rounded-2xl p-8 space-y-8">
                            <div>
                                <h3 className="text-xl font-display font-bold mb-4">What's Included</h3>
                                <ul className="grid grid-cols-1 gap-3">
                                    {service.features.map((feature) => (
                                        <li key={feature} className="flex items-start gap-3 text-muted-foreground">
                                            <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section className="py-20">
                <div className="container px-4">
                    <h2 className="text-3xl font-display font-bold mb-12 text-center">Why Choose Us</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {service.benefits.map((benefit) => (
                            <div key={benefit.title} className="bg-card/50 p-6 rounded-xl border border-border">
                                <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
                                <p className="text-muted-foreground">{benefit.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
