import { PenTool, Code2, BarChart3, ShoppingBag, LineChart, type LucideIcon } from "lucide-react";

// --- Types ---
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

export interface Testimonial {
    id: number;
    quote: string;
    author: string;
    role: string;
    company: string;
}

export interface TeamMember {
    name: string;
    role: string;
    image: string;
    skills: Record<string, number>;
}

// --- Data ---

export const projects: Project[] = [
    {
        id: 1,
        title: "SIR Giving",
        service: "Non-Profit Platform",
        client: "SIR Giving",
        roi: "1.2M+ Nonprofits",
        image: "/projects/sirgiving-hero.png",
        description: "Zero-fee donation platform matching 1.2M+ nonprofits. Every donation amplified via SIR rewards program.",
        tags: ["Social Impact", "Fintech", "Platform"],
        stats: "1.2M+ Nonprofits | $250K Matching",
        url: "https://sirgiving.org"
    },
    {
        id: 2,
        title: "Donor Money",
        service: "Social Rewards Platform",
        client: "Donor Money",
        roi: "80% Rewards",
        image: "/projects/donormoney-hero.png",
        description: "Fee-free giving with DM rewards currency. Nonprofits get 100% + donors earn redeemable social impact tokens.",
        tags: ["Rewards", "Giving", "Blockchain"],
        stats: "80% DM Rewards | Zero Fees",
        url: "https://donor.money"
    },
    {
        id: 3,
        title: "Invest In Earth Day",
        service: "Environmental Campaign",
        client: "Earth Day",
        roi: "Global Campaign",
        image: "/projects/investinearthday-hero.png",
        description: "Global Earth Day platform driving climate action. #InvestInOurPlanet campaign platform.",
        tags: ["Climate", "Campaign", "Sustainability"],
        stats: "Earth Day 2023 Official Platform",
        url: "https://investinearthday.org"
    },
    {
        id: 4,
        title: "IE Money",
        service: "Impact Finance",
        client: "IE Money",
        roi: "Impact Investing",
        image: "/projects/iemoney-hero.png",
        description: "Sustainable investment platform connecting capital to climate solutions.",
        tags: ["ESG", "Finance", "Sustainability"],
        stats: "Sustainable Investment Portfolio",
        url: "https://ie.money"
    }
];

export const testimonials: Testimonial[] = [
    {
        id: 1,
        quote: "Finch Global transformed our digital presence. Our conversion rates have doubled since the relaunch.",
        author: "Sarah Jenkins",
        role: "CMO",
        company: "TechFlow",
    },
    {
        id: 2,
        quote: "The 10-Agent Squad concept isn't just marketing; it's real. The depth of expertise is unmatched.",
        author: "Michael Chen",
        role: "Founder",
        company: "PaySwift",
    },
    {
        id: 3,
        quote: "They delivered a complex e-commerce solution ahead of schedule and under budget. Highly recommended.",
        author: "David Ross",
        role: "CTO",
        company: "ShopGlobal",
    },
    {
        id: 4,
        quote: "Exceptional UI/UX design that truly understands the user journey. Our app reviews have never been better.",
        author: "Elena Rodriguez",
        role: "Product Owner",
        company: "Wanderlust",
    },
];

export const team: TeamMember[] = [
    {
        name: "Alex Finch",
        role: "Founder & Strategy",
        image: "/team/alex.png",
        skills: { "Strategy": 98, "Leadership": 100 },
    },
    {
        name: "Sarah Code",
        role: "Lead Developer",
        image: "/team/sarah.png",
        skills: { "Digital Strategy": 99, "System Arch.": 95 },
    },
    {
        name: "Mike Design",
        role: "Head of Design",
        image: "/team/mike.png",
        skills: { "Experience Design": 98, "Prototyping": 100 },
    },
    {
        name: "Emily Growth",
        role: "Marketing Director",
        image: "/team-4.jpg",
        skills: { "SEO": 96, "Analytics": 98 },
    },
    {
        name: "David Ops",
        role: "Operations Manager",
        image: "/team-5.jpg",
        skills: { "Process": 97, "Agile": 95 },
    },
    {
        name: "Jessica Copy",
        role: "Content Strategist",
        image: "/team-6.jpg",
        skills: { "Copywriting": 99, "Storytelling": 96 },
    },
];
