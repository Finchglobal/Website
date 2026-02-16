import { MetadataRoute } from "next";
import { servicesData } from "@/lib/servicesData";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://finchglobal.agency";

    // Static pages
    const routes = [
        "",
        "/#about",
        "/#work",
        "/#services",
        "/#contact",
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 1,
    }));

    // Dynamic service pages
    const serviceRoutes = Object.keys(servicesData).map((slug) => ({
        url: `${baseUrl}/services/${slug}`,
        lastModified: new Date(),
        changeFrequency: "weekly" as const,
        priority: 0.8,
    }));

    return [...routes, ...serviceRoutes];
}
