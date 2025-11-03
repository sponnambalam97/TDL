"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed left-0 right-0 top-0 z-50 border-b ${
        scrolled ? "bg-white/85 backdrop-blur border-zinc-200 shadow-sm" : "bg-transparent border-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="text-xl font-bold text-zinc-900">
          <span className="text-pink-500">●</span>
          <span className="text-purple-500">●</span>
          <span className="text-sky-500">●</span>
          <span className="ml-2">Three Dots Learning</span>
        </Link>
        <div className="flex items-center gap-6 text-sm">
          <Link href="/services" className={`hover:text-zinc-900 ${pathname === "/services" ? "text-zinc-900" : "text-zinc-700"}`}>
            Services
          </Link>
          <Link href="/faq" className={`hover:text-zinc-900 ${pathname === "/faq" ? "text-zinc-900" : "text-zinc-700"}`}>
            FAQ
          </Link>
          <Link href="/contact" className={`hover:text-zinc-900 ${pathname === "/contact" ? "text-zinc-900" : "text-zinc-700"}`}>
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


