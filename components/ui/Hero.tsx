"use client";

import { motion } from "framer-motion";

export function Hero() {
    return (
        <div className="min-h-[70vh] flex flex-col justify-center px-6 md:px-12 py-20 relative overflow-hidden">
            {/* Abstract Background Element for Hero */}
            <div className="absolute -top-1/2 -right-1/2 w-[800px] h-[800px] bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-full blur-3xl opacity-50" />

            <div className="max-w-4xl relative z-10">
                <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-[0.9] mb-8">
                    <motion.span
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="block text-white"
                    >
                        Adithyan
                    </motion.span>
                    <motion.span
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                        className="block text-white"
                    >
                        Ajish.
                    </motion.span>
                </h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-lg md:text-xl text-white/80 max-w-lg"
                >
                    Specializing in Data Science and Machine Learning.
                </motion.p>
            </div>
        </div>
    );
}
