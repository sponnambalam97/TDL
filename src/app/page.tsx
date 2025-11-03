"use client";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main>
      <section className="relative overflow-hidden bg-gradient-to-b from-pink-50 via-white to-white">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 pt-16 md:grid-cols-2 md:gap-16 md:pt-24">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-5"
          >
            <h1 className="text-4xl font-extrabold leading-tight md:text-5xl">
              Help Your Child Learn, Grow & Shine
            </h1>
            <p className="text-lg text-zinc-700">
              Personalised tutoring for ages 6–18. Small groups, expert tutors, and
              a modern online classroom designed for success.
            </p>
            <div className="flex gap-3">
              <a href="/services" className="rounded-full bg-zinc-900 px-5 py-3 text-white hover:bg-zinc-800">
                Get Started
              </a>
              <a href="/faq" className="rounded-full border border-zinc-300 px-5 py-3 hover:bg-zinc-50">
                How it works
              </a>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-4 text-sm text-zinc-700 md:grid-cols-4">
              <div className="rounded-xl border border-zinc-200 p-4">10+ Years Experience</div>
              <div className="rounded-xl border border-zinc-200 p-4">95% Pass Rate</div>
              <div className="rounded-xl border border-zinc-200 p-4">Small Group Support</div>
              <div className="rounded-xl border border-zinc-200 p-4">Expert Tutors</div>
            </div>
          </motion.div>
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="aspect-square w-full rounded-3xl bg-gradient-to-tr from-fuchsia-200 via-indigo-200 to-sky-200"
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-8 text-2xl font-bold"
        >
          What We Offer
        </motion.h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {[
            { title: "11 Plus Preparation", items: ["Verbal", "Non-Verbal", "Maths", "English"] },
            { title: "Core Subjects", items: ["English", "Mathematics", "Science"] },
            { title: "Advanced", items: ["Economics", "Business", "Accounting"] },
          ].map((card, idx) => (
            <motion.div
              key={card.title}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="rounded-2xl border border-zinc-200 p-6"
            >
              <h3 className="mb-2 text-lg font-semibold">{card.title}</h3>
              <ul className="list-inside list-disc text-zinc-700">
                {card.items.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
