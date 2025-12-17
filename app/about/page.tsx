"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function AboutPage() {
    return (
        <main className="min-h-screen p-4 md:p-6 pt-32">
            <div className="mesh-bg border border-white/10 rounded-[40px] p-8 md:p-20 relative max-w-7xl mx-auto">
                <Link
                    href="/"
                    className="inline-flex items-center text-sm font-medium text-white/70 hover:text-white transition-colors mb-8"
                >
                    <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
                </Link>
                <div className="max-w-4xl mx-auto md:mx-0">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-6xl md:text-8xl font-bold tracking-tighter mb-12"
                    >
                        About.
                    </motion.h1>

                    <div className="grid grid-cols-1 gap-16 text-lg text-white/90 leading-relaxed">
                        {/* Bio */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <p className="text-xl md:text-2xl text-white font-medium mb-8">
                                Proactive Computer Science undergrad specializing in Data Science and Machine Learning.
                            </p>
                            <p className="mb-6 text-white/90">
                                I am Adithyan Ajish, currently pursuing my B.Tech in CSE at VIT Chennai. I am eager to apply strong analytical and technical skills to solve complex business problems and deliver data-driven solutions.
                            </p>
                            <p className="text-white/90">
                                My experience ranges from developing scalable web applications to engineering machine learning models for computer vision and NLP tasks.
                            </p>
                        </motion.div>

                        {/* Experience */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                        >
                            <h2 className="text-2xl text-white font-bold mb-8 border-b border-white/20 pb-4">Experience</h2>

                            <div className="space-y-12">
                                <div>
                                    <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-2">
                                        <h3 className="text-xl font-bold text-white">Intern</h3>
                                        <span className="text-sm font-mono text-white/60">July 2024 – Feb 2025</span>
                                    </div>
                                    <h4 className="text-lg text-white/80 mb-4">GBS Engineering Services, Siemens</h4>
                                    <ul className="list-disc list-outside ml-5 space-y-2 text-base text-white/90">
                                        <li>Improved user experience by designing an intuitive UI for the SkillX project, leading to a 30% increase in user engagement.</li>
                                        <li>Engineered an ML-based face tracking system using TensorFlow and MTCNN, achieving 95% accuracy.</li>
                                        <li>Developed dynamic, client-side web components for internal applications using JavaScript.</li>
                                    </ul>
                                </div>

                                <div>
                                    <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-2">
                                        <h3 className="text-xl font-bold text-white">Researcher</h3>
                                        <span className="text-sm font-mono text-white/60">Ongoing</span>
                                    </div>
                                    <h4 className="text-lg text-white/80 mb-4">VIT Chennai CCPS Research Department</h4>
                                    <ul className="list-disc list-outside ml-5 space-y-2 text-base text-white/90">
                                        <li>Developing a lightweight deep learning model for colonoscopy polyp detection.</li>
                                        <li>Utilizing a novel Wavelet-Enhanced Reverse Attention (WERA) module and custom YOLO architecture.</li>
                                    </ul>
                                </div>
                            </div>
                        </motion.div>

                        {/* Education */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            <h2 className="text-2xl text-white font-bold mb-8 border-b border-white/20 pb-4">Education</h2>
                            <div>
                                <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-2">
                                    <h3 className="text-xl font-bold text-white">B.Tech in Computer Science and Engineering</h3>
                                    <span className="text-sm font-mono text-white/60">Expected June 2027</span>
                                </div>
                                <p className="mb-2 text-white/90">Vellore Institute of Technology, Chennai</p>
                                <p className="text-sm text-white/80">Relevant Coursework: Machine Learning, Deep Learning, Computer Vision, DSA</p>
                            </div>
                        </motion.div>

                        {/* Connect */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                        >
                            <h3 className="text-white font-bold mb-4">Connect</h3>
                            <ul className="space-y-2 text-white/90">
                                <li>
                                    <a href="mailto:Adithyanajish@gmail.com" className="hover:text-white transition-colors">Adithyanajish@gmail.com</a>
                                </li>
                                <li>
                                    <a href="https://github.com/adithyan-ajish" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">github.com/adithyan-ajish</a>
                                </li>
                                <li>
                                    <a href="https://linkedin.com/in/adithyan-ajish" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">linkedin.com/in/adithyan-ajish</a>
                                </li>
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </div>
        </main>
    );
}

