import { useEffect, useRef, useState } from "react";

type RevealDirection = "up" | "left" | "right" | "scale";

export const useScrollReveal = (threshold = 0.08, direction: RevealDirection = "up") => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const fallbackTimer = setTimeout(() => setVisible(true), 1500);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
          clearTimeout(fallbackTimer);
        }
      },
      { threshold, rootMargin: "80px 0px 80px 0px" }
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      clearTimeout(fallbackTimer);
    };
  }, [threshold]);

  const className = direction === "left"
    ? "reveal-left"
    : direction === "right"
    ? "reveal-right"
    : direction === "scale"
    ? "reveal-scale"
    : "reveal";

  return { ref, visible, className };
};
