import { useEffect, useRef, useState } from "react";

export const useScrollReveal = (threshold = 0.08) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Fallback: if the observer never fires, reveal after 1.5s
    const fallbackTimer = setTimeout(() => setVisible(true), 1500);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
          clearTimeout(fallbackTimer);
        }
      },
      { threshold, rootMargin: "100px 0px 100px 0px" }
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      clearTimeout(fallbackTimer);
    };
  }, [threshold]);

  return { ref, visible };
};
