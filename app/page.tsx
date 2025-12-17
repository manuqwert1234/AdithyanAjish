import { Hero } from "@/components/ui/Hero";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { projects } from "@/data/projects";

export default function Home() {
  return (
    <main className="min-h-screen md:p-6 md:space-y-4">
      <section className="mesh-bg border border-white/10 rounded-[40px] overflow-hidden relative">
        <Hero />
      </section>

      <section className="mesh-bg border border-white/10 rounded-[40px] p-8 md:p-12 relative">
        <div className="mb-16">
          <h2 className="text-sm font-mono tracking-widest text-slate-800 uppercase mb-8 border-b border-black/10 pb-4">
            Selected Works
          </h2>
        </div>
        <div className="space-y-4">
          {projects.map((project) => (
            <div key={project.slug} className="border-b border-black/5 last:border-0 pb-12 last:pb-0 mb-12 last:mb-0">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </section>

      <footer className="mesh-bg border border-white/10 rounded-[40px] py-12 text-center text-zinc-400 text-sm relative">
        <p>&copy; {new Date().getFullYear()} Adithyan Ajish.</p>
      </footer>
    </main>
  );
}
