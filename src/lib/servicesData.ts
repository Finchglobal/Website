import { PenTool, Code2, BarChart3, ShoppingBag, LineChart, type LucideIcon } from "lucide-react";

export interface ServiceData {
    slug: string;
    title: string;
    subtitle: string;
    description: string;
    icon: LucideIcon;
    features: string[];
    benefits: { title: string; desc: string }[];
    cta: string;
}

export const servicesData: Record<string, ServiceData> = {
    "uiux": {
        slug: "uiux",
        title: "UI/UX Design",
        subtitle: "Design that drives conversion.",
        description: "We craft intuitive, accessible, and visually stunning interfaces that guide users effortlessly toward your business goals. Our design process is rooted in data and user psychology.",
        icon: PenTool,
        features: [
            "User Research & Personas",
            "Wireframing & Prototyping",
            "High-Fidelity UI Design",
            "Design Systems & Style Guides",
            "Interactive Prototypes (Figma)",
            "Usability Testing"
        ],
        benefits: [
            { title: "Increase Conversion", desc: "Optimized user flows reduce friction and boost sales." },
            { title: "Brand Consistency", desc: "A unified design language across all platforms." },
            { title: "User Satisfaction", desc: "Delightful experiences that keep users coming back." }
        ],
        cta: "Start Your Design Project"
    },
    "webdev": {
        slug: "webdev",
        title: "Web Development",
        subtitle: "Blazing fast, scalable code.",
        description: "We build robust, high-performance websites and web applications using the latest technologies. Our code is clean, SEO-friendly, and built to scale with your business.",
        icon: Code2,
        features: [
            "Next.js & React Development",
            "Headless CMS Integration",
            "API Development & Integration",
            "Performance Optimization",
            "PWA Implementation",
            "Accessibility Compliance (WCAG)"
        ],
        benefits: [
            { title: "Lightning Fast", desc: "Core Web Vitals optimized for top Google rankings." },
            { title: "Scalable Architecture", desc: "Built to handle growth without technical debt." },
            { title: "Secure & Reliable", desc: "Industry-standard security practices implemented." }
        ],
        cta: "Build Your Web App"
    },
    "marketing": {
        slug: "marketing",
        title: "Digital Marketing",
        subtitle: "Strategies that amplify reach.",
        description: "Data-driven marketing campaigns that put your brand in front of the right audience. We use advanced analytics to optimize every dollar of your ad spend.",
        icon: BarChart3,
        features: [
            "SEO & Content Strategy",
            "PPC Campaign Management",
            "Social Media Marketing",
            "Email Automation workflows",
            "Conversion Rate Optimization",
            "Analytics & Reporting"
        ],
        benefits: [
            { title: "Higher ROI", desc: "Targeted campaigns that maximize return on ad spend." },
            { title: "Brand Authority", desc: "Establish your brand as a leader in your industry." },
            { title: "Measurable Results", desc: "Transparent reporting on all key performance metrics." }
        ],
        cta: "Grow Your Traffic"
    },
    "ecommerce": {
        slug: "ecommerce",
        title: "E-Commerce",
        subtitle: "Storefronts that sell.",
        description: "End-to-end e-commerce solutions designed to maximize average order value and lifetime customer value. Whether Shopify or custom builds, we handle it all.",
        icon: ShoppingBag,
        features: [
            "Custom Shopify/WooCommerce",
            "Payment Gateway Integration",
            "Inventory Management",
            "Cart Recovery Systems",
            "Product Page Optimization",
            "Subscription Models"
        ],
        benefits: [
            { title: "Sales Growth", desc: "Optimized funnels to turn visitors into buyers." },
            { title: "Seamless Operations", desc: "Automated workflows for shipping and inventory." },
            { title: "Global Reach", desc: "Multi-currency and multi-language support." }
        ],
        cta: "Launch Your Store"
    },
    "strategy": {
        slug: "strategy",
        title: "Strategy",
        subtitle: "Roadmaps for digital maturity.",
        description: "We partner with you to define your digital vision and create a step-by-step roadmap to achieve it. Our strategic guidance ensures you stay ahead of the competition.",
        icon: LineChart,
        features: [
            "Digital Transformation Audits",
            "Competitor Analysis",
            "Technology Stack Selection",
            "Product Market Fit Analysis",
            "Growth Hacking Strategies",
            "ROI Forecasting"
        ],
        benefits: [
            { title: "Clarity & Focus", desc: "A clear path forward for your digital initiatives." },
            { title: "Risk Mitigation", desc: "Avoid costly mistakes with expert guidance." },
            { title: "Sustainable Growth", desc: "Long-term strategies for enduring success." }
        ],
        cta: "Refine Your Strategy"
    }
};
