"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export function Nav() {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed left-0 right-0 top-0 z-50 backdrop-blur bg-white/75 border-b border-zinc-200"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="text-xl font-bold text-zinc-900">
          <span className="text-pink-500">●</span>
          <span className="text-purple-500">●</span>
          <span className="text-sky-500">●</span>
          <span className="ml-2">Three Dots Learning</span>
        </Link>
        <div className="flex items-center gap-6 text-sm">
          <Link href="/services" className="text-zinc-700 hover:text-zinc-900">
            Services
          </Link>
          <Link href="/faq" className="text-zinc-700 hover:text-zinc-900">
            FAQ
          </Link>
          <Link href="/contact" className="text-zinc-700 hover:text-zinc-900">
            Contact
          </Link>
          <Link href="/signin" className="btn-primary px-4 py-2">
            Log in
          </Link>
        </div>
      </div>
    </motion.nav>
  );
}


