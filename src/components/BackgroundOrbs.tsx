"use client";
import { motion } from "framer-motion";

export function BackgroundOrbs() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-pink-200 blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="absolute right-0 top-0 h-64 w-64 rounded-full bg-sky-200 blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="absolute bottom-10 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-purple-200 blur-3xl"
      />
    </div>
  );
}


