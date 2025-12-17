import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import { ProjectHeader } from "@/components/ui/ProjectHeader";
import { FeatureList } from "@/components/ui/FeatureList";

export function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

export default async function ProjectPage(props: { params: Promise<{ slug: string }> }) {
    const params = await props.params;
    const project = projects.find((p) => p.slug === params.slug);

    if (!project) {
        notFound();
    }

    return (
        <main className="min-h-screen pt-24">
            <ProjectHeader
                title={project.title}
                description={project.description}
                links={project.links}
            />

            {/* Tech Stack */}
            <section className="px-6 md:px-12 mb-20">
                <div className="border-t border-zinc-200 dark:border-zinc-800 py-12">
                    <div className="flex flex-col md:flex-row md:items-center gap-8">
                        <h3 className="text-sm font-mono tracking-widest text-black uppercase font-bold md:w-1/4">
                            Tech Stack
                        </h3>
                        <div className="flex-1 flex flex-wrap gap-3">
                            {project.techStack.map((tech) => (
                                <span
                                    key={tech}
                                    className="px-5 py-2.5 bg-slate-900 text-white rounded-xl text-sm font-mono font-medium tracking-tight"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Features */}
            <section className="px-6 md:px-12 mb-20">
                <div className="border-t border-zinc-200 dark:border-zinc-800 py-12">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <h3 className="text-sm font-mono tracking-widest text-black uppercase font-bold">
                            Features
                        </h3>
                        <div className="md:col-span-3">
                            <FeatureList features={project.features} />
                        </div>
                    </div>
                </div>
            </section>

            {/* Getting Started */}
            {project.gettingStarted && (
                <section className="px-6 md:px-12 mb-20">
                    <div className="border-t border-zinc-200 dark:border-zinc-800 py-12">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                            <h3 className="text-sm font-mono tracking-widest text-black uppercase font-bold">
                                {project.gettingStarted.title}
                            </h3>
                            <div className="md:col-span-3 space-y-12">
                                {project.gettingStarted.steps.map((step) => (
                                    <div key={step.step} className="group">
                                        <div className="flex items-baseline gap-4 mb-4">
                                            <span className="flex-none flex items-center justify-center w-8 h-8 rounded-full border border-zinc-200 dark:border-zinc-700 text-sm font-medium">
                                                {step.step}
                                            </span>
                                            <h4 className="text-xl font-semibold text-black">{step.title}</h4>
                                        </div>
                                        {step.description && (
                                            <p className="text-black/80 mb-4 pl-12">
                                                {step.description}
                                            </p>
                                        )}
                                        {step.command && (
                                            <div className="pl-12">
                                                <pre className="bg-zinc-950 text-zinc-50 p-6 rounded-xl overflow-x-auto text-sm font-mono leading-relaxed">
                                                    {step.command}
                                                </pre>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            )}
        </main>
    );
}
