"use client";

import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

interface ProjectHeaderProps {
    title: string;
    description: string;
    links: {
        demo?: string;
        github?: string;
    };
}

export function ProjectHeader({ title, description, links }: ProjectHeaderProps) {
    return (
        <section className="pt-12 pb-20 px-6 md:px-12">
            <Link
                href="/"
                className="inline-flex items-center text-sm font-medium text-black/70 hover:text-black transition-colors mb-8"
            >
                <ArrowLeft className="w-4 h-4 mr-2" /> Back to Projects
            </Link>
            <div className="max-w-4xl">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-5xl md:text-8xl font-extrabold tracking-tighter mb-8 text-black"
                >
                    {title}
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="text-xl md:text-2xl text-black/90 leading-relaxed max-w-2xl font-medium"
                >
                    {description}
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex gap-4 mt-8"
                >
                    {links.demo && (
                        <a
                            href={links.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold text-base hover:bg-slate-800 transition-all transform hover:scale-105"
                        >
                            Live Demo
                        </a>
                    )}
                    {links.github && (
                        <a
                            href={links.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-4 border-2 border-slate-900 text-slate-900 rounded-2xl font-bold text-base hover:bg-slate-900 hover:text-white transition-all transform hover:scale-105"
                        >
                            GitHub Code
                        </a>
                    )}
                </motion.div>
            </div>
        </section>
    );
}
