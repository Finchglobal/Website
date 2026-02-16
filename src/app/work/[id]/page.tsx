import { projects } from "@/lib/cms";
import { ProjectContent } from "@/components/work/ProjectContent";
import Link from "next/link";
import { notFound } from "next/navigation";

// Next.js 15: params is a Promise
export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;

    // Ensure id is treated as a string for comparison, projects.id is number
    const project = projects.find((p) => p.id === parseInt(id));

    if (!project) {
        notFound();
    }

    return <ProjectContent project={project} />;
}

// Static Params Generation
export async function generateStaticParams() {
    return projects.map((project) => ({
        id: project.id.toString(),
    }));
}
