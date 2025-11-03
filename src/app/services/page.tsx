"use client";
import { motion } from "framer-motion";

export default function ServicesPage() {
  const services = [
    { title: "KS1 & KS2", desc: "Foundations in English and Maths for early years." },
    { title: "KS3", desc: "Build confidence across core subjects in lower secondary." },
    { title: "GCSE", desc: "Targeted support to achieve top grades in core subjects." },
    { title: "A Levels", desc: "Expert tutoring for advanced subjects and exam prep." },
    { title: "11+ Prep", desc: "Verbal, Non-Verbal, Maths and English for grammar entry." },
  ];

  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="mb-6 text-3xl font-bold">Services</h1>
      <p className="mb-8 max-w-2xl text-zinc-700">
        Personalised tutoring across age groups 6–18. Small group sizes, engaging lessons, and
        progress tracking designed to help every learner shine.
      </p>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ y: 16, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: i * 0.05 }}
            className="card"
          >
            <h3 className="text-lg font-semibold">{s.title}</h3>
            <p className="mt-2 text-zinc-700">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </main>
  );
}


