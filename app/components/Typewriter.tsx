"use client";

import { useEffect, useState } from "react";

export function Typewriter({
  text,
  className = "",
  speed = 80,
}: {
  text: string;
  className?: string;
  speed?: number;
}) {
  const [display, setDisplay] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < text.length) {
        setDisplay(text.slice(0, i + 1));
        i++;
      } else {
        setDone(true);
        clearInterval(timer);
      }
    }, speed);
    return () => clearInterval(timer);
  }, [text, speed]);

  return (
    <span className={className}>
      {display}
      {!done && (
        <span className="ml-0.5 inline-block h-[1em] w-2 animate-pulse bg-teal-600" />
      )}
    </span>
  );
}
