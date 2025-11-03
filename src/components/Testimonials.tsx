"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

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
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % testimonials.length), 3500);
    return () => clearInterval(id);
  }, []);
  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-50 to-purple-50 p-8">
      <div className="relative h-36">
        {testimonials.map((t, i) => (
          <motion.blockquote
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={i === index ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="absolute left-0 right-0 rounded-2xl bg-white p-6 shadow-sm"
          >
            <p className="text-zinc-800">“{t.quote}”</p>
            <footer className="mt-3 text-sm text-zinc-500">— {t.name}</footer>
          </motion.blockquote>
        ))}
      </div>
      <div className="mt-4 flex justify-center gap-2">
        {testimonials.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to testimonial ${i + 1}`}
            onClick={() => setIndex(i)}
            className={`h-2 w-2 rounded-full ${i === index ? "bg-blue-600" : "bg-blue-200"}`}
          />
        ))}
      </div>
    </div>
  );
}


