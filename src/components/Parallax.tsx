"use client";
import { PropsWithChildren, useEffect, useState } from "react";

export function Parallax({ children, speed = 0.2 }: PropsWithChildren<{ speed?: number }>) {
  const [y, setY] = useState(0);
  useEffect(() => {
    const onScroll = () => setY(window.scrollY * speed);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [speed]);
  return (
    <div style={{ transform: `translate3d(0, ${y}px, 0)` }} className="will-change-transform">
      {children}
    </div>
  );
}


