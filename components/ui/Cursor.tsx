"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function Cursor() {
    const [isHovered, setIsHovered] = useState(false);
    const mouseX = useMotionValue(-100);
    const mouseY = useMotionValue(-100);

    const springConfig = { damping: 25, stiffness: 700 };
    const cursorX = useSpring(mouseX, springConfig);
    const cursorY = useSpring(mouseY, springConfig);

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        const handleHoverStart = () => setIsHovered(true);
        const handleHoverEnd = () => setIsHovered(false);

        window.addEventListener("mousemove", moveCursor);

        // Add event listeners for clickable elements
        const clickables = document.querySelectorAll("a, button, [role='button']");
        clickables.forEach((el) => {
            el.addEventListener("mouseenter", handleHoverStart);
            el.addEventListener("mouseleave", handleHoverEnd);
        });

        const observer = new MutationObserver(() => {
            const newClickables = document.querySelectorAll("a, button, [role='button']");
            newClickables.forEach((el) => {
                el.removeEventListener("mouseenter", handleHoverStart);
                el.removeEventListener("mouseleave", handleHoverEnd);
                el.addEventListener("mouseenter", handleHoverStart);
                el.addEventListener("mouseleave", handleHoverEnd);
            });
        });

        observer.observe(document.body, { childList: true, subtree: true });


        return () => {
            window.removeEventListener("mousemove", moveCursor);
            clickables.forEach((el) => {
                el.removeEventListener("mouseenter", handleHoverStart);
                el.removeEventListener("mouseleave", handleHoverEnd);
            });
            observer.disconnect();
        };
    }, [mouseX, mouseY]);

    return (
        <motion.div
            className="hidden md:block fixed top-0 left-0 w-4 h-4 rounded-full bg-black dark:bg-white mix-blend-difference pointer-events-none z-[100]"
            style={{
                translateX: cursorX,
                translateY: cursorY,
                x: -8, // center the cursor
                y: -8,
            }}
            animate={{
                scale: isHovered ? 2.5 : 1,
            }}
            transition={{ duration: 0.2 }}
        />
    );
}
