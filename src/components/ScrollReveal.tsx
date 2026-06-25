"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
}

export default function ScrollReveal({ 
  children, 
  delay = 0, 
  duration = 0.5,
  direction = "up" 
}: ScrollRevealProps) {
  
  const offset = 15; // Subtle offset
  const directions = {
    up: { y: offset, x: 0 },
    down: { y: -offset, x: 0 },
    left: { y: 0, x: offset },
    right: { y: 0, x: -offset },
    none: { y: 0, x: 0 },
  };

  return (
    <motion.div
      initial={{ opacity: 0, ...directions[direction] }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      {children}
    </motion.div>
  );
}
