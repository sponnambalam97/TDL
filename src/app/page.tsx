"use client";
import { motion } from "framer-motion";
import { BackgroundOrbs } from "@/components/BackgroundOrbs";
import { SectionWave } from "@/components/SectionWave";
import { FeatureCard } from "@/components/FeatureCard";
import { BookOpen, Rocket, GraduationCap, Users } from "lucide-react";
import { Testimonials } from "@/components/Testimonials";

export default function Home() {
  return (
    <main>
      <section className="relative overflow-hidden">
        <BackgroundOrbs />
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 pt-16 md:grid-cols-2 md:gap-16 md:pt-24">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-5"
          >
            <h1 className="text-4xl font-extrabold leading-tight md:text-5xl">
              Smarter tutoring for ages 6–18
            </h1>
            <p className="text-lg text-zinc-700">
              Personalised small-group learning, expert tutors, interactive content, and
              measurable progress—designed to help every learner shine.
            </p>
            <div className="flex gap-3">
              <a href="/services" className="btn-primary">
                Get Started
              </a>
              <a href="/faq" className="btn-secondary">
                How it works
              </a>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-4 text-sm text-zinc-700 md:grid-cols-4">
              <div className="card">10+ Years Experience</div>
              <div className="card">95% Pass Rate</div>
              <div className="card">Small Group Support</div>
              <div className="card">Expert Tutors</div>
            </div>
          </motion.div>
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="aspect-square w-full rounded-3xl bg-gradient-to-tr from-blue-300 via-purple-300 to-sky-300 shadow-soft"
          />
        </div>
      </section>
      <SectionWave />

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
        <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
          <FeatureCard title="Interactive Lessons" description="Engaging content and quizzes to reinforce learning." icon={<BookOpen size={18} />} />
          <FeatureCard title="Small Groups" description="Personalised attention in cohorts of 4–8 learners." icon={<Users size={18} />} />
          <FeatureCard title="Expert Tutors" description="Subject specialists with proven track records." icon={<GraduationCap size={18} />} />
          <FeatureCard title="Real Progress" description="Track mastery and celebrate milestones." icon={<Rocket size={18} />} />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-20">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-6 text-2xl font-bold"
        >
          What parents say
        </motion.h2>
        <Testimonials />
      </section>
    </main>
  );
}
