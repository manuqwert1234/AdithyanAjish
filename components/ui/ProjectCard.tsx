import Link from "next/link";
import { Project } from "@/data/projects";
import { ArrowRight } from "lucide-react";

export function ProjectCard({ project }: { project: Project }) {
    return (
        <Link
            href={`/projects/${project.slug}`}
            className="group block w-full px-6 py-12 transition-all duration-500 hover:bg-slate-900/20 hover:px-8 hover:py-16 rounded-3xl"
        >
            <div className="flex flex-col md:flex-row md:items-baseline gap-6 md:gap-12">
                <div className="w-full md:w-1/3">
                    <h3 className="text-3xl md:text-5xl font-extrabold tracking-tighter transition-transform duration-300 text-slate-900 dark:text-white">
                        {project.title}
                    </h3>
                    <p className="mt-4 text-slate-800 font-mono text-sm tracking-tight">{project.techStack.slice(0, 3).join(" / ")}</p>
                </div>
                <div className="w-full md:w-2/3 flex justify-between items-center gap-4">
                    <p className="text-xl md:text-2xl text-slate-900 dark:text-zinc-200 leading-relaxed font-medium">
                        {project.shortDescription}
                    </p>
                    <ArrowRight className="w-8 h-8 flex-shrink-0 text-slate-900 transform -translate-x-4 opacity-0 transition-all duration-500 ease-out group-hover:translate-x-0 group-hover:opacity-100" />
                </div>
            </div>
        </Link>
    );
}
