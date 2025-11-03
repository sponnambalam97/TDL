"use client";
import { PropsWithChildren, useRef } from "react";

export function TiltCard({ children }: PropsWithChildren) {
  const ref = useRef<HTMLDivElement>(null);

  const handle = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const midX = rect.width / 2;
    const midY = rect.height / 2;
    const rotateY = ((x - midX) / midX) * 6; // max 6deg
    const rotateX = -((y - midY) / midY) * 6;
    el.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const reset = () => {
    const el = ref.current;
    if (el) el.style.transform = "perspective(800px) rotateX(0deg) rotateY(0deg)";
  };

  return (
    <div
      ref={ref}
      onMouseMove={handle}
      onMouseLeave={reset}
      className="transition-transform duration-150 will-change-transform"
    >
      {children}
    </div>
  );
}


