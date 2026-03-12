"use client";

import { useEffect, useState } from "react";

export function SpotlightCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    setPrefersReducedMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) return;
    function handleMove(e: MouseEvent) {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    }

    function handleLeave() {
      setIsVisible(false);
    }

    window.addEventListener("mousemove", handleMove);
    document.documentElement.addEventListener("mouseleave", handleLeave);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      document.documentElement.removeEventListener("mouseleave", handleLeave);
    };
  }, [prefersReducedMotion]);

  if (prefersReducedMotion) return null;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-500"
      style={{ opacity: isVisible ? 1 : 0 }}
      aria-hidden
    >
      <div
        className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full bg-teal-500/15 blur-[120px] transition-all duration-100 ease-out dark:bg-teal-400/10"
        style={{
          width: "500px",
          height: "500px",
          left: position.x,
          top: position.y,
        }}
      />
    </div>
  );
}
