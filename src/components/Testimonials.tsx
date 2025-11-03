"use client";
import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "My child’s confidence soared and results followed.",
    name: "Parent of Y8 Student",
  },
  {
    quote: "Engaging lessons and clear progress each week.",
    name: "Parent of Y6 Student",
  },
  {
    quote: "Supportive tutors who really care about outcomes.",
    name: "Parent of GCSE Student",
  },
];

export function Testimonials() {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-50 to-purple-50 p-8">
      <div className="grid gap-6 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <motion.blockquote
            key={i}
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="rounded-2xl bg-white p-6 shadow-sm"
          >
            <p className="text-zinc-800">“{t.quote}”</p>
            <footer className="mt-3 text-sm text-zinc-500">— {t.name}</footer>
          </motion.blockquote>
        ))}
      </div>
    </div>
  );
}


