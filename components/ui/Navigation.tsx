"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Magnetic } from "@/components/ui/Magnetic";

export function Navigation() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const buttonClass = `
        block px-5 py-2.5 font-bold tracking-tighter text-white
        transition-all duration-[900ms] ease-[cubic-bezier(0.25,0.1,0.25,1)]
        ${isScrolled
            ? 'backdrop-blur-2xl bg-white/[0.08] border border-white/[0.15] rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.12)] scale-100'
            : 'hover:text-white/70 scale-95'
        }
    `;

    return (
        <nav className="fixed top-8 left-0 right-0 z-50 flex justify-between items-center px-6 md:px-12 pointer-events-none">
            <Link href="/" className={`pointer-events-auto transition-opacity duration-500 ${isScrolled ? 'opacity-0' : 'opacity-100'}`}>
                <span className="text-xl md:text-2xl font-bold tracking-tighter text-white">
                    adithyan ajish.
                </span>
            </Link>
            <div className="flex gap-4 text-sm font-medium pointer-events-auto">
                <Magnetic>
                    <Link href="/about" className={buttonClass}>
                        About
                    </Link>
                </Magnetic>
                <Magnetic>
                    <Link href="mailto:Adithyanajish@gmail.com" className={buttonClass}>
                        Contact
                    </Link>
                </Magnetic>
            </div>
        </nav>
    );
}
