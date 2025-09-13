"use client";
import { motion } from "framer-motion";

export function HeroOrbs() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <motion.div
        initial={{ y: 10, opacity: 0.4 }}
        animate={{ y: [-6, 6, -6], opacity: 0.45 }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-24 -left-24 h-72 w-72 rounded-full blur-3xl"
        style={{ background: "radial-gradient(50% 50% at 50% 50%, rgba(37,99,235,0.30), transparent 60%)" }}
      />
      <motion.div
        initial={{ y: -8, opacity: 0.25 }}
        animate={{ y: [8, -8, 8], opacity: 0.3 }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-20 right-[-60px] h-80 w-80 rounded-full blur-3xl"
        style={{ background: "radial-gradient(50% 50% at 50% 50%, rgba(11,15,26,0.26), transparent 60%)" }}
      />
    </div>
  );
}